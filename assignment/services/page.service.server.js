module.exports = function(app) {
  app.post('/api/website/:websiteId/page', createPage);
  app.get('/api/website/:websiteId/page', findAllPagesForWebsite);
  app.get('/api/page/:pageId', findPageById);
  app.put('/api/page/:pageId', updatePage);
  app.delete('/api/page/:pageId', deletePage);

  var pages = require('./page.mock.ts');

  function findNextPageId() {
    let foundNewId = false;
    let newId = 123;
    const min = Math.ceil(100);
    const max = Math.floor(999);
    while (!foundNewId) {
      newId = Math.floor(Math.random() * (max - min)) + min;
      if (!pages.find(function(page) {
          return page._id === newId;
        })) {
        foundNewId = true;
      }
    }
    return newId.toString();
  }

  function createPage(req, res) {
    let websiteId = req.params['websiteId'];
    var newPage = req.body;
    newPage.websiteId = websiteId;
    newPage._id = findNextPageId();
    pages.push(newPage);
    return res.json(newPage);
  }

  function findAllPagesForWebsite(req, res) {
    let websiteId = req.params['websiteId'];
    var foundPages = [];
    for (let i = 0; i < pages.length; i++) {
      if (pages[i].websiteId === websiteId) {
        foundPages.push(pages[i]);
      }
    }
    return res.json(foundPages);
  }

  function findPageById(req,res) {
    let pageId = req.params['pageId'];
    let page = pages.find(function(thisPage) {
      return thisPage._id === pageId;
    });
    return res.json(page);
  }

  function updatePage(req, res) {
    let pageId = req.params['pageId'];
    let pageUpdates = req.body;
    for (let i = 0; i < pages.length; i++) {
      if (pages[i]._id === pageId) {
        pages[i] = pageUpdates;
      }
    }
    let updatedPage = pages.find(function(thisPage) {
      return thisPage._id === pageId;
    });
    return res.json(updatedPage);
  }

  function deletePage(req, res) {
    let pageId = req.params['pageId'];
    for (let i = 0; i < pages.length; i++) {
      if (pages[i]._id === pageId) {
        pages.splice(i, 1);
      }
    }
    return res.json(pageId);
  }
}
