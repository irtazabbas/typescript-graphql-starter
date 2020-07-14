import "reflect-metadata";
import { ApolloServer, gql } from 'apollo-server';
import { createConnection } from "typeorm";

import compileTypeDefs from './model/schema';
import compileResolvers from './model/resolvers';
import compileEntities from './model/entities';
import User from "./model/user/user.entity";


// import resolvers from './gql/resolvers';
// import * as Entities from './entities';

// compileResolvers().then(result => console.log(result)).catch(err => console.log(err))
// compileTypeDefs().then(result => console.log(result)).catch(err => console.log(err))

async function main() {
  const typeDefs = await compileTypeDefs();
  const resolvers = await compileResolvers();
  const entities = await compileEntities();

  createConnection()
    .then(async connection => {
      const server = new ApolloServer({
        typeDefs,
        resolvers,
        context: { db: entities },
        engine: {    
          reportSchema: true
        }
      });

      server.listen().then(({ url }) => {
        console.log(`🚀  Server ready at ${url}`);
      });
    })
    .catch(error => console.log(error));
}

main();
