import fs from "fs";
import matter from "gray-matter";
import path from "path";
import getAllFilesRecursively from "./files";


const root = process.cwd();

export async function getAllFilesFrontMatter(folder) {
  const prefixPaths = path.join(root, "data", folder);

  const files = getAllFilesRecursively(prefixPaths);

  const allFrontMatter = [];

  files.forEach(async (file) => {
    const fileName = file.slice(prefixPaths.length + 1).replace(/\\/g, "/");

    if (path.extname(fileName) !== ".md" && path.extname(fileName) !== ".mdx") {
      return;
    }
    const source = fs.readFileSync(file, "utf8");

    const { data: frontmatter,content } = matter(source);

    allFrontMatter.push({
      ...frontmatter,
      content,
    });
  });

  return allFrontMatter;
}
