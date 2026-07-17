import fs from 'fs';
let code = fs.readFileSync('server.ts', 'utf8');
code = code.replace(/service:\s*'gmail',\s*\/\/[^\n]*\n/, "host: 'smtp.gmail.com',\n      port: 465,\n      secure: true,\n");
fs.writeFileSync('server.ts', code);
