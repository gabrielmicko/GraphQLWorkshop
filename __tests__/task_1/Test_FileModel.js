import { getTalks, getSpeakers, getTalksBySpeakerId } from '../../src/model/file';

describe('tests task 1', () => {
  test('Test the functionality of getTalks.', () => {
    expect(getTalks()).toMatchSnapshot();
  });

  test('Test the functionality of getSpeakers.', () => {
    expect(getSpeakers()).toMatchSnapshot();
  });

  test('Test the functionality of getSpeakers with an id argument.', () => {
    expect(
      getSpeakers({
        id: '13',
      }),
    ).toMatchSnapshot();
  });

  test('Test the functionality of getSpeakers with a name argument.', () => {
    expect(
      getSpeakers({
        name: 'Gabriel Mičko',
      }),
    ).toMatchSnapshot();
  });

  test('Test the functionality of getTalksBySpeakerId with a speakerId argument.', () => {
    expect(getTalksBySpeakerId('13')).toMatchSnapshot();
  });
});
