/**
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
    talks: [Talk]!
  }
`;

export default Speaker;
