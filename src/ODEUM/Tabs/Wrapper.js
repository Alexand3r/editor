import React from 'react';
import Tabs from './Tabs'
import Pane from './Panel'

const Tabss = React.createClass({

    render() {
        
        return (
            <div>
                <Tabs selected={0}>
                    <Pane label="Generelt" icon="generelt">
                        <div>Lorem ipsum1</div>
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
                      <Pane label="Konfiguration" icon='settings'>
                        <div>Lorem ipsum6</div>
                    </Pane>
                      <Pane label="Design" icon='design'>
                        <div>Lorem ipsum7</div>
                    </Pane>
                </Tabs>
            </div>
        );
    }
});
export default Tabss