import styled, {css} from 'styled-components'
import React from 'react';

const Tabs = () => ({

_renderContent() {
    return(
        <div>
            {this.props.children[this.state.selected]}
            </div>
    )
},
_renderLabel(){
return(
    <div>
        {this.props.children.label}
        </div>
)
},
render(){
const TabsS = styled.div`
${props=> props.selected===1 && css`
    background-color:red;
    `}
`;

return(

    <TabsS>
{this._renderLabel}

    </TabsS>
);
}
});
Tabs.propTypes={
    selected: React.PropTypes.number,
    active: React.PropTypes.bool,
    children:React.PropTypes.oneOfType([
        React.PropTypes.array,
        React.PropTypes.element,
        ]).isRequired
}
export default Tabs;