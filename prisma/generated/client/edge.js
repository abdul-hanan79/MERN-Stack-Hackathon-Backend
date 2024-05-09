
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  NotFoundError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
} = require('./runtime/edge')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.3.1
 * Query Engine version: 61e140623197a131c2a6189271ffee05a7aa9a59
 */
Prisma.prismaVersion = {
  client: "5.3.1",
  engine: "61e140623197a131c2a6189271ffee05a7aa9a59"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.NotFoundError = NotFoundError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */
exports.Prisma.UserScalarFieldEnum = {
  id: 'id',
  name: 'name',
  email: 'email',
  password: 'password',
  role: 'role',
  createdAt: 'createdAt'
};

exports.Prisma.ProductScalarFieldEnum = {
  id: 'id',
  name: 'name',
  category: 'category',
  description: 'description',
  price: 'price',
  color: 'color',
  size: 'size',
  image: 'image',
  stock: 'stock',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  userId: 'userId'
};

exports.Prisma.RatingsScalarFieldEnum = {
  id: 'id',
  rating: 'rating',
  review: 'review',
  userId: 'userId',
  productId: 'productId'
};

exports.Prisma.CartScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.CartItemsScalarFieldEnum = {
  id: 'id',
  cartId: 'cartId',
  productId: 'productId',
  price: 'price',
  quantity: 'quantity'
};

exports.Prisma.OrderScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  totalPrice: 'totalPrice',
  status: 'status',
  shippingAddress: 'shippingAddress',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.OrderItemScalarFieldEnum = {
  id: 'id',
  productId: 'productId',
  quantity: 'quantity',
  orderId: 'orderId'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};


exports.Prisma.ModelName = {
  User: 'User',
  Product: 'Product',
  Ratings: 'Ratings',
  Cart: 'Cart',
  CartItems: 'CartItems',
  Order: 'Order',
  OrderItem: 'OrderItem'
};
/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "E:\\My Work\\SMIT\\finalHackathon\\backend\\prisma\\generated\\client",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "windows",
        "native": true
      }
    ],
    "previewFeatures": [
      "mongoDb"
    ],
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": "../../../.env",
    "schemaEnvPath": "../../../.env"
  },
  "relativePath": "../..",
  "clientVersion": "5.3.1",
  "engineVersion": "61e140623197a131c2a6189271ffee05a7aa9a59",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "mongodb",
  "postinstall": false,
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "DATABASE_URL",
        "value": null
      }
    }
  },
  "inlineSchema": "Ly8gVGhpcyBpcyB5b3VyIFByaXNtYSBzY2hlbWEgZmlsZSwKLy8gbGVhcm4gbW9yZSBhYm91dCBpdCBpbiB0aGUgZG9jczogaHR0cHM6Ly9wcmlzLmx5L2QvcHJpc21hLXNjaGVtYQpnZW5lcmF0b3IgY2xpZW50IHsKICBwcm92aWRlciAgICAgICAgPSAicHJpc21hLWNsaWVudC1qcyIKICBwcmV2aWV3RmVhdHVyZXMgPSBbIm1vbmdvZGIiXQogIG91dHB1dCAgICAgICAgICA9ICIuL2dlbmVyYXRlZC9jbGllbnQiCn0KCmRhdGFzb3VyY2UgZGIgewogIHByb3ZpZGVyID0gIm1vbmdvZGIiCiAgdXJsICAgICAgPSBlbnYoIkRBVEFCQVNFX1VSTCIpCn0KCm1vZGVsIFVzZXIgewogIGlkICAgICAgICBTdHJpbmcgICAgQGlkIEBkZWZhdWx0KGF1dG8oKSkgQG1hcCgiX2lkIikgQGRiLk9iamVjdElkCiAgbmFtZSAgICAgIFN0cmluZwogIGVtYWlsICAgICBTdHJpbmcgICAgQHVuaXF1ZQogIHBhc3N3b3JkICBTdHJpbmcKICByb2xlICAgICAgU3RyaW5nICAgIEBkZWZhdWx0KCJ2aXNpdG9yIikKICBjcmVhdGVkQXQgRGF0ZVRpbWUgIEBkZWZhdWx0KG5vdygpKQogIHByb2R1Y3RzICBQcm9kdWN0W10KICBDYXJ0ICAgICAgQ2FydFtdCiAgT3JkZXIgICAgIE9yZGVyW10KfQoKbW9kZWwgUHJvZHVjdCB7CiAgaWQgICAgICAgICAgU3RyaW5nICAgIEBpZCBAZGVmYXVsdChhdXRvKCkpIEBtYXAoIl9pZCIpIEBkYi5PYmplY3RJZAogIG5hbWUgICAgICAgIFN0cmluZwogIGNhdGVnb3J5ICAgIFN0cmluZwogIGRlc2NyaXB0aW9uIFN0cmluZwogIHByaWNlICAgICAgIEZsb2F0CiAgY29sb3IgICAgICAgU3RyaW5nCiAgc2l6ZSAgICAgICAgU3RyaW5nCiAgaW1hZ2UgICAgICAgU3RyaW5nCiAgc3RvY2sgICAgICAgU3RyaW5nCiAgY3JlYXRlZEF0ICAgRGF0ZVRpbWUgIEBkZWZhdWx0KG5vdygpKQogIHVwZGF0ZWRBdCAgIERhdGVUaW1lPyBAZGVmYXVsdChub3coKSkgQHVwZGF0ZWRBdAogIFVzZXIgICAgICAgIFVzZXI/ICAgICBAcmVsYXRpb24oZmllbGRzOiBbdXNlcklkXSwgcmVmZXJlbmNlczogW2lkXSkKICB1c2VySWQgICAgICBTdHJpbmcgICAgQGRiLk9iamVjdElkCiAgcmF0aW5ncyAgICAgUmF0aW5nc1tdCn0KCm1vZGVsIFJhdGluZ3MgewogIGlkICAgICAgICBTdHJpbmcgICBAaWQgQGRlZmF1bHQoYXV0bygpKSBAbWFwKCJfaWQiKSBAZGIuT2JqZWN0SWQKICByYXRpbmcgICAgSW50CiAgcmV2aWV3ICAgIFN0cmluZwogIHVzZXJJZCAgICBTdHJpbmcgICBAZGIuT2JqZWN0SWQKICBwcm9kdWN0ICAgUHJvZHVjdD8gQHJlbGF0aW9uKGZpZWxkczogW3Byb2R1Y3RJZF0sIHJlZmVyZW5jZXM6IFtpZF0pCiAgcHJvZHVjdElkIFN0cmluZz8gIEBkYi5PYmplY3RJZAp9Cgptb2RlbCBDYXJ0IHsKICBpZCAgICAgICAgU3RyaW5nICAgICAgQGlkIEBkZWZhdWx0KGF1dG8oKSkgQG1hcCgiX2lkIikgQGRiLk9iamVjdElkCiAgVXNlciAgICAgIFVzZXI/ICAgICAgIEByZWxhdGlvbihmaWVsZHM6IFt1c2VySWRdLCByZWZlcmVuY2VzOiBbaWRdKQogIHVzZXJJZCAgICBTdHJpbmcgICAgICBAZGIuT2JqZWN0SWQKICBpdGVtcyAgICAgQ2FydEl0ZW1zW10KICBjcmVhdGVkQXQgRGF0ZVRpbWUgICAgQGRlZmF1bHQobm93KCkpCiAgdXBkYXRlZEF0IERhdGVUaW1lICAgIEB1cGRhdGVkQXQKfQoKbW9kZWwgQ2FydEl0ZW1zIHsKICBpZCAgICAgICAgU3RyaW5nICBAaWQgQGRlZmF1bHQoYXV0bygpKSBAbWFwKCJfaWQiKSBAZGIuT2JqZWN0SWQKICBDYXJ0ICAgICAgQ2FydD8gICBAcmVsYXRpb24oZmllbGRzOiBbY2FydElkXSwgcmVmZXJlbmNlczogW2lkXSkKICBjYXJ0SWQgICAgU3RyaW5nPyBAZGIuT2JqZWN0SWQKICBwcm9kdWN0SWQgU3RyaW5nICBAZGIuT2JqZWN0SWQKICBwcmljZSAgICAgRmxvYXQKICBxdWFudGl0eSAgSW50Cn0KCm1vZGVsIE9yZGVyIHsKICBpZCAgICAgICAgICAgICAgU3RyaW5nICAgICAgQGlkIEBkZWZhdWx0KGF1dG8oKSkgQG1hcCgiX2lkIikgQGRiLk9iamVjdElkCiAgVXNlciAgICAgICAgICAgIFVzZXI/ICAgICAgIEByZWxhdGlvbihmaWVsZHM6IFt1c2VySWRdLCByZWZlcmVuY2VzOiBbaWRdKQogIHVzZXJJZCAgICAgICAgICBTdHJpbmcgICAgICBAZGIuT2JqZWN0SWQKICBpdGVtcyAgICAgICAgICAgT3JkZXJJdGVtW10KICB0b3RhbFByaWNlICAgICAgRmxvYXQKICBzdGF0dXMgICAgICAgICAgU3RyaW5nCiAgc2hpcHBpbmdBZGRyZXNzIFN0cmluZwogIGNyZWF0ZWRBdCAgICAgICBEYXRlVGltZSAgICBAZGVmYXVsdChub3coKSkKICB1cGRhdGVkQXQgICAgICAgRGF0ZVRpbWUgICAgQHVwZGF0ZWRBdAp9Cgptb2RlbCBPcmRlckl0ZW0gewogIGlkICAgICAgICBTdHJpbmcgIEBpZCBAZGVmYXVsdChhdXRvKCkpIEBtYXAoIl9pZCIpIEBkYi5PYmplY3RJZAogIHByb2R1Y3RJZCBTdHJpbmcgIEBkYi5PYmplY3RJZAogIHF1YW50aXR5ICBJbnQKICBvcmRlciAgICAgT3JkZXI/ICBAcmVsYXRpb24oZmllbGRzOiBbb3JkZXJJZF0sIHJlZmVyZW5jZXM6IFtpZF0pCiAgb3JkZXJJZCAgIFN0cmluZz8gQGRiLk9iamVjdElkCn0KCi8vIG1vZGVsIFVzZXIgewovLyAgIGlkICAgICAgICBTdHJpbmcgICAgQGlkIEBkZWZhdWx0KGF1dG8oKSkgQG1hcCgiX2lkIikgQGRiLk9iamVjdElkCi8vICAgbmFtZSAgICAgIFN0cmluZwovLyAgIGVtYWlsICAgICBTdHJpbmcgICAgQHVuaXF1ZQovLyAgIHBhc3N3b3JkICBTdHJpbmcKLy8gICBjcmVhdGVkQXQgRGF0ZVRpbWUgIEBkZWZhdWx0KG5vdygpKQovLyAgIHVwZGF0ZWRBdCBEYXRlVGltZSAgQHVwZGF0ZWRBdAovLyAgIFByb2R1Y3QgICBQcm9kdWN0W10KLy8gfQoKLy8gbm90IHVzZWZ1bGwKLy8gbW9kZWwgUHJvZHVjdCB7Ci8vICAgaWQgICAgICAgICBTdHJpbmcgICAgQGlkIEBkZWZhdWx0KGF1dG8oKSkgQG1hcCgiX2lkIikgQGRiLk9iamVjdElkCi8vICAgbmFtZSAgICAgICBTdHJpbmcKLy8gICBjb2xvciAgICAgIFN0cmluZwovLyAgIGRlc2NycHRpb24gU3RyaW5nCi8vICAgY2F0ZWdvcnkgICBTdHJpbmcKLy8gICBwcmljZSAgICAgIEZsb2F0Ci8vICAgc2l6ZSAgICAgICBJbnQKLy8gICBzdG9jayAgICAgIEludAovLyAgIGF1dGhvciAgICAgVXNlciAgICAgIEByZWxhdGlvbihmaWVsZHM6IFthdXRob3JJZF0sIHJlZmVyZW5jZXM6IFtpZF0pCi8vICAgYXV0aG9ySWQgICBTdHJpbmcgICAgQGRiLk9iamVjdElkCi8vICAgY29tbWVudHMgICBSZXZpZXdzW10KLy8gICBJbWFnZSAgICAgIEltYWdlW10KLy8gfQoKLy8gbW9kZWwgSW1hZ2UgewovLyAgIGlkICAgICAgICBTdHJpbmcgIEBpZCBAZGVmYXVsdChhdXRvKCkpIEBtYXAoIl9pZCIpIEBkYi5PYmplY3RJZAovLyAgIHVybCAgICAgICBTdHJpbmcKLy8gICBpbWFnZUlkICAgU3RyaW5nCi8vICAgcHJvZHVjdCAgIFByb2R1Y3QgQHJlbGF0aW9uKGZpZWxkczogW3Byb2R1Y3RJZF0sIHJlZmVyZW5jZXM6IFtpZF0pCi8vICAgcHJvZHVjdElkIFN0cmluZwovLyB9CgovLyBtb2RlbCBSZXZpZXdzIHsKLy8gICBpZCAgICAgICAgU3RyaW5nICBAaWQgQGRlZmF1bHQoYXV0bygpKSBAbWFwKCJfaWQiKSBAZGIuT2JqZWN0SWQKLy8gICBjb21tZW50ICAgU3RyaW5nCi8vICAgcG9zdCAgICAgIFByb2R1Y3QgQHJlbGF0aW9uKGZpZWxkczogW1Byb2R1Y3RJZF0sIHJlZmVyZW5jZXM6IFtpZF0pCi8vICAgUHJvZHVjdElkIFN0cmluZyAgQGRiLk9iamVjdElkCi8vIH0KLy8gYWN1dGFsCi8vIG1vZGVsIFByb2R1Y3QgewovLyAgIGlkICAgICAgICAgIFN0cmluZyAgIEBpZCBAZGVmYXVsdChhdXRvKCkpIEBtYXAoIl9pZCIpIEBkYi5PYmplY3RJZAovLyAgIG5hbWUgICAgICAgIFN0cmluZwovLyAgIGNhdGVnb3J5ICAgIFN0cmluZwovLyAgIGRlc2NyaXB0aW9uIFN0cmluZwovLyAgIHByaWNlICAgICAgIEZsb2F0Ci8vICAgY29sb3IgICAgICAgU3RyaW5nCi8vICAgc2l6ZSAgICAgICAgU3RyaW5nCi8vICAgaW1hZ2VzICAgICAgU3RyaW5nIC8vIEFycmF5IG9mIGltYWdlIFVSTHMKLy8gICByYXRpbmdzICAgICBSYXRpbmdbXQovLyAgIHN0b2NrICAgICAgIEludAovLyAgIGNyZWF0ZWRBdCAgIERhdGVUaW1lIEBkZWZhdWx0KG5vdygpKQovLyAgIHVwZGF0ZWRBdCAgIERhdGVUaW1lIEB1cGRhdGVkQXQKLy8gICBVc2VyICAgICAgICBVc2VyPyAgICBAcmVsYXRpb24oZmllbGRzOiBbdXNlcklkXSwgcmVmZXJlbmNlczogW2lkXSkKLy8gICB1c2VySWQgICAgICBTdHJpbmc/ICBAZGIuT2JqZWN0SWQKLy8gfQoKLy8gbW9kZWwgUmF0aW5nIHsKLy8gICBpZCAgICAgICAgU3RyaW5nICBAaWQgQGRlZmF1bHQoYXV0bygpKSBAbWFwKCJfaWQiKSBAZGIuT2JqZWN0SWQKLy8gICB1c2VySWQgICAgU3RyaW5nICBAZGIuT2JqZWN0SWQKLy8gICByYXRpbmcgICAgSW50Ci8vICAgcmV2aWV3ICAgIFN0cmluZwovLyAgIHByb2R1Y3QgICBQcm9kdWN0IEByZWxhdGlvbihmaWVsZHM6IFtwcm9kdWN0SWRdLCByZWZlcmVuY2VzOiBbaWRdKQovLyAgIHByb2R1Y3RJZCBTdHJpbmcKLy8gfQoKLy8gbW9kZWwgQ2FydCB7Ci8vICAgaWQgICAgICAgIFN0cmluZyAgICAgQGlkIEBkZWZhdWx0KGF1dG8oKSkgQG1hcCgiX2lkIikgQGRiLk9iamVjdElkCi8vICAgdXNlcklkICAgIFN0cmluZyAgICAgQGRiLk9iamVjdElkCi8vICAgaXRlbXMgICAgIENhcnRJdGVtW10KLy8gICBjcmVhdGVkQXQgRGF0ZVRpbWUgICBAZGVmYXVsdChub3coKSkKLy8gICB1cGRhdGVkQXQgRGF0ZVRpbWUgICBAdXBkYXRlZEF0Ci8vIH0KCi8vIG1vZGVsIENhcnRJdGVtIHsKLy8gICBpZCAgICAgICAgU3RyaW5nIEBpZCBAZGVmYXVsdChhdXRvKCkpIEBtYXAoIl9pZCIpIEBkYi5PYmplY3RJZAovLyAgIHByb2R1Y3RJZCBTdHJpbmcgQGRiLk9iamVjdElkCi8vICAgcXVhbnRpdHkgIEludAovLyAgIGNhcnQgICAgICBDYXJ0ICAgQHJlbGF0aW9uKGZpZWxkczogW2NhcnRJZF0sIHJlZmVyZW5jZXM6IFtpZF0pCi8vICAgY2FydElkICAgIFN0cmluZwovLyB9CgovLyBtb2RlbCBPcmRlciB7Ci8vICAgaWQgICAgICAgICAgICAgIFN0cmluZyAgICAgIEBpZCBAZGVmYXVsdChhdXRvKCkpIEBtYXAoIl9pZCIpIEBkYi5PYmplY3RJZAovLyAgIHVzZXJJZCAgICAgICAgICBTdHJpbmcgICAgICBAZGIuT2JqZWN0SWQKLy8gICBpdGVtcyAgICAgICAgICAgT3JkZXJJdGVtW10KLy8gICB0b3RhbFByaWNlICAgICAgRmxvYXQKLy8gICBzdGF0dXMgICAgICAgICAgU3RyaW5nCi8vICAgc2hpcHBpbmdBZGRyZXNzIFN0cmluZwovLyAgIGNyZWF0ZWRBdCAgICAgICBEYXRlVGltZSAgICBAZGVmYXVsdChub3coKSkKLy8gICB1cGRhdGVkQXQgICAgICAgRGF0ZVRpbWUgICAgQHVwZGF0ZWRBdAovLyB9CgovLyBtb2RlbCBPcmRlckl0ZW0gewovLyAgIGlkICAgICAgICBTdHJpbmcgQGlkIEBkZWZhdWx0KGF1dG8oKSkgQG1hcCgiX2lkIikgQGRiLk9iamVjdElkCi8vICAgcHJvZHVjdElkIFN0cmluZyBAZGIuT2JqZWN0SWQKLy8gICBxdWFudGl0eSAgSW50Ci8vICAgb3JkZXIgICAgIE9yZGVyICBAcmVsYXRpb24oZmllbGRzOiBbb3JkZXJJZF0sIHJlZmVyZW5jZXM6IFtpZF0pCi8vICAgb3JkZXJJZCAgIFN0cmluZwovLyB9CgovLyBtb2RlbCBOZXdVc2VyIHsKLy8gICBpZCBTdHJpbmcgQGlkIEBkZWZhdWx0KGF1dG8oKSkgQG1hcCgiX2lkIikgQGRiLk9iamVjdElkCi8vIH0K",
  "inlineSchemaHash": "f81c62d81a5621a5ef8a2257162b9c5bc02ab8604217a3c3f92b9e486e1d121b",
  "noEngine": false
}
config.dirname = '/'

config.runtimeDataModel = JSON.parse("{\"models\":{\"User\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"dbName\":\"_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"auto\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"password\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"role\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"visitor\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"products\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Product\",\"relationName\":\"ProductToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Cart\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Cart\",\"relationName\":\"CartToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Order\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Order\",\"relationName\":\"OrderToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Product\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"dbName\":\"_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"auto\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"category\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"description\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"price\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"color\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"size\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"image\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"stock\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"User\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"ProductToUser\",\"relationFromFields\":[\"userId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ratings\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Ratings\",\"relationName\":\"ProductToRatings\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Ratings\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"dbName\":\"_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"auto\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"rating\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"review\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"product\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Product\",\"relationName\":\"ProductToRatings\",\"relationFromFields\":[\"productId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"productId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Cart\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"dbName\":\"_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"auto\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"User\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"CartToUser\",\"relationFromFields\":[\"userId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"items\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"CartItems\",\"relationName\":\"CartToCartItems\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"CartItems\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"dbName\":\"_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"auto\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Cart\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Cart\",\"relationName\":\"CartToCartItems\",\"relationFromFields\":[\"cartId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cartId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"productId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"price\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"quantity\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Order\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"dbName\":\"_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"auto\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"User\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"OrderToUser\",\"relationFromFields\":[\"userId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"items\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"OrderItem\",\"relationName\":\"OrderToOrderItem\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"totalPrice\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"shippingAddress\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"OrderItem\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"dbName\":\"_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"auto\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"productId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"quantity\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"order\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Order\",\"relationName\":\"OrderToOrderItem\",\"relationFromFields\":[\"orderId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"orderId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)


config.injectableEdgeEnv = () => ({
  parsed: {
    DATABASE_URL: typeof globalThis !== 'undefined' && globalThis['DATABASE_URL'] || typeof process !== 'undefined' && process.env && process.env.DATABASE_URL || undefined
  }
})

if (typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined) {
  Debug.enable(typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined)
}

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

