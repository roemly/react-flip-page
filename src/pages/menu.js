import React, { Component } from 'react';
import ReactDOM from 'react-dom';
var Tab = React.createClass({
    render: function() {
      return <li 
        className={ this.props.isActive ? 'navigation--active': '' }
        onClick={ this.props.onActiveTab }
      >
        <p>{ this.props.content }</p>
      </li>
    }
  });
  
  var Tabs = React.createClass({
    getInitialState: function() {
      return { selectedTabId: 1 }
    },
    
    isActive: function (id) {
      return this.state.selectedTabId === id;
    },
    
    setActiveTab: function (selectedTabId) {
      this.setState({ selectedTabId });
    },
    
    render: function() {
      var total = this.props.data.points.total,
          tabs = total.map(function (el, i) {
            return <Tab 
              key={ i }
              content={ el.name } 
              isActive={ this.isActive(el.id) } 
              onActiveTab={ this.setActiveTab.bind(this, el.id) }
            />
          }, this);
                  
      return <ul className="navigation">
       { tabs }
      </ul>
    }
  });
  
  const data = {
    points: {
      total: [
        { id: 1, name: 'tab-1', text: 'text' },
        { id: 2, name: 'tab-2', text: 'text-2' },
        { id: 3, name: 'tab-3', text: 'text-2' }
      ]
    }
  }
  
  ReactDOM.render(
    <Tabs data={ data } />,
    document.getElementById('container')
  )


  export default Tab;