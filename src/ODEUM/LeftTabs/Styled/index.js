import styled, { css } from 'styled-components'

export const Lis = styled.li`
    display:block;
    `;
export const As = styled.a`
        padding: 10px 12px;
        display:inline-flex;
        color: #444;
        text-decoration: none;
        border-bottom: 2px solid #f5f5f5;
        border-radius:2px 2px 0px 0px;
        color:white;
        text-align: center;
        
        ${props => props.className === 'active' &&
        css`
                color:white;
        background-color: #3b97d3;
         `}
    `;
export const Uls = styled.ul`
          margin: 0;
          padding: 0;    
          float:left;
          background-color: #2280c3;
    `;
export const Ico = styled.div`
         padding-right: 5px;
    `;
export const PanelS = styled.div`
                 padding-left: 5px;
        `;
export const Wrap = styled.div`
          background-color: #2280c3;
        `;