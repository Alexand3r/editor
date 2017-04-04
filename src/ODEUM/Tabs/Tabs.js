import React from 'react';
import {renderIcons} from '../functions/Icons.js'
import * as S from './Styled/index.js'

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
    icoColor(className) {
        if(className.includes('active'))
        {return('white')}
        else
        {
            return('#34495d')
        }
    },
    getChildContext() {
              
        return {
            reactIconBase: {               
                size: 15,
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
    _renderTitles() {
        function labels(child, index) {
            let activeClass = (this.state.selected === index ? 'active' : '');
            return (
                <S.Lis key={index}>
                    <S.As href="#"
                        className={activeClass}
                        onClick={this.handleClick.bind(this, index)}>
                        <S.Ico>{renderIcons(child.props.icon,activeClass)}</S.Ico>
                        {child.props.label}
                    </S.As>
                </S.Lis>
            );
        }
        return (
            <S.Uls>
                {this.props.children.map(labels.bind(this))}
            </S.Uls>
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
        return (
            <S.Tabss>
                {this._renderTitles()}
                {this._renderContent()}
            </S.Tabss>
        );
    }
});

export default Tabs;