import Image from 'next/image'
import Pricing from './html/pricing.html';

import {Inter} from 'next/font/google'

const inter = Inter({subsets: ['latin']})

export default function Home() {
    return <div dangerouslySetInnerHTML={{ __html: Pricing }} />;
}
