var React = require('react');

var Timeline = React.createClass({
  getDefaultProps: function(){
    return {
      data: 'foo'
    };
  },
  getInitialState: function(){
    return{
      currentStoryIndex: 0
    };
  },
  componentWillMount: function(){
   //Make an AJAX call
   this.AjaxResponse = 'foo'

  },
  render: function(){
    return(
      <div>Hello, world! {this.AjaxResponse} {this.props.data} {this.state.currentStoryIndex}</div>
    );
  }
});

module.exports = Timeline;