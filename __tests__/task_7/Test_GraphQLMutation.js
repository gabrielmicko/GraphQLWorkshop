import { graphql } from 'graphql';
import schema from '../../src/schema';
import { setTestDefaults } from '../../src/store/helper';
import speakers from '../../src/db/speakers.json';
import talks from '../../src/db/talks.json';
describe('tests task 7', () => {
  beforeEach(() => {
    setTestDefaults(speakers, talks);
  });

  test('GraphQL Mutation addSpeaker.', () => {
    expect.assertions(1);
    const query = /* GraphQL */ `
      mutation addSpeaker {
        addSpeaker(
          name: "John Doe"
          twitter: "github.com/john.doe"
          github: "github.com/john.doe"
          linkedin: "linkedin.com/john.doe"
          bio: "John Doe is a test user."
        ) {
          name
          bio
          github
          twitter
          linkedin
        }
      }
    `;

    return new Promise(resolve => {
      graphql(schema, query).then(result => {
        resolve(expect(result).toMatchSnapshot());
      });
    });
  });
});
