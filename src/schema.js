const User = require('../server/models').User;
const Property = require('../server/models').Property;

let {
  // These are the basic GraphQL types need in this tutorial
  GraphQLString,
  GraphQLFloat,
  GraphQLList,
  GraphQLObjectType,
  // This is used to create required fileds and arguments
  GraphQLNonNull,
  // This is the class we need to create the schema
  GraphQLSchema,
} = require('graphql');



const PropertyType = new GraphQLObjectType({
  name: "Property",
  description: "This represent an user properties",
  fields: () => ({
    id: {
		type: GraphQLString
	},
	street: {
		type: GraphQLString
	},
	city: {
		type: GraphQLString
	},
	state: {
		type: GraphQLString
	},
	zip: {
		type: GraphQLString
	},
	rent: {
		type: GraphQLFloat
	}
  })
});

const UserType = new GraphQLObjectType({
  name: "User",
  description: "This represent a User",
  fields: () => ({
	id: {
		type: new GraphQLNonNull(GraphQLString)
	},
	firstName: {
		type: GraphQLString
	},
	lastName: {
		type: GraphQLString
	},
	email: {
		type: GraphQLString
	},
    properties: {
      type: new GraphQLList(PropertyType),
      resolve: function(obj, args) {
        return Property.findAll({
        	where: {
        		userId: obj.id
        	}
        });
      }
    }
  })
});

// This is the Root Query
const QueryRootType = new GraphQLObjectType({
  name: 'Query',
  description: "Rent Property Application Schema Root",
  fields: () => ({
    users: {
      type: new GraphQLList(UserType),
      description: "List of all users",
      args: {
        searchString: {type: new GraphQLNonNull(GraphQLString)},
      },
      resolve: function(root, args) {
        return User.findAll({
        	where: {
        		$or: {
				  firstName: {
				    $like: '%' + args.searchString + '%'
				  },
				  lastName: {
				    $like: '%' + args.searchString + '%'
				  }
				}
        	}
        });
      }
    },
    properties: {
      type: new GraphQLList(PropertyType),
      description: "List of all Properties",
      resolve: function(obj, args) {
        return Property.findAll({});
      }
    }
  })
});

// This is the schema declaration
const RentAppSchema = new GraphQLSchema({
  query: QueryRootType
  // If you need to create or updata a datasource, 
  // you use mutations. Note:
  // mutations will not be explored in this post.
  // mutation: BlogMutationRootType 
});

module.exports = RentAppSchema;