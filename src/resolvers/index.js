import { getTalks, getSpeakers, getTalksBySpeakerId } from '../model/file';

/**
 * TASK 2
 * Query talks, speakers calling resolvers
 *
 * TASK 3
 * Defining Speaker talks query
 *
 * TASK 4
 * Argument passing
 *
 */
export default {
  Speaker: {
    talks: ({ id }) => {
      return getTalksBySpeakerId(id);
    },
  },
  Query: {
    talks: (_, args) => getTalks(),
    speakers: (_, args) => getSpeakers(args),
  },
};
