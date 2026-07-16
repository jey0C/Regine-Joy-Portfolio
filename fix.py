import re

with open('src/pages/WorksPage.tsx', 'r') as f:
    content = f.read()

# Replace: description:  externalLink: 'link', 'text',
# With: externalLink: 'link', description: 'text',
# or externalLink: "link", description: "text",

def repl(m):
    return f"externalLink: '{m.group(1)}',\n      description: {m.group(2)}"

content = re.sub(r"description:\s*externalLink:\s*'([^']*)',\s*('|\")", repl, content)

with open('src/pages/WorksPage.tsx', 'w') as f:
    f.write(content)
