import React from 'react';

export const Pane = React.createClass({
    propTypes: {
        label: React.PropTypes.string.isRequired,
        icon: React.PropTypes.string.isRequired,
        children: React.PropTypes.element.isRequired
    },
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
});

export default Pane;