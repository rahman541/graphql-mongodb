import express from 'express'
import bodyParser from 'body-parser'
import { graphqlExpress } from 'apollo-server-express'
import { makeExecutableSchema } from 'graphql-tools'

import typeDefs from './schema'
import resolvers from './resolvers'
const schema = makeExecutableSchema({
	typeDefs,
	resolvers,
})

const PORT = 4000
const app = express()

app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }))

app.listen(PORT, () => console.log(`Server started at http://localhost:${PORT}`))
