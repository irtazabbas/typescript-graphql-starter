
import getFilePaths from './getFilePaths';
import importFile from './importFile';

export default (globPattern: string) => {
  return getFilePaths(globPattern)
    .then((files: string[]) => {
      return files.map(file => importFile(`../../${file}`).default)
    });
}
