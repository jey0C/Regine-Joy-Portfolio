import re

links = [
    ("Catch of the day", "Presentations", "https://canva.link/ii59j786jppq3r3"),
    ("Huzons", "Presentations", "https://canva.link/n8yezxjjoqvxsfd"),
    ("Mpowered", "Presentations", "https://canva.link/ciueyvrl3lfvter"),
    ("Tiktok", "Presentations", "https://canva.link/vridhwunfghwzzh"),
    ("Global Food Security", "Presentations", "https://canva.link/vnnn3ea3k20d7hc"),
    ("Kommute", "Presentations", "https://canva.link/4xwuge615gxud1i"),
    ("Nexu", "Presentations", "https://canva.link/2h4hkdpkmq7xs07"),
    ("Sunlife", "Presentations", "https://canva.link/kp0c5ohfxcl0kx1"),
    ("Kalan", "Posters", "https://canva.link/kalanphmenu2026"),
    ("Iloilo 360", "Posters", "https://drive.google.com/drive/folders/1C95ZR9hXJsSg93flrBDJIzDLsr_WQS8n?usp=sharing"),
    ("Jump n Slide", "Posters", "https://drive.google.com/drive/folders/1vuQasJTRLCQE-ukjnlgWx8obAzCPKIxu?usp=sharing"),
    ("BMAP", "Stickers", "https://drive.google.com/drive/folders/1ZCH2xBbKqfReHVliMRRVe_79WNjidcsM?usp=sharing"),
    ("Iloilo Supermart", "Video Commercials", "https://www.facebook.com/iloilosupermart/videos/to-the-one-who-has-always-been-there-thank-you-mom-for-your-endless-love-guidanc/1403423417516387/"),
    ("Kumon", "Video Commercials", "https://www.facebook.com/jeheyms.argel/videos/adfest20-3rd-place-best-tv-ad-3rd-place-best-director3rd-place-best-taglineon-be/1761365211469371/"),
    ("Rex x Schoology", "Video Commercials", "https://drive.google.com/file/d/1qQptiCfzXVvq4QO9R8FI1iMeINWghWSt/view?usp=sharing"),
    ("BMAP Shirt", "TShirt", "https://drive.google.com/file/d/1nW_AbyipCZQw111Fza9N00vwAGNoPTLZ/view?usp=sharing"),
    ("BMAP", "Social Media Assets", "https://www.canva.com/design/DAHPKOPNZNQ/9XsrNA6fNJ8KT-7GmGHqBg/view?utm_content=DAHPKOPNZNQ&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hffdf40b191"),
    ("Komersyolympics", "Social Media Assets", "https://drive.google.com/drive/folders/15NjSruSOj72OF2BdO_hbCOKY5EHEPK1d?usp=sharing"),
    ("Sunlife", "Social Media Assets", "https://drive.google.com/drive/folders/10syooEey1IZvt8Kv9MbFyI_PFXyUyYBm?usp=sharing"),
    ("Mpowered", "Social Media Assets", "https://canva.link/rnhs3x1qd9fbcxm"),
    ("Uptown Puff", "Social Media Assets", "https://drive.google.com/drive/folders/1WjsSo88p3TB2pB8yJ7wNAqRIzLXlLNkt?usp=sharing")
]

with open('src/pages/WorksPage.tsx', 'r') as f:
    content = f.read()

for title, category, link in links:
    # Look for the block containing both the title and category
    # Since they can be in any order or on same line, we use a regex to match the object contents
    # We will split the array content into objects and replace in them.
    
    # We can match `category: 'category',` and `title: 'title',` and insert `externalLink: 'link',` after description
    
    # Wait, it's easier to just do it via a simple state machine.
    pass

import sys
lines = content.split('\n')
out = []
in_all_projects = False
braces_depth = 0
current_obj = []

def process_obj(obj_lines):
    text = '\n'.join(obj_lines)
    for title, cat, link in links:
        if f"title: '{title}'" in text and f"category: '{cat}'" in text:
            # find where to insert
            if "externalLink:" not in text:
                # insert after description
                text = re.sub(r'(description: .*?,?)', r"\1 externalLink: '" + link + "',", text)
                if text == '\n'.join(obj_lines):
                    # For BMAP shirt that is on one line
                    text = re.sub(r'(description: ".*?",?)', r'\1 externalLink: "' + link + '",', text)
            break
    return text

new_lines = []
i = 0
while i < len(lines):
    line = lines[i]
    if 'const allProjects = [' in line:
        new_lines.append(line)
        in_all_projects = True
        i += 1
        continue
    
    if in_all_projects:
        if line.strip() == '];':
            in_all_projects = False
            new_lines.append(line)
            i += 1
            continue
            
        # We process objects
        if '{' in line:
            obj_lines = [line]
            depth = line.count('{') - line.count('}')
            i += 1
            while depth > 0 and i < len(lines):
                obj_lines.append(lines[i])
                depth += lines[i].count('{') - lines[i].count('}')
                i += 1
            
            new_lines.append(process_obj(obj_lines))
            continue
            
    new_lines.append(line)
    i += 1

with open('src/pages/WorksPage.tsx', 'w') as f:
    f.write('\n'.join(new_lines))

