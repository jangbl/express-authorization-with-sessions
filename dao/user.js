const bcrypt = require('bcrypt');
const role = require('../authorization/role');

const users = {
  'compliance@productioncoder.com': {
    pwHash: bcrypt.hashSync('password', 10),
    roles: [role.COMPLIANCE_OFFICER],
    id: '41c514f4-7288-4199-80c0-e0be7e4353d7',
  },
  'service@productioncoder.com': {
    pwHash: bcrypt.hashSync('password', 10),
    roles: [role.CUSTOMER_SERVICE],
    id: 'fa54f8ac-6ed7-49d5-b242-64b793da816a',
  },
};

// this call would be async and would return a promise
// if we were to use a real database
async function findUserByEmail(email) {
  const user = users[email];
  return user ? user : Promise.reject('user not found');
}

module.exports = { findUserByEmail };
