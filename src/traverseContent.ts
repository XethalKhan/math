import Path from "path";
import FS from "fs";

// const postsDirectory = Path.join(process.cwd(), 'content');

function createSlug(directory, file){
    return Path.join(
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
}

export default function traverseContent(Directory: string){
    let Files  = [];

    const ThroughDirectory = (Directory) => {
        FS.readdirSync(Directory).forEach(File => {
            const Absolute = Path.join(Directory, File);
            const Slug = createSlug(Directory, File);
            if (FS.statSync(Absolute).isDirectory()) return ThroughDirectory(Absolute);
            else return Files.push({
                // path: Absolute.substring(Absolute.indexOf('/') + 1, Absolute.length),
                slug: Slug
            });
        });
    }

    ThroughDirectory(Directory);

    return Files;
}
