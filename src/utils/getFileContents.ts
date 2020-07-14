
import { readFile } from 'fs';

export default (filePaths: string[]) => {
  return Promise.all(
    filePaths.map(filePath => {
      return new Promise((resolve, reject) => {
        readFile(filePath, (error, content) => {
          if (error) reject(error);
          else resolve({
            filePath,
            content: content.toString()
          });
        })
      })
    })
  );
}
