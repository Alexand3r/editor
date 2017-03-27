import React from 'react';
import styled, { css } from 'styled-components'
const Tabs = React.createClass({
    displayName: 'Tabs',
    propTypes: {
        selected: React.PropTypes.number,
        children: React.PropTypes.oneOfType([
            React.PropTypes.array,
            React.PropTypes.element
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

        var Lis = styled.li`
        display:inline-block;
  
    `;
        var As = styled.a`
        padding: 8px 12px;
        display: block;
        color: #444;
        text-decoration: none;
        border-bottom: 2px solid #f5f5f5;
        ${props => props.className === 'active' && 
        css`
         border-bottom-color: #337ab7;
         `}
    `;

        function labels(child, index) {
            let activeClass = (this.state.selected === index ? 'active' : '');
            return (
                <Lis key={index}>
                    <As href="#"
                        className={activeClass}
                        onClick={this.handleClick.bind(this, index)}>
                        {child.props.label}
                    </As>
                </Lis>
            );
        }
        return (
            <ul className="tabs__labels">
                {this.props.children.map(labels.bind(this))}
            </ul>
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
        var Tabss= styled.div`
          margin: 25px;
          background: #fff;
          border: 1px solid #e5e5e5;
          border-radius: 3px;
        `;
        return (
            <Tabss className="tabs">
                {this._renderTitles()}
                {this._renderContent()}
            </Tabss>
        );
    }
});

const Pane = React.createClass({
    displayName: 'Pane',
    propTypes: {
        label: React.PropTypes.string.isRequired,
        children: React.PropTypes.element.isRequired
    },
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
});

const Tabss = React.createClass({
    render() {
        return (
            <div>
                <Tabs selected={0}>
                    <Pane label="Anderi">
                        <div>This tab has my nickname</div>
                    </Pane>
                    <Pane label="Andrei">
                        <div>This tab has my given name</div>
                    </Pane>
                    <Pane label="Chris">
                        <div>Chris Bro!</div>
                    </Pane>
                </Tabs>
            </div>
        );
    }
});
export default Tabss