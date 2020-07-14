import * as glob from 'glob';

export default (globPattern: string) => {
  return new Promise((resolve, reject) => {
    glob(globPattern, (error, files) => {
      if (error) reject(error);
      else resolve(files);
    });
  });
}
