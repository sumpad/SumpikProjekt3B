import { QueryResolvers } from './type-defs.graphqls';
import { ResolverContext } from './with-apollo';

const Query: Required<QueryResolvers<ResolverContext>> = {
  viewer(_parent, _args, _context, _info) {
    return { id: String(1), name: 'ADMIN', status: 'prihlasen' };
  },

  getRandom(_parent, _args, _context, _info) {
    const { max } = _args;
    return Math.round(Math.random() * max);
  },
};

export default { Query };
