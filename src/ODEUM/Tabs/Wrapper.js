import React from 'react';
import Tabs from './Tabs'
import Pane from './Panel'
import CV from '../../Challenges/Simple/Example'

const Tabss = React.createClass({

    render() {
        
        return (
            <div>
                <Tabs selected={0}>
                    <Pane label="Generelt" icon="generelt">
                       <CV/>
                    </Pane>
                    <Pane label="Felter" icon='felter'>
                        <div>Lorem ipsum2</div>
                    </Pane>
                    {/*<Pane label="Arbejdsgang" icon='null'>
                        <div>Lorem ipsum3</div>
                    </Pane>
                     <Pane label="Brugere" icon='null'>
                        <div>Lorem ipsum3</div>
                    </Pane>
                     <Pane label="Handlinger" icon='handlinger'>
                        <div>Lorem ipsum3</div>
                    </Pane>
                      <Pane label="Konfiguration" icon='settings'>
                        <div>Lorem ipsum3</div>
                    </Pane>
                      <Pane label="Design" icon='design'>
                        <div>Lorem ipsum3</div>
                    </Pane>*/}
                </Tabs>
            </div>
        );
    }
});
export default Tabss