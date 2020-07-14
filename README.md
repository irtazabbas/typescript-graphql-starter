# typescript-graphql-starter
A bootstrap template of GraphQL API using Typescript, Apollo, TypeORM and PostgreSQL.

## Structure
```
src/

    - models/

        - user/ (model name)

            - schema/ (All 'user' model specific GQL SDL definitions go here)

                - user.query.graphql (model's query type definitions)
            
                - user.mutation.graphql (model's mutation type definitions)
            
                - (and so on...)
            
     
            - resolvers/ (model specific GQL resolvers)
            
                - user.query.ts (Query resolvers for 'user' model)
            
                - user.mutation.ts (Mutation resolvers for 'user' model)
            
                - (and so on...)
            
     
            - user.entity.ts (TypORM entity using Active Record pattern)
```
## Main Benefits
- **Breaks down GraphQL Schema** into model/module specific files inside a model/module's directory as `*.graphql` files so that GraphQL intellisense can be used.
- **Breaks down GraphQL Resolvers** into model/module specific files inside a model/module's directory.
- Defines **TypeORM entities** inside a model's directory. Compiles all the entities and injects them in GraphQL resolver's context.

### Future
- Breaking down entity files into static and instance methods.