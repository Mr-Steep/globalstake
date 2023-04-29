import fs from 'fs';
const MyHtml = fs.readFileSync('./app/html/index.html', 'utf-8');
export default function Home() {
    return <div dangerouslySetInnerHTML={{ __html: MyHtml }} />;
}
