import React, { Component } from 'react';
import styled, { css } from 'styled-components';

class CV extends Component {
    render() {
        const Div = styled.div`
        background: #eee;
        width:50.01%;
        height:200px;
        margin-top:20px;
        text-align:center;
        ${props => this.props.float === 'right' && css`
        float:right;

        `}
        ${props => this.props.float === 'left' && css`
        float:left;

        `}
        `;
        var Center = styled.div`
    background: royalblue;
    position:absolute;
    left:50%;
    height:inherit;
    width:25px;
    `;
        return (
          
           
            <Div>
                 <Center/>
                <h4>{this.props.title}</h4>
                {this.props.children}
                
            </Div>
            
        );
    }
};
CV.PropTypes = {
    title: React.PropTypes.string.isRequired,
    children: React.PropTypes.oneOf([React.PropTypes.element, React.PropTypes.array])
};
export default CV;