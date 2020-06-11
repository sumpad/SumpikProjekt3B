import { makeExecutableSchema } from 'graphql-tools';

import resolvers from './resolvers';
import typeDefs from './type-defs.graphqls';

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

export default schema;
