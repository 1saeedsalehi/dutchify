import fs from "fs";
import matter from "gray-matter";
import path from "path";

const root = process.cwd();

export async function getAllPostsWithFrontMatter(dataType: string) {
  const prefixPaths = path.join(root, "data", dataType);
  const files = fs.readdirSync(prefixPaths);
  
  return files.map((fileName ) => {
    const filePath = path.join(prefixPaths,fileName)

    const source = fs.readFileSync(filePath, "utf8");

    const { data: frontmatter, content } = matter(source);

    return ({
      data : frontmatter,
      content : content,
    })
  }, []);
}
