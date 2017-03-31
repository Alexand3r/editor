import React from 'react';
import Tabs from './Tabs'
import Pane from './Panel'

const Tabss = React.createClass({

    render() {
        var panels = [{
            label:'Generelt', 
            icon:'generelt',
            children:'lorem ipsum'
        }, {label:'Felter', icon:'felter', children:'lorem ipsum2'}];
        return (
            <div>
                <Tabs selected={0}>
                     {panels.map(panels =>( <Pane label={panels.label} icon={panels.icon}><div>{panels.children}</div></Pane>))}
                   
                </Tabs>
            </div>
        );
    }
});
export default Tabss