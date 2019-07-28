import { graphql } from 'graphql';
import schema from '../../src/schema';
import { setTestDefaults } from '../../src/store/helper';
import speakers from '../../src/db/speakers.json';
import talks from '../../src/db/talks.json';

describe('tests task 3', () => {
  beforeEach(() => {
    setTestDefaults(speakers, talks);
  });

  test('GraphQL server should return all the speakers with talks.', () => {
    expect.assertions(1);
    const query = /* GraphQL */ `
      {
        speakers {
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
