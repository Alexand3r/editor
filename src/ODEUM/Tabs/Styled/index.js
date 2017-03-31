import styled,{css} from 'styled-components'

export const PanelS = styled.div`
            padding-left: 15px;
            font-family: 'Source Sans Pro';
            font-style:italic;
            font-weight:300;
`;

export const Lis = styled.li`
        display:inline-block;
        font-family: 'Source Sans Pro';
        font-style: normal;
        font-weight: 400;
    `;
    
export const As = styled.a`
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
export const Uls = styled.ul`
          margin: 0;
          padding: 0;    
    `;
export const Ico = styled.div`
         padding-right: 5px;
         ${props => props.className === 'active' &&
                css`
                color:white;
            `}
    `;
export const Tabss = styled.div`
          margin: 25px;
          background: #fff;  
        `;