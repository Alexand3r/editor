import React from 'react'
import styled, { css } from 'styled-components'

const Tabs = React.createClass({
  displayName: 'Tabs',
  propTypes: {
    selected: React.PropTypes.number,
    children: React.PropTypes.oneOfType([
      React.PropTypes.array,
      React.PropTypes.element,
    ]).isRequired
  },
  getDefaultProps() {
    return {
      selected: 0
    };
  },
  getInitialState() {
    return {
      selected: this.props.selected
    };
  },
  handleClick(index, event) {
    event.preventDefault();
    this.setState({
      selected: index
    });
  },
  _renderTitles() {
    function labels(child, index) {


      var lis = styled.li`
        display:inline-block;      
  `;

   var as = styled.a`
      padding: 8px 12px;
      display: block;
      color: #444;
      text-decoration: none;
      border-bottom: 2px solid #f5f5f5;
   
  `;
  
      let activeClass = (this.state.selected === index ? 'active' : '');
      return (
        <lis key={index}>
          <as href="#"
            className={activeClass}
            onClick={this.handleClick.bind(this, index)}>
            {child.props.label}
          </as>
        </lis>
      );
    }
    var TabsLabels = styled.ul`
    padding: 8px 12px;
    display: block;
    color: #444;
    text-decoration: none;
    border-bottom: 2px solid #f5f5f5;
    `;

    return (
      // <ul className="tabs__labels">
      <TabsLabels>
        {this.props.children.map(labels.bind(this))}
      </TabsLabels>
    );
  },
  _renderContent() {
    return (
      <div className="tabs__content">
        {this.props.children[this.state.selected]}
      </div>
    );
  },
  render() {
    var TabContainer = styled.div`
  margin: 25px;
  background: #efefef;
  border: 1px solid #e5e5e5;
  border-radius: 3px;
  `;
    return (
      <TabContainer>
        {this._renderTitles()}
        {this._renderContent()}
      </TabContainer>
    );
  }
});

const Pane = React.createClass({
  displayName: 'Pane',
  propTypes: {
    label: React.PropTypes.string.isRequired,
    active: React.PropTypes.bool.isRequired,
    children: React.PropTypes.element.isRequired
  },
  render() {
    var DivPane = styled.div`
     ${props => props.active && css`
     color: red;
  `}
      `;
    return (
      <DivPane>
        {this.props.children}
      </DivPane>
    );
  }
});

const Tab = React.createClass({
  render() {
    return (
      <div>
        <Tabs selected={0}>
          <Pane label="Tab 1" active={true}>
            <div>This is my tab 1 contents!</div>
          </Pane>
          <Pane label="Tab 2" active={false}>
            <div>This is my tab 2 contents!</div>
          </Pane>
          <Pane label="Tab 3" active={false}>
            <div>This is my tab 3 contents!</div>
          </Pane>
        </Tabs>
      </div>
    );
  }
});

export default Tab