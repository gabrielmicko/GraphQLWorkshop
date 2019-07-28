import Speaker from './speaker';
import Talk from './talk';

/**
 * TASK 2
 * Speakers and talks Query
 *
 * Query type which holds the queries which could be called.
 */
const Query = /* GraphQL */ `
  type Query {
    speakers(id: String, name: String): [Speaker!]
    talks: [Talk!]
  }
`;

/**
 * Mutations
 */
const Mutation = /* GraphQL */ `
  type Mutation {
    addSpeaker(name: String!, twitter: String, github: String, linkedin: String, bio: String!): Speaker
  }
`;

/**
 * TASK 2
 * Schema where query is applied
 *
 * A schema containing Query and Mutation types
 */
const Schema = /* GraphQL */ `
  schema {
    query: Query
    mutation: Mutation
  }
`;

export default [Schema, Query, Mutation, Speaker, Talk];
