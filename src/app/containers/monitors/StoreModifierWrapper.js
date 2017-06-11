import React from 'react';
import StoreModifier from 'redux-devtools-store-modifier';

const StoreModifierWrapper = ({computedStates, currentStateIndex, dispatchFn }) => (
    <StoreModifier
        state={ computedStates.length ? computedStates[currentStateIndex].state : {one: 'teo'}}
        dispatch={ dispatch || this.context.store.dispatch }
    />
)

export default StoreModifierWrapper;
