// import { User } from '../models/user.model.server';


const USERS = [
  {_id: '123', username: 'alice',    password: 'alice',
    firstName: 'Alice',  lastName: 'Wonder', email: 'alice.wonderland@unicorn.com'  },
  {_id: '234', username: 'bob',      password: 'bob',
    firstName: 'Bob',    lastName: 'Marley', email: 'bob.marley@regge.com'  },
  {_id: '345', username: 'charly',   password: 'charly',
    firstName: 'Charly', lastName: 'Garcia', email: 'charly.garcia@icecream.com'  },
  {_id: '456', username: 'jannunzi', password: 'jannunzi',
    firstName: 'Jose',   lastName: 'Annunzi', email: 'j.annunzi@northeastern.edu' }
];

// const USERS: User[] = [
//   new User('123', 'alice', 'alice', 'Alice', 'Wonder', 'alice.wonderland@unicorn.com'),
//   new User('234', 'bob', 'bob', 'Bob', 'Marley', 'bob.marley@regge.com'),
//   new User('345', 'charly', 'charly', 'Charly', 'Garcia', 'bob.marley@regge.com'),
//   new User('456', 'jannunzi', 'jannunzi', 'Jose', 'Annunzi', 'j.annunzi@northeastern.edu')
// ];

module.exports = USERS;
