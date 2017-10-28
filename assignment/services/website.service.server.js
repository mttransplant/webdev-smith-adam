module.exports = function(app) {
  // app.post('/api/user/:userId/website', createWebsite);
  app.get('/api/user/:userId/website', findAllWebsitesForUser);
  // app.get('/api/website/:websiteId', findWebsiteById);
  // app.put('/api/website/:websiteId', updateWebsite);
  // app.delete('/api/website/:websiteId', deleteWebsite);

  var websites = require('./website.mock.ts');

  function findAllWebsitesForUser(req, res) {
    let userId = req.params['userId'];
    var foundSites = [];
    for (let i = 0; i < websites.length; i++) {
      if (websites[i].developerId === userId) {
        foundSites.push(websites[i]);
      }
    }
    return res.json(foundSites);

    // let foundSites = [];
    // for (let x = 0; x < this.websites.length; x++) {
    //   if (this.websites[x].developerId === userId) {
    //     foundSites.push(this.websites[x]);
    //   }
    // }
    // return foundSites;
  }
}
