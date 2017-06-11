import React from 'react';
import StoreModifier from 'redux-devtools-store-modifier';


const StoreModifierWrapper = ({computedStates, currentStateIndex, dispatchFn}, context) => (
    <StoreModifier
        state={ computedStates.length ? computedStates[currentStateIndex].state : {one: 'teo'}}
        dispatch={ dispatchFn || context.store.dispatch }
    />
)

StoreModifierWrapper.contextTypes = {
    store: React.PropTypes.object
};

export default StoreModifierWrapper;
