import { getTalks, getSpeakers } from '../model/file';

/**
 * TASK 2
 * Query talks, speakers calling resolvers
 */
export default {
  Query: {
    talks: (_, args) => getTalks(),
    speakers: (_, args) => getSpeakers(),
  },
};
