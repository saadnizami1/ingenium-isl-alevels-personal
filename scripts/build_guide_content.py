#!/usr/bin/env python3
"""
Build src/data/guideContent.json from the study-guide PDFs.

Pipeline:
  1. Drop a category's PDF in  public/study-guides/<slug>.pdf
     (<slug> must match the category slug in src/data/categories.js)
  2. Run:  python scripts/build_guide_content.py
  3. Rebuild the site.

The script extracts the PDF text VERBATIM (via `pdftotext -enc UTF-8`) and
structures it into headings / paragraphs / bullets / meta labels. It never
rewrites wording — only groups the extracted text. Requires poppler's
`pdftotext` on PATH.
"""
import subprocess, re, json, os, glob, sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SRC_DIR = os.path.join(ROOT, "public", "study-guides")
DEST = os.path.join(ROOT, "src", "data", "guideContent.json")

HEAD_KW = (r'(introduction|overview|round overview|general notes|general rules|'
           r'category format|category overview|delegate checklist|conclusion|'
           r'rules|scoring|marking scheme|eligibility|structure|market structure|'
           r'trading mechanism|important guidelines|post-event learning|'
           r'simulation platform|stimulation platform|format|notes|checklist|the format)')
META_RE = re.compile(r'^(delegate cap|team cap|delegate limit|round duration|duration)\b.{0,40}$', re.I)
BULLET = re.compile(r'[○●•◦▪‣▸⁃∙]')          # real bullet glyphs (NOT · middot)
LEAD_BULLET = re.compile(r'^[○●•◦▪‣▸⁃∙]\s+(.*)$')


def is_heading(l):
    s = l.strip().rstrip(':').strip()
    if not s:
        return False
    if re.match(r'^round\s*\d+\b', s, re.I):
        return True
    if re.fullmatch(HEAD_KW, s, re.I):
        return True
    letters = re.sub(r'[^A-Za-z]', '', s)
    if letters and s.upper() == s and len(s) <= 44 and len(s.split()) <= 7:
        return True
    return False


def parse(text):
    text = text.replace('\r', '').replace('\x0c', '\n')
    lines = [ln.strip() for ln in text.split('\n')]

    # drop title block up to & including the "STUDY GUIDE" banner
    start = 0
    for i, ln in enumerate(lines):
        if re.search(r'study\s*guide', ln, re.I):
            start = i + 1
            break
    lines = lines[start:]

    blocks = []
    for ln in lines:
        if not ln:
            continue
        # a lone leading bullet in front of a heading ("● DELEGATE CHECKLIST")
        m = LEAD_BULLET.match(ln)
        if m and is_heading(m.group(1)):
            ln = m.group(1)

        if is_heading(ln):
            blocks.append({"t": "h", "text": ln.strip().rstrip(':').strip()})
            continue
        if META_RE.match(ln):
            blocks.append({"t": "meta", "text": ln.strip()})
            continue
        if BULLET.search(ln):
            segs = [s.strip() for s in BULLET.split(ln)]
            lead, items = segs[0], [s for s in segs[1:] if s]
            if lead:
                blocks.append({"t": "h", "text": lead.rstrip(':').strip()}
                              if is_heading(lead) else {"t": "p", "text": lead})
            for it in items:
                blocks.append({"t": "li", "text": it})
            continue
        # recover bullets collapsed into a single line by 2+ spaces
        parts = [p.strip() for p in re.split(r'\s{2,}', ln) if p.strip()]
        if len(parts) > 1:
            first, rest = parts[0], parts[1:]
            blocks.append({"t": "h", "text": first.rstrip(':').strip()}
                          if (is_heading(first) or len(first.split()) <= 3)
                          else {"t": "p", "text": first})
            for b in rest:
                blocks.append({"t": "li", "text": b})
        else:
            blocks.append({"t": "p", "text": ln})

    # collapse consecutive duplicate blocks (Canva double-printed text)
    deduped = []
    for b in blocks:
        if deduped and deduped[-1]["t"] == b["t"] and \
           deduped[-1]["text"].strip().lower() == b["text"].strip().lower():
            continue
        deduped.append(b)
    return deduped


def main():
    pdfs = sorted(glob.glob(os.path.join(SRC_DIR, "*.pdf")))
    if not pdfs:
        print("No PDFs found in", SRC_DIR)
        sys.exit(1)
    out = {}
    for path in pdfs:
        slug = os.path.splitext(os.path.basename(path))[0]
        slug = re.sub(r'^\d+[-_]', '', slug).lower()
        raw = subprocess.run(["pdftotext", "-enc", "UTF-8", path, "-"],
                             capture_output=True).stdout.decode("utf-8", "replace")
        out[slug] = {"blocks": parse(raw)}
        print(f"  {slug:28} {len(out[slug]['blocks'])} blocks")
    os.makedirs(os.path.dirname(DEST), exist_ok=True)
    with open(DEST, "w", encoding="utf-8") as f:
        json.dump(out, f, ensure_ascii=False, indent=1)
    print("wrote", DEST, f"({len(out)} guides)")


if __name__ == "__main__":
    main()
