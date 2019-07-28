import { getTalks, getSpeakers, getTalksBySpeakerId, saveSpeaker } from '../model/db';
import { makeID } from '../utils/utils';

/**
 * TASK X
 * Resolvers containing Queries and it's options, Mutation
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
