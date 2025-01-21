import Path from "path";
import FS from "fs";

// const postsDirectory = Path.join(process.cwd(), 'content');

function createSlug(directory, file){
    let result = Path.join(
        directory
            .substring(
                directory.indexOf('/') + 1,
                directory.length
            ),
        file
            // .substring(
            //     file.indexOf('-') + 1,
            //     file.length
            // )
            // .slice(0, -3)
    ).split('/');

    if(result[0] === 'content'){
        result.shift();
    }

    return result;
}

export default function traverseContent(Directory: string){
    let Files  = [];

    const traverseDirectory = (Directory) => {
        FS.readdirSync(Directory).forEach(File => {
            const Absolute = Path.join(Directory, File);
            const Slug = createSlug(Directory, File);
            if (FS.statSync(Absolute).isDirectory()) return traverseDirectory(Absolute);
            else return Files.push({
                // path: Absolute.substring(Absolute.indexOf('/') + 1, Absolute.length),
                slug: Slug
            });
        });
    }

    traverseDirectory(Directory);

    return Files;
}
