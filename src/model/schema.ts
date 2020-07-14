import { gql } from 'apollo-server';
import { DocumentNode } from 'graphql';

import getFilePaths from '../utils/getFilePaths';
import getFileContents from '../utils/getFileContents';

const schemaStart = `
type Query {
  _bootstrap: String
}

type Mutation {
  _bootstrap: String
}

type Subscription {
  _bootstrap: String
}
`;

async function compileTypeDefs(): Promise<DocumentNode> {
  console.log('Compiling schema...');
  return getFilePaths('./src/model/**/*.graphql')
    .then((filePaths: string[] = []) => getFileContents(filePaths))
    .then((gqlContent: any[]) => {
      return gqlContent.reduce((acc, current) => {
        acc += `\n#----- ${current.file}\n`;
        acc += current.content;
        return acc;
      }, schemaStart);
    })
    .then((schema: string) => {
      return gql(schema);
    })
    .catch(err => {
      console.log(err);
      return Promise.reject(err);
    });
}

export default compileTypeDefs;
