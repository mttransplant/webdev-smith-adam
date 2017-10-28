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


  var users = require('./user.mock.ts');

  function findNextUserId() {
    let foundNewId = false;
    let newId = 123;
    const min = Math.ceil(100);
    const max = Math.floor(999);
    while (!foundNewId) {
      newId = Math.floor(Math.random() * (max - min)) + min;
      if (!users.find(function(user) {
        return user._id === newId;
        })) {
        foundNewId = true;
      };
    }
    return newId.toString();
  }

  function createUser(req, res) {
    // console.log('we are in the createUser on the server');
    var newUser = req.body;
    newUser._id = findNextUserId();
    users.push(newUser);
    return res.json(newUser);
    // res.send({message: "You've reached the createUser function"});
  }
  function findUsers(req, res) {
    // console.log('we are in the findUsers on the server');
    var username = req.query['username'];
    var password = req.query['password'];
    if (username && password) {
      var user = users.find(function(user) {
        return user.username === username && user.password === password;
      });
      if (user) {
        return res.json(user);
      } else {
        return res.json(null);
      }
    }
    // var username = req.query['username'];
    if (username) {
      var user = users.find(function(user) {
        return user.username === username;
      });
      if (user) {
        return res.json(user);
      } else {
        return res.json(null);
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
    var userId = req.params['userId'];
    for (let x = 0; x < this.users.length; x++) {
        if (this.users[x]._id === userId) {
          this.users.splice(x, 1);
        }
      }

    // res.send({message: "You've reached the deleteUser function"});
  }
}
