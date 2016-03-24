var React = require('react');
var Link = require('react-router').Link;



var Page = React.createClass({

  getDefaultProps() {
    return {
      title: "Our Application"
    };
  },

  contextTypes: {
    router: React.PropTypes.object
  },

  render: function() {
    var routedContent = React.cloneElement(this.props.children, {
    });

    if (routedContent.props && typeof document !== "undefined") {
      var title = routedContent.props.title;
      if (!title) { title = this.props.title; } else { title = this.props.title + " - " + title; }
      document.title = title;
    }

    return (
      <div>
        <header>
          <h1>DSO</h1>
        </header>
        <div className="content">
          <section className="main">
          { routedContent }
          </section>
        </div>
      </div>
    );
  }

});

module.exports = Page;