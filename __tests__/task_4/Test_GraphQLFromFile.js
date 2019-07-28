import { graphql } from 'graphql';
import schema from '../../src/schema';
import { setTestDefaults } from '../../src/store/helper';
import speakers from '../../src/db/speakers.json';
import talks from '../../src/db/talks.json';

describe('tests task 4', () => {
  beforeEach(() => {
    setTestDefaults(speakers, talks);
  });

  test('GraphQL server should return one speaker by ID.', () => {
    expect.assertions(1);
    const query = /* GraphQL */ `
      {
        speakers(id: "13") {
          id
          name
          twitter
          github
          linkedin
          bio
          talks {
            id
            date
            duration
            talkType
            talkTitle
            speakerId
          }
        }
      }
    `;
    return graphql(schema, query).then(result => {
      expect(result).toMatchSnapshot();
    });
  });

  test('GraphQL server should return one speaker by name.', () => {
    expect.assertions(1);
    const query = /* GraphQL */ `
      {
        speakers(name: "Gabriel Mičko") {
          id
          name
          twitter
          github
          linkedin
          bio
          talks {
            id
            date
            duration
            talkType
            talkTitle
            speakerId
          }
        }
      }
    `;
    return graphql(schema, query).then(result => {
      expect(result).toMatchSnapshot();
    });
  });
});
