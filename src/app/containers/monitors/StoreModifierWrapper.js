import React from 'react';
import StoreModifier from 'redux-devtools-store-modifier';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { dispatchRemotely } from '../../actions';


const StoreModifierWrapper = ({computedStates, currentStateIndex}, context) => (
    <StoreModifier
        state={ computedStates.length ? computedStates[currentStateIndex].state : {one: 'teo'}}
    />
)

StoreModifierWrapper.contextTypes = {
    store: React.PropTypes.object
};

function mapDispatchToProps(dispatch) {
    return {
        dispatch: bindActionCreators(dispatchRemotely, dispatch)
    };
}

export default connect(null, mapDispatchToProps)(StoreModifierWrapper);
