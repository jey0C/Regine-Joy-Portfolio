import fs from 'fs';
let code = fs.readFileSync('server.ts', 'utf8');
code = code.replace(/const pass = process.env.EMAIL_PASS;/, "const pass = process.env.EMAIL_PASS?.replace(/\\s+/g, '');");
fs.writeFileSync('server.ts', code);

let code2 = fs.readFileSync('api/contact.ts', 'utf8');
code2 = code2.replace(/const pass = process.env.EMAIL_PASS;/, "const pass = process.env.EMAIL_PASS?.replace(/\\s+/g, '');");
fs.writeFileSync('api/contact.ts', code2);
