import fs from 'fs';
const Pricing = fs.readFileSync('./app/html/pricing.html', 'utf-8');

export default function Home() {
    return <div dangerouslySetInnerHTML={{ __html: Pricing }} />;
}
