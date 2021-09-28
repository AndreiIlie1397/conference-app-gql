const helloWorldResolvers = {
    Query: {
        myFirstEndpoint: async (_parent, _arguments, _context, _info) => {
            return "GraphQL"
        }
    }
};

module.exports = helloWorldResolvers;