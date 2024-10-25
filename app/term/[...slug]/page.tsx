import fs from 'fs';

import { remark } from 'remark';
import html from 'remark-html';

import traverseContent from '@/src/traverseContent';

export const dynamicParams = false;

export function generateStaticParams(){
    const result = traverseContent('./content');
    console.log(result);
    return result;
}

export default async function Page({params}: { params: { slug: string[] } }){
    const { slug } = await params;

    const fileContents = fs.readFileSync(`./content/${slug.join('/')}.md`, 'utf8');

  // Use remark to convert markdown into HTML string
  const content = await remark()
    .use(html)
    .process(fileContents);

    return <div dangerouslySetInnerHTML={{ __html: content.toString() }} />;
    // return <h1>{slug.join('/')}</h1>;
}