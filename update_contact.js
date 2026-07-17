import fs from 'fs';
let code = fs.readFileSync('src/pages/ContactPage.tsx', 'utf8');
code = code.replace(/alert\("Failed to send message\. Please try again later\."\);/, 'const errData = await response.json().catch(()=>({}));\n                          alert(`Failed to send message: ${errData.details || errData.error || "Please try again later."}`);');
fs.writeFileSync('src/pages/ContactPage.tsx', code);
