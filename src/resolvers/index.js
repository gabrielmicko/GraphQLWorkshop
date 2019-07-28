import { getTalks, getSpeakers, getTalksBySpeakerId, saveSpeaker } from '../model/db';
import { makeID } from '../utils/utils';

/**
 * TASK 2
 * Query talks, speakers calling resolvers
 *
 * TASK 3
 * Defining Speaker talks query
 *
 */
export default {
  Speaker: {
    talks: ({ id }) => {
      return getTalksBySpeakerId(id);
    },
  },
  Mutation: {
    addSpeaker: (_, speaker) => {
      speaker.id = makeID(10);
      return saveSpeaker(speaker);
    },
  },
  Query: {
    talks: (_, args) => getTalks(),
    speakers: (_, args) => getSpeakers(args),
  },
};
