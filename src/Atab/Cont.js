import React from 'react'
import Tabs from './Tabs'
import Tab from './Tab'

const Cont = React.createClass({
    render() {
        return (
            <div>
                <Tabs selected={0}>
                    <Tab label="Tab 1" active={true}>
                        <div>This is my tab 1 contents!</div>
                    </Tab>
                    <Tab label="Tab 2" active={false}>
                        <div>This is my tab 2 contents!</div>
                    </Tab>
                    <Tab label="Tab 3" active={false}>
                        <div>This is my tab 3 contents!</div>
                    </Tab>
                </Tabs>
            </div>
        );
    }
});

export default Cont