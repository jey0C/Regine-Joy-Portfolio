import re

links = {
    ('Catch of the day', 'Presentations'): 'https://canva.link/ii59j786jppq3r3',
    ('Huzons', 'Presentations'): 'https://canva.link/n8yezxjjoqvxsfd',
    ('Mpowered', 'Presentations'): 'https://canva.link/ciueyvrl3lfvter',
    ('Tiktok', 'Presentations'): 'https://canva.link/vridhwunfghwzzh',
    ('Global Food Security', 'Presentations'): 'https://canva.link/vnnn3ea3k20d7hc',
    ('Kommute', 'Presentations'): 'https://canva.link/4xwuge615gxud1i',
    ('Nexu', 'Presentations'): 'https://canva.link/2h4hkdpkmq7xs07',
    ('Sunlife', 'Presentations'): 'https://canva.link/kp0c5ohfxcl0kx1',
    ('Kalan', 'Posters'): 'https://canva.link/kalanphmenu2026',
    ('Iloilo 360', 'Posters'): 'https://drive.google.com/drive/folders/1C95ZR9hXJsSg93flrBDJIzDLsr_WQS8n?usp=sharing',
    ('Jump n Slide', 'Posters'): 'https://drive.google.com/drive/folders/1vuQasJTRLCQE-ukjnlgWx8obAzCPKIxu?usp=sharing',
    ('BMAP', 'Stickers'): 'https://drive.google.com/drive/folders/1ZCH2xBbKqfReHVliMRRVe_79WNjidcsM?usp=sharing',
    ('Iloilo Supermart', 'Video Commercials'): 'https://www.facebook.com/iloilosupermart/videos/to-the-one-who-has-always-been-there-thank-you-mom-for-your-endless-love-guidanc/1403423417516387/',
    ('Kumon', 'Video Commercials'): 'https://www.facebook.com/jeheyms.argel/videos/adfest20-3rd-place-best-tv-ad-3rd-place-best-director3rd-place-best-taglineon-be/1761365211469371/',
    ('Rex x Schoology', 'Video Commercials'): 'https://drive.google.com/file/d/1qQptiCfzXVvq4QO9R8FI1iMeINWghWSt/view?usp=sharing',
    ('BMAP Shirt', 'TShirt'): 'https://drive.google.com/file/d/1nW_AbyipCZQw111Fza9N00vwAGNoPTLZ/view?usp=sharing',
    ('BMAP', 'Social Media Assets'): 'https://www.canva.com/design/DAHPKOPNZNQ/9XsrNA6fNJ8KT-7GmGHqBg/view?utm_content=DAHPKOPNZNQ&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hffdf40b191',
    ('Komersyolympics', 'Social Media Assets'): 'https://drive.google.com/drive/folders/15NjSruSOj72OF2BdO_hbCOKY5EHEPK1d?usp=sharing',
    ('Sunlife', 'Social Media Assets'): 'https://drive.google.com/drive/folders/10syooEey1IZvt8Kv9MbFyI_PFXyUyYBm?usp=sharing',
    ('Mpowered', 'Social Media Assets'): 'https://canva.link/rnhs3x1qd9fbcxm',
    ('Uptown Puff', 'Social Media Assets'): 'https://drive.google.com/drive/folders/1WjsSo88p3TB2pB8yJ7wNAqRIzLXlLNkt?usp=sharing'
}

with open('src/pages/WorksPage.tsx', 'r') as f:
    content = f.read()

# The objects start with "    { " and end with "    },"
# Let's split by "    {\n" and "    { "
pattern = r'(?:\s*\{\s*)(.*?)(?:\s*\},|\s*\}\s*])'
# Actually, since it's formatted like:
#    { 
#      id: 23, 
#      title: 'BMAP', 
#      category: 'Social Media Assets', ...
# We can just iterate through each dictionary manually or parse it roughly.

out = []
blocks = re.split(r'(    \{\s*\n|    \{ id: \d+)', content)

# I will just write a simpler matcher:
new_content = content
for (title, cat), link in links.items():
    # we need to find the specific block where title is 'title' and category is 'cat'
    # we can just use regex substitution with a lambda
    pass

import json
# I'll just use the AST approach with a small python parser
