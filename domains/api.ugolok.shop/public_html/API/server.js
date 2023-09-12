const { ApolloServer } = require('apollo-server')
const typeDefs = require('./src/product/schema')
const resolvers = require('./src/product/resolver')

const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
  playground: true,
  cors: {
    origin: 'https://ugolok.shop', // adjust this to fit your needs
    credentials: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: ['Content-Type', 'Authorization']
  },
})

server
  .listen({ port: process.env.PORT || 49700 })
  .then(({ url }) => console.log('Server is running on localhost:49700', url))
