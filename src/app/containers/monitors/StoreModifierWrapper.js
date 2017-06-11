import React from 'react';
import StoreModifier from 'redux-devtools-store-modifier';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { dispatchRemotely } from '../../actions';


const StoreModifierWrapper = ({computedStates, currentStateIndex, dispatch}, context) => (
    <StoreModifier
        state={ computedStates.length ? computedStates[currentStateIndex].state : {one: 'teo'}}
        dispatch={dispatch}
    />
)

StoreModifierWrapper.contextTypes = {
    store: React.PropTypes.object
};

function mapDispatchToProps(dispatch) {
    return {
        dispatch: action  => {
            const modifiedDispatch = bindActionCreators(dispatchRemotely, dispatch);
            const stringifiedAction = JSON.stringify(action);
            modifiedDispatch(stringifiedAction);
        }
    };
}

export default connect(null, mapDispatchToProps)(StoreModifierWrapper);
