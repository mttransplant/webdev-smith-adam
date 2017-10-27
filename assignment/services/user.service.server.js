// import { User } from '../models/user.model.server';
// import { USERS } from './user.mock';

module.exports = function(app) {
  app.post('/api/user/', createUser);
  // app.get('/api/user?username=username', findUserByUsername);
  // app.get('/api/user?username=username&password=password', findUserByCredentials);
  app.get('/api/user/:userId', findUserById);
  app.get('/api/user', findUsers);
  app.put('/api/user/:userId', updateUser);
  app.delete('/api/user/:userId', deleteUser);

  // var users = require('./user.mock');

  var users = [
    {_id: '123', username: 'alice',    password: 'alice',
      firstName: 'Alice',  lastName: 'Wonder', email: 'alice.wonderland@unicorn.com'  },
    {_id: '234', username: 'bob',      password: 'bob',
      firstName: 'Bob',    lastName: 'Marley', email: 'bob.marley@regge.com'  },
    {_id: '345', username: 'charly',   password: 'charly',
      firstName: 'Charly', lastName: 'Garcia', email: 'charly.garcia@icecream.com'  },
    {_id: '456', username: 'jannunzi', password: 'jannunzi',
      firstName: 'Jose',   lastName: 'Annunzi', email: 'j.annunzi@northeastern.edu' }
  ];

  function createUser(req, res) {
    res.send({message: "You've reached the createUser function"});
  }
  function findUsers(req, res) {
    // console.log('we are in the findUsers');
    var username = req.query['username'];
    var password = req.query['password'];
    if (username && password) {
      var user = users.find(function(user) {
        return user.username === username && user.password === password;
      });
      if (user) {
        res.json(user)
      } else {
        res.json(null)
      }
    }
    var username = req.query['username'];
    if (username) {
      var user = users.find(function(user) {
        return user.username === username;
      });
      if (user) {
        res.json(user);
      } else {
        res.json(null);
      }
    }
  }
  // function findUserByUsername(req, res) {
  //   console.log('we are in the findUserByUsername');
  //   var username = req.query["username"];
  //   var user = users.find(function(user) {
  //     return user.username === username;
  //   });
  //   res.json(user);
  //   // res.send({message: "you've reached the findUserByUsername function"});
  // }

  // function findUserByCredentials(req, res) {
  //   console.log('we are in the findUserByCredentials');
  //   var username = req.query["username"];
  //   var password = req.query["password"];
  //   if(username && password) {
  //     var user = users.find(function(user) {
  //       return user.username === username && user.password === password;
  //     });
  //     if(user) {
  //       res.json(user)
  //     } else {
  //       res.json({});
  //     }
  //   }
  //   // res.send({message: "You've reached the findUserByCredentials function"});
  // }

  function findUserById(req, res) {
    // console.log('we are in the findUserById');
    var userId = req.params['userId'];
    var user = users.find(function(user) {
      return user._id === userId;
    });
    res.json(user);
    // res.send({message: "You've reached the findUserById function"});
  }

  function updateUser(req, res) {
    // console.log("user.service.server reached");
    var userId = req.params['userId'];
    // console.log('params are: ', req.params);
    // console.log('userId is: ', userId);
    var userToUpdate = req.body;
    // console.log('updatedUser is: ', updatedUser);
    for(var i=0; i < users.length; i++) {
      if(users[i]._id === userId) {
        users[i] = userToUpdate;
        // console.log(users[i]);
      }
    }
    var updatedUser = users.find(function(user) {
      return user._id === userId;
    });
    // console.log(users);
    // user = updatedUser;
    // console.log("trip complete with: ", users);
    res.send(updatedUser);
    // res.send({message: "You've reached the updateUser function"});
  }

  function deleteUser(req, res) {
    res.send({message: "You've reached the deleteUser function"});
  }
}
