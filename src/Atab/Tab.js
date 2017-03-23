import styled, {css} from 'styled-components'
import React from 'react';

const Tab = () => ({
propTypes:{
    label: React.PropTypes.string.isRequired,
    active: React.PropTypes.bool.isRequired,
    children:React.PropTypes.element.isRequired
},
render(){
const TabPanel = styled.div`
${props=> props.active && css`
    background-color:red;
    `}
`;
return(
    <TabPanel>
{this.props.children}
</TabPanel>
);
}
});

export default Tab;