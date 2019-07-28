import speakers from '../../src/db/speakers.json';
import talks from '../../src/db/talks.json';
import {
  setTestDefaults,
  getDataStore,
  insertData,
  wipeTable,
  getAll,
  getByFilters,
  removeFile,
} from '../../src/store/helper';

describe('tests task 5', () => {
  beforeEach(() => {
    setTestDefaults(speakers, talks);
  });

  it('getByFilters should return filtered data set', async () => {
    const selectedSpeaker = getByFilters('speakers', {
      id: '13',
    });
    expect(selectedSpeaker).toMatchSnapshot();
  });

  it('getAll should return all data set', async () => {
    const everySpeaker = getAll('speakers');
    expect(everySpeaker).toMatchSnapshot();
  });

  it('wipeTable should remove everything', async () => {
    wipeTable('speakers');
    const everySpeaker = getAll('speakers');

    expect(everySpeaker).toStrictEqual([]);
  });

  it('insertData should insert a record', async () => {
    const exampleData = {
      id: 'X',
      test: 'test',
    };
    insertData('speakers', exampleData);
    const everySpeaker = await getByFilters('speakers', exampleData);
    expect(everySpeaker).toStrictEqual([exampleData]);
  });
});
