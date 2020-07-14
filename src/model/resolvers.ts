import { IResolvers } from 'apollo-server';

import getFileImports from '../utils/getFileImports';

async function compileResolvers(): Promise<IResolvers> {
  console.log('Compiling resolvers...');
  const parent = {};

  const allFiles: any = await Promise.all(
    [
      '.query.ts',
      '.mutation.ts',
      '.subscription.ts'
    ].map(fileEnding => getFileImports(`**/model/*/resolvers/*${fileEnding}`))
  );

  [
    'Query', 'Mutation', 'Subscription'
  ].forEach((key, i) => {
    parent[key] = allFiles[i].reduce((acc, current) => {
      return {...acc, ...current};
    }, {});
  })

  return parent;
}


export default compileResolvers;
