import React from 'react';
import * as S from './Styled/index'

export const Panel = React.createClass({
    propTypes: {
        label: React.PropTypes.string.isRequired,
        icon: React.PropTypes.string.isRequired,
        children: React.PropTypes.element.isRequired
    },
    render() {
        return (
            <S.PanelS>
                {this.props.children}
            </S.PanelS>
        );
    }
});

export default Panel;