import { getAll, getByFilters, insertData } from '../store/helper';

/**
 * TASK 6
 * Resolves with all of the talks in the database.
 * @returns {Array} Returns all the talks.
 */
const getTalks = () => {};

/**
 * TASK 6
 * Returns all of the speakers by a filter object.
 * If there are no arguments the function returns all
 * of the speakers.
 * Only one argument can be passed at a time. {name: "Gabriel Micko"}
 * @param  {String} args.id id of a speaker OR
 * @param  {String} args.name name of a speaker
 * @return {Array} Returns all the speakers that match the filter.
 */
const getSpeakers = () => {};

/**
 * TASK 6
 * Returns all of the speakers that have the same speakerId.
 * @param  {String} speakerId
 * @return {Array} Returns Array containing all of the talks where the
 * speakerId matches the given argument.
 */
const getTalksBySpeakerId = () => {};

/**
 * TASK 6
 * Save the speaker and returns the inserted data.
 * @param  {Object} speakerData Speaker data (ie. {name: "Gabriel", bio: "FE dev"})
 * @return {Object} speaker that was saved
 */
const saveSpeaker = () => {};

export { getTalks, getSpeakers, getTalksBySpeakerId, saveSpeaker };
