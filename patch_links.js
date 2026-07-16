const fs = require('fs');

const links = [
  { match: (p) => p.title === 'Catch of the day' && p.category === 'Presentations', link: 'https://canva.link/ii59j786jppq3r3' },
  { match: (p) => p.title === 'Huzons' && p.category === 'Presentations', link: 'https://canva.link/n8yezxjjoqvxsfd' },
  { match: (p) => p.title === 'Mpowered' && p.category === 'Presentations', link: 'https://canva.link/ciueyvrl3lfvter' },
  { match: (p) => p.title === 'Tiktok' && p.category === 'Presentations', link: 'https://canva.link/vridhwunfghwzzh' },
  { match: (p) => p.title === 'Global Food Security' && p.category === 'Presentations', link: 'https://canva.link/vnnn3ea3k20d7hc' },
  { match: (p) => p.title === 'Kommute' && p.category === 'Presentations', link: 'https://canva.link/4xwuge615gxud1i' },
  { match: (p) => p.title === 'Nexu' && p.category === 'Presentations', link: 'https://canva.link/2h4hkdpkmq7xs07' },
  { match: (p) => p.title === 'Sunlife' && p.category === 'Presentations', link: 'https://canva.link/kp0c5ohfxcl0kx1' },
  { match: (p) => p.title === 'Kalan' && p.category === 'Posters', link: 'https://canva.link/kalanphmenu2026' },
  { match: (p) => p.title === 'Iloilo 360' && p.category === 'Posters', link: 'https://drive.google.com/drive/folders/1C95ZR9hXJsSg93flrBDJIzDLsr_WQS8n?usp=sharing' },
  { match: (p) => p.title === 'Jump n Slide' && p.category === 'Posters', link: 'https://drive.google.com/drive/folders/1vuQasJTRLCQE-ukjnlgWx8obAzCPKIxu?usp=sharing' },
  { match: (p) => p.title === 'BMAP' && p.category === 'Stickers', link: 'https://drive.google.com/drive/folders/1ZCH2xBbKqfReHVliMRRVe_79WNjidcsM?usp=sharing' },
  { match: (p) => p.title === 'Iloilo Supermart' && p.category === 'Video Commercials', link: 'https://www.facebook.com/iloilosupermart/videos/to-the-one-who-has-always-been-there-thank-you-mom-for-your-endless-love-guidanc/1403423417516387/' },
  { match: (p) => p.title === 'Kumon' && p.category === 'Video Commercials', link: 'https://www.facebook.com/jeheyms.argel/videos/adfest20-3rd-place-best-tv-ad-3rd-place-best-director3rd-place-best-taglineon-be/1761365211469371/' },
  { match: (p) => p.title === 'Rex x Schoology' && p.category === 'Video Commercials', link: 'https://drive.google.com/file/d/1qQptiCfzXVvq4QO9R8FI1iMeINWghWSt/view?usp=sharing' },
  { match: (p) => p.title === 'BMAP Shirt' && p.category === 'TShirt', link: 'https://drive.google.com/file/d/1nW_AbyipCZQw111Fza9N00vwAGNoPTLZ/view?usp=sharing' },
  { match: (p) => p.title === 'BMAP' && p.category === 'Social Media Assets', link: 'https://www.canva.com/design/DAHPKOPNZNQ/9XsrNA6fNJ8KT-7GmGHqBg/view?utm_content=DAHPKOPNZNQ&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hffdf40b191' },
  { match: (p) => p.title === 'Komersyolympics' && p.category === 'Social Media Assets', link: 'https://drive.google.com/drive/folders/15NjSruSOj72OF2BdO_hbCOKY5EHEPK1d?usp=sharing' },
  { match: (p) => p.title === 'Sunlife' && p.category === 'Social Media Assets', link: 'https://drive.google.com/drive/folders/10syooEey1IZvt8Kv9MbFyI_PFXyUyYBm?usp=sharing' },
  { match: (p) => p.title === 'Mpowered' && p.category === 'Social Media Assets', link: 'https://canva.link/rnhs3x1qd9fbcxm' },
  { match: (p) => p.title === 'Uptown Puff' && p.category === 'Social Media Assets', link: 'https://drive.google.com/drive/folders/1WjsSo88p3TB2pB8yJ7wNAqRIzLXlLNkt?usp=sharing' }
];

let content = fs.readFileSync('src/pages/WorksPage.tsx', 'utf8');

// Find the start and end of allProjects array
const startIndex = content.indexOf('const allProjects = [');
if (startIndex !== -1) {
    // I need to properly parse it or use regex. 
    // Since objects are well-structured, I can use regex to inject externalLink
}
