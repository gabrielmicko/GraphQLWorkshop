import fs from 'fs';
import low from 'lowdb';
import FileSync from 'lowdb/adapters/FileSync';

const database = low(new FileSync(__dirname + '/../../temp/database.json'));

/**
 * Returns a proper table name based on environment.
 * @param  {String} tableName
 * @return {String} tableName
 */
const getTable = tableName => {
  if (process.env.NODE_ENV === 'test') {
    return 'test_' + tableName;
  }
  return tableName;
};

/**
 * Sets the default speakers and talks in the test database.
 * @param  {Array} speakers
 * @param  {Array} talks
 */
const setTestDefaults = (speakers, talks) => {
  database.set('test_speakers', speakers).write();
  database.set('test_talks', talks).write();
};

/**
 * Sets the default speakers and talks in the test and live database.
 * @param  {Array} speakers
 * @param  {Array} talks
 */
const setDefaults = (speakers, talks) => {
  database.set('speakers', speakers).write();
  database.set('talks', talks).write();
  setTestDefaults(speakers, talks);
};

/**
 * TASK 5
 * Checks if data is data is Array or Object.
 * If Array iterates through it and pushes it to the database..
 * If Object it pushes it to the database.
 * Returns with the inserted data, Array of Objects or Object.
 * @param  {String} tableName Table name, where you insert/update/remove/gets data.
 * @param  {Array|Object} data Array containing Objects or a single Object.
 * @return {Array|Object} Retunrs the inserted data.
 */
const insertData = (tableName, data) => {
  let table = getTable(tableName);
};

/**
 * TASK 5
 * Get all data from a table according to a filter object.
 * @param  {String} tableName Table name, where you insert/update/remove/get data.
 * @param  {Object} filters Object  containing the filter (ie. {speakerId: 10}, check: filter()).
 * @return {Array} Returns the filtered data set.
 */
const getByFilters = (tableName, filters = {}) => {
  let table = getTable(tableName);
};

/**
 * TASK 5
 * Get all the data from a table.
 * @param  {String} tableName Table name, where you insert/update/remove/get data.
 * @return {Array} Returns all the data in the table.
 */
const getAll = tableName => {
  let table = getTable(tableName);
};

/**
 * TASK 5
 * Removes everything from the table.
 * @param  {String} tableName Table name, where you insert/update/remove/get data.
 */
const wipeTable = tableName => {
  let table = getTable(tableName);
};

/**
 * TASK 5
 * Accepts list of tables (strings), calls wipeTable on each iteration.
 * @param  {Array} tables Array containing tables (strings), which you want to wipe (ie: ["speakers", "talks"]).
 */
const wipeTables = tables => {};

export { getTable, insertData, wipeTables, getAll, getByFilters, wipeTable, setDefaults, setTestDefaults };
