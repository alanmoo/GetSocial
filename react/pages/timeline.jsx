var React = require('react');
var MiniStory = require('../components/MiniStory.jsx');

var Timeline = React.createClass({
  getDefaultProps: function() {
    return {
      data: 'foo'
    };
  },
  getInitialState: function() {
    return {
      currentStoryIndex: 0
    };
  },
  componentWillMount: function() {
    //Make an AJAX call
    this.AjaxResponse = 'foo';
  },
  render: function() {
    return (
      <div>
          <MiniStory />
      </div>
    );
  }
});

module.exports = Timeline;