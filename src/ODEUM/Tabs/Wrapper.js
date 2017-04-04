import React from 'react';
import Tabs from './Tabs'
import Panel from './Panel'

const Tabss = React.createClass({

    render() {
        return (
            <div>
                <Tabs selected={0}>
                    <Panel label='Generelt' icon="generelt">
                        <div>Lorem ipsum1</div>
                    </Panel>
                    <Panel label='Felter' icon='felter'>
                        <div>Lorem ipsum2</div>
                    </Panel>
                    <Panel label='Arbejdsgang' icon='arbejdsgang'>
                        <div>Lorem ipsum3</div>
                    </Panel>
                     <Panel label='Brugere' icon='brugere'>
                        <div>Lorem ipsum4</div>
                    </Panel>
                     <Panel label='Handlinger' icon='handlinger'>
                        <div>Lorem ipsum5</div>
                    </Panel>
                      <Panel label='Konfiguration' icon='settings'>
                        <div>Lorem ipsum6</div>
                    </Panel>
                      <Panel label='Design' icon='design'>
                        <div>Lorem ipsum7</div>
                    </Panel>
                </Tabs>
            </div>
        );
    }
});
export default Tabss