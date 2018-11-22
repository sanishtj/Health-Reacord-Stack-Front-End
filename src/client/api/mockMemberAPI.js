import delay from './delay';

const members = [{ ID: 1, FullName: 'Sanish Joseph' },
  { ID: 2, FullName: 'Shabini Rajadas' }, { ID: 3, FullName: 'Steve Antony Sanish' },
  { ID: 4, FullName: 'Steve Antony Sanish' },
  { ID: 5, FullName: 'Steve Antony Sanish' }];

class memberAPI {
  static fetchMembers() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(Object.assign([], members));
      }, delay);
    });
  }

  static addMember(member) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(Object.assign({}, member));
      }, delay);
    });
  }
}

export default memberAPI;
