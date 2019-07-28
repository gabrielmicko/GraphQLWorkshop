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
    speakers: [Speaker!]
    talks: [Talk!]
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
  }
`;

export default [Schema, Query, Speaker, Talk];
