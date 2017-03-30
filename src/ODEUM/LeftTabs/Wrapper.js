import React from 'react';
import Tabs from './Tabs'
import Pane from './Panel'
import Tabss from '../Tabs/Wrapper'
import * as S from './Styled/index'
const LeftTabs = React.createClass({

    render() {
        
        return (
            <S.Wrap>
                <Tabs selected={0}>
                    <Pane label="Dashboard" icon="generelt">
                        <Tabss/>
                    </Pane>
                    <Pane label="Felter" icon='felter'>
                        <div>Lorem ipsum2</div>
                    </Pane>
                    <Pane label="Arbejdsgang" icon='arbejdsgang'>
                        <div>Lorem ipsum3</div>
                    </Pane>
                     <Pane label="Brugere" icon='brugere'>
                        <div>Lorem ipsum4</div>
                    </Pane>
                     <Pane label="Handlinger" icon='handlinger'>
                        <div>Lorem ipsum5</div>
                    </Pane>
                </Tabs>
            </S.Wrap>
        );
    }
});
export default LeftTabs