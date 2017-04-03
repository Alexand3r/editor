import React from 'react';
import Tabs from './Tabs'
import Pane from './Panel'
var panels= [ { label:'Generelt', 
            icon:'generelt',
            children:'lorem ipsum'},{label:'Felter', icon:'felter', children:'lorem ipsum2'}
        ];
const Tabss = React.createClass({
    
    addPanel(label1,icon1,children1){
       
        
        panels.push({label:label1, icon:icon1, children:children1});
        this.forceUpdate();
    },
    removePanel()
    {
        panels.splice(-1);
        this.forceUpdate();
    },
    render() {

        return (
            <div>
                <button onClick={this.addPanel.bind(this,'test','generelt','hahaha')}>Add</button>
                 <button onClick={this.removePanel.bind(this,'test','generelt','hahaha')}>Remove</button>
                 <Tabs selected={0}>
                     {panels.map(panels =>( <Pane key={panels.label} label={panels.label} icon={panels.icon}><div>{panels.children}</div></Pane>))}
                   
                </Tabs>
            </div>
        );
    }
});
export default Tabss