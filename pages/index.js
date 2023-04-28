import MyHtml from './html/index.html';

export default function Home() {
    return <div dangerouslySetInnerHTML={{ __html: MyHtml }} />;
}
