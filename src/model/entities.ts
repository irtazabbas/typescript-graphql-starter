
import { BaseEntity } from 'typeorm';

import getFileImports from '../utils/getFileImports';

async function compileEntities(): Promise<{[key: string]: BaseEntity}> {
  console.log('Compiling entities...');
  const entities = await getFileImports(
    '**/model/*/*.entity.ts'
  );

  return entities.reduce(
    (acc, curr) => { acc[curr.name] = curr; return acc; },
    {}
  );
}

export default compileEntities;
