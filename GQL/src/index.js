const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`
  type Query {
    nome: String
    users: [User]
  }

  type User {
    _id: ID!
    name: String!
    email: String!
    active: Boolean!
  }

  type Post {
    _id: ID!
    title: String!
    content: String!
    author: User!
  }
`;

const resolvers = {
  Query: {
    nome: () => 'José Anderson',
    users: () => [
      { _id: String(Math.random()), name: 'João', email: 'joao1@teste.com', active: true },
      { _id: String(Math.random()), name: 'João 2', email: 'joao2@teste.com', active: false },
      { _id: String(Math.random()), name: 'João 3', email: 'joao3@teste.com', active: true },
    ],
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => console.log(`Servidor ativo ${url}`));
