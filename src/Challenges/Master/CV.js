import React, { Component } from 'react';
import styled,{css} from 'styled-components';

class CV extends Component {
    render() {
        const Div = styled.div`
        background: #eee;
        width:50%;
        display:inline-block;
        ${props=> this.props.float==='right' && css`
        right:0;
        `}
        ${props=> this.props.float==='left'&& css`left:0;`}
        `;        
        return (
            <Div>
                <h4>{this.props.title}</h4>
                {this.props.children}
            </Div>
        );
    }
};
CV.PropTypes={
    title: React.PropTypes.string.isRequired,
    children:React.PropTypes.oneOf([React.PropTypes.element,React.PropTypes.array])
};
export default CV;