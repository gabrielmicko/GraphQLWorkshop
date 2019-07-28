/**
 * TASK 2
 * Speaker definition
 *
 * Speaker type defining the parameters
 */

const Speaker = /* GraphQL */ `
  type Speaker {
    id: ID
    name: String!
    twitter: String
    github: String
    linkedin: String
    bio: String!
  }
`;

export default Speaker;
