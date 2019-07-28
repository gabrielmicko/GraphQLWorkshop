/**
 * Talk type defining the parameters
 */

const Talk = /* GraphQL */ `
  enum TalkType {
    keynote
    talk
    lightning
    workshop
  }
  type Talk {
    id: ID!
    date: String
    duration: Int
    talkType: TalkType
    talkTitle: String
    speakerId: ID!
  }
`;

export default Talk;
