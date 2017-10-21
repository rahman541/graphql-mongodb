export default `
	type Cat {
		_id: String!
	}

	type Query {
		allCats: [Cat!]!
	}

	type Mutation {
		createCat(name: String!): Cat!
	}
`