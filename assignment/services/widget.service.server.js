module.exports = function(app) {
  app.post('/api/page/:pageId/widget', createWidget);
  app.get('/api/page/:pageId/widget', findAllWidgetsForPage);
  app.get('/api/widget/:widgetId', findWidgetById);
  app.put('/api/widget/:widgetId', updateWidget);
  app.delete('/api/widget/:widgetId', deleteWidget);

  var widgets = require('./widget.mock.ts');

  function findNextWidgetId() {
    let foundNewId = false;
    let newId = 123;
    const min = Math.ceil(100);
    const max = Math.floor(999);
    while (!foundNewId) {
      newId = Math.floor(Math.random() * (max - min)) + min;
      if (!widgets.find(function(widget) {
          return widget._id === newId;
        })) {
        foundNewId = true;
      }
    }
    return newId.toString();
  }

  function createWidget(req, res) {
    let pageId = req.params['pageId'];
    var newWidget = req.body;
    newWidget.pageId = pageId;
    newWidget._id = findNextWidgetId();
    widgets.push(newWidget);
    return res.json(newWidget);
  }

  function findAllWidgetsForPage(req, res) {
    let pageId = req.params['pageId'];
    var foundWidgets = [];
    for (let i = 0; i < widgets.length; i++) {
      if (widgets[i].pageId === pageId) {
        foundWidgets.push(widgets[i]);
      }
    }
    return res.json(foundWidgets);
  }

  function findWidgetById(req, res) {
    let widgetId = req.params['widgetId'];
    let widget = widgets.find(function(_widget) {
      return _widget._id === widgetId;
    });
    return res.json(widget);
  }

  function updateWidget(req, res) {
    let widgetId = req.params['widgetId'];
    let widgetUpdates = req.body;
    for (let i = 0; i < widgets.length; i++) {
      if (widgets[i]._id === widgetId) {
        widgets[i] = widgetUpdates;
      }
    }
    let updatedWidget = widgets.find(function(widget) {
      return widget._id === widgetId;
    });
    return res.json(updatedWidget);
  }

  function deleteWidget(req, res) {
    let widgetId = req.params['widgetId'];
    for (let i = 0; i < widgets.length; i++) {
      if (widgets[i]._id === widgetId) {
        widgets.splice(i, 1);
      }
    }
    return res.json(widgetId);
  }
}
