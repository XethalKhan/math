1. COnsider adding metadata into .MD files with "gray-matter" package (https://nextjs.org/learn-pages-router/basics/data-fetching/blog-data)

2. Add all .MD rendering specific rules from github into code like 

fileContents.replaceAll("\\{", "\{").replaceAll("\\}", "\}")
