module.exports = function(app) {
  app.post('/api/user/:userId/website', createWebsite);
  app.get('/api/user/:userId/website', findAllWebsitesForUser);
  app.get('/api/website/:websiteId', findWebsiteById);
  app.put('/api/website/:websiteId', updateWebsite);
  app.delete('/api/website/:websiteId', deleteWebsite);

  var websites = require('./website.mock.ts');

  function findNextWebsiteId() {
    let foundNewId = false;
    let newId = 123;
    const min = Math.ceil(100);
    const max = Math.floor(999);
    while (!foundNewId) {
      newId = Math.floor(Math.random() * (max - min)) + min;
      if (!websites.find(function(website) {
        return website._id === newId;
        })) {
        foundNewId = true;
      }
    }
    return newId.toString();
  }

  function createWebsite(req, res) {
    let userId = req.params['userId'];
    var newWebsite = req.body;
    newWebsite.developerId = userId;
    newWebsite._id = findNextWebsiteId();
    websites.push(newWebsite);
    return res.json(newWebsite);
  }

  function findAllWebsitesForUser(req, res) {
    let userId = req.params['userId'];
    var foundSites = [];
    for (let i = 0; i < websites.length; i++) {
      if (websites[i].developerId === userId) {
        foundSites.push(websites[i]);
      }
    }
    return res.json(foundSites);
  }

  function findWebsiteById(req, res) {
    let websiteId = req.params['websiteId'];
    let website = websites.find(function(site) {
      return site._id === websiteId;
    });
    // console.log('about to return: ', website);
    return res.json(website);
  }

  function updateWebsite(req, res) {
    let websiteId = req.params['websiteId'];
    let websiteUpdates = req.body;
    for (let i = 0; i < websites.length; i++) {
      if (websites[i]._id === websiteId) {
        websites[i] = websiteUpdates;
      }
    }
    let updatedWebsite = websites.find(function(site) {
      return site._id === websiteId;
    });
    return res.json(updatedWebsite);
  }

  function deleteWebsite(req, res) {
    let websiteId = req.params['websiteId'];
    for (let i = 0; i < websites.length; i++) {
      if (websites[i]._id === websiteId) {
        websites.splice(i, 1);
      }
    }
    return res.json(websiteId);
  }
}
