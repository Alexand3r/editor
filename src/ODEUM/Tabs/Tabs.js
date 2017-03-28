import React from 'react';
import styled, { css } from 'styled-components'

import * as Icons from 'react-icons/lib/fa'

export const Tabs = React.createClass({
    displayName: 'Tabs',
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
                color: 'black',
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
            case 'my-icon':
                return (
                    <g><path d="M7.41 7.84l4.59 4.58 4.59-4.58 1.41 1.41-6 6-6-6z" /></g>
                );
            case 'another-icon':
                return (
                    <g><path d="M7.41 15.41l4.59-4.58 4.59 4.58 1.41-1.41-6-6-6 6z" /></g>
                );
            case 'settings':
                return (
                    <g><path d="M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65c-.03-.24-.24-.42-.49-.42h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zm-7.43 2.52c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z"></path></g>
                );
            case 'design':
                return (
                    <g><path d="M9.4 10.5l4.77-8.26c-.7-.15-1.42-.24-2.17-.24-2.4 0-4.6.85-6.32 2.25l3.66 6.35.06-.1zm12.14-1.5c-.92-2.92-3.15-5.26-6-6.34l-3.66 6.34h9.66zm.26 1h-7.49l.29.5 4.76 8.25c1.64-1.78 2.64-4.14 2.64-6.75 0-.69-.07-1.35-.2-2zm-13.26 2l-3.9-6.75c-1.63 1.78-2.64 4.14-2.64 6.75 0 .69.07 1.35.2 2h7.49l-1.15-2zm-6.08 3c.92 2.92 3.15 5.26 6 6.34l3.66-6.34h-9.66zm11.27 0l-3.9 6.76c.7.15 1.42.24 2.17.24 2.4 0 4.6-.85 6.32-2.25l-3.66-6.35-.93 1.6z"></path></g>
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
        border-radius:3px;
        ${props => props.className === 'active' &&
                css`
        color:white;
        background-color: #3b97d3;
        border-bottom-color: #337ab7;
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
            <Uls className="tabs__labels">
                {this.props.children.map(labels.bind(this))}
            </Uls>
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
        var Tabss = styled.div`
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

export default Tabs;