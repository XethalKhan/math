import 'katex/dist/katex.min.css'

import fs from 'fs';

import { remark } from 'remark';
import html from 'remark-html';
import remarkMath from 'remark-math'
import remarkRehype from 'remark-rehype';
import rehypeMathjax from 'rehype-mathjax/svg';
import rehypeStringify from 'rehype-stringify'

import traverseContent from '@/src/traverseContent';

export const dynamicParams = false;

export function generateStaticParams(){
    const result = traverseContent('./content');
    return result;
}

export default async function Page({params}: { params: Promise<{ slug: string[] }> }){
    const { slug } = await params;

    const fileContents = fs.readFileSync(`./content/${slug.join('/')}`, 'utf8');

  // Use remark to convert markdown into HTML string
  const content = await remark()
    .use(html)
    .use(remarkMath)
    .use(remarkRehype)
    .use(rehypeMathjax)
    .use(rehypeStringify)
    .process(fileContents.replaceAll("\\{", "\{").replaceAll("\\}", "\}"));

    return <div dangerouslySetInnerHTML={{ __html: content.toString() }} />;
}