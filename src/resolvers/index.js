import { getTalks, getSpeakers, getTalksBySpeakerId } from '../model/file';

/**
 * TASK 2
 * Query talks, speakers calling resolvers
 *
 * TASK 3
 * Defining Speaker talks query
 *
 */
export default {
  Query: {
    talks: (_, args) => getTalks(),
    speakers: (_, args) => getSpeakers(),
  },
};
