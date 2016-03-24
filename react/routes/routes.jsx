var React = require('react');

var ReactRouter = require('react-router');
var Route =  ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;

module.exports = function(Root) {
  return (
    <Route path='/' component={Root}>
      <IndexRoute component={require('../pages/timeline.jsx')} />

      <Route path='data' component={require('../pages/timeline.jsx')} />

    </Route>
  );
};
