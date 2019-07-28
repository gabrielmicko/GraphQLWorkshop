import speakers from '../db/speakers.json';
import talks from '../db/talks.json';

/**
 * TASK 1
 * Returns all the talks
 * @returns {Array} Containing talks
 */
const getTalks = () => {};

/**
 * TASK 1
 * Returns all the speakers according to the arguments
 * If there are no arguments or the argument is an empty object
 * the function returns all of the speakers.
 * Only one argument is going to be passed at a time.
 * @param  {String} args.id id of a speaker OR
 * @param  {String} args.name name of a speaker
 * @return {Array} Containing speakers
 */
const getSpeakers = () => {};

/**
 * TASK 1
 * Get all of the talks by a speaker id.
 * @param  {String} speakerId [description]
 * @return {Array} Returns all of the talks where the
 * speakerId matches the given argument.
 */
const getTalksBySpeakerId = () => {};

export { getTalks, getSpeakers, getTalksBySpeakerId };
