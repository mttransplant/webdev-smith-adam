module.exports = function(app) {
  require('./assignment/services/user.service.server')(app);
  require('./assignment/services/website.service.server')(app);
  require('./assignment/services/page.service.server')(app);
  require('./assignment/services/widget.service.server')(app);
};
