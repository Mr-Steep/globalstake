import Header from './../html/components/header.html';

export default function Home() {
    return <div dangerouslySetInnerHTML={{ __html: Header }} />;
}
