import delay from './delay';

const members = [{ FullName: 'Sanish Joseph' },
  { FullName: 'Shabini Rajadas' }, { FullName: 'Steve Antony Sanish' }];

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
