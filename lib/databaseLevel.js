const { Level } = require('level')
const userData = require('../__data__/userData')

export const connectToDatabase = ()=> {
  const db = new Level('database', { valueEncoding: 'json' });

  // user Database
  const users = db.sublevel('users', { valueEncoding: 'json' })

  const userDataBatch = [];

  userData.map((elem, index) => {
    userDataBatch.push({
      type: 'put',
      sublevel: users,
      key: elem.username,
      value: {
        id: index,
        username: elem.username,
        password: elem.password,
        status: elem.status,
      },
    });
  });

  db.batch(userDataBatch);

  return users;
};
