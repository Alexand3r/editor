import React from 'react';
import styled, { css } from 'styled-components'
import * as Icons from 'react-icons/lib/fa'

export const Tabs = React.createClass({
    propTypes: {
        selected: React.PropTypes.number,
        icon: React.PropTypes.string,
        children: React.PropTypes.oneOfType([
            React.PropTypes.array,
            React.PropTypes.element
        ]).isRequired,

    },
    childContextTypes: {
        reactIconBase: React.PropTypes.object
    },
    getChildContext() {
              
        return {
            reactIconBase: {
                color: '#34495d',
                size: 24,
            }
        }
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
    renderIcons(child) {
        switch (child.props.icon) {
            case 'settings':
                return (
                   <Icons.FaCog/>
                );
            case 'design':
                return (
                   <Icons.FaCamera/>
                );
            case 'handlinger':
                return (
                   <Icons.FaArrowCircleORight/>
                );
            case 'felter':
                return (
                       <Icons.FaList />
                );
            case 'generelt':
                return (
                    <Icons.FaFileText />
                );
            case 'brugere':
            return(
                <Icons.FaBook/>
            );
            case 'arbejdsgang':
            return(
                <Icons.FaAreaChart/>
            );
            default:
                return (null);
            // Add more icons here
        }
    },
    _renderTitles() {

        var Lis = styled.li`
        display:inline-block;
  
    `;
        var As = styled.a`
        padding: 10px 12px;
        display: inline-flex;
        color: #444;
        text-decoration: none;
        border-bottom: 2px solid #f5f5f5;
        border-radius:2px 2px 0px 0px;
        background-color: #ecf0f0;
        color:black;
        ${props => props.className === 'active' &&
                css`
                color:white;
        background-color: #3b97d3;
         `}
    `;
        var Uls = styled.ul`
          margin: 0;
          padding: 0;    
    `;
        var Ico = styled.div`
         padding-right: 5px;
    `;


        function labels(child, index) {
            let activeClass = (this.state.selected === index ? 'active' : '');
            return (
                <Lis key={index}>
                    <As href="#"
                        className={activeClass}
                        onClick={this.handleClick.bind(this, index)}>
                        <Ico>{this.renderIcons(child)}</Ico>
                        {child.props.label}
                    </As>
                </Lis>
            );
        }
        return (
            <Uls>
                {this.props.children.map(labels.bind(this))}
            </Uls>
        );
    },
    _renderContent() {

        return (
            <div>
                {this.props.children[this.state.selected]}
            </div>
        );
    },
    render() {
        var Tabss = styled.div`
          margin: 25px;
          background: #fff;
          border: 1px solid #e5e5e5;
          border-radius: 3px;
        `;
        return (
            <Tabss>
                {this._renderTitles()}
                {this._renderContent()}
            </Tabss>
        );
    }
});

export default Tabs;