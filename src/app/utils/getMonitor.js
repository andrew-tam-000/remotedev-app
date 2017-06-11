import React, { Component, PropTypes } from 'react';
import LogMonitor from 'redux-devtools-log-monitor';
import ChartMonitorWrapper from '../containers/monitors/ChartMonitorWrapper';
import InspectorWrapper from '../containers/monitors/InspectorWrapper';
import StoreModifierWrapper from  '../containers/monitors/StoreModifierWrapper';

export const monitors = [
  { key: 'StoreModifier', title: 'Store Modifier' },
  { key: 'LogMonitor', title: 'Log monitor' },
  { key: 'InspectorMonitor', title: 'Inspector' },
  { key: 'ChartMonitor', title: 'Chart' }
];

export default function getMonitor({ monitor, lib }) {
  switch (monitor) {
    case 'StoreModifier':
      return <StoreModifierWrapper/>;
    case 'LogMonitor':
      return <LogMonitor preserveScrollTop={false} markStateDiff />;
    case 'ChartMonitor':
      return <ChartMonitorWrapper />;
    default:
      return <InspectorWrapper lib={lib} />;
  }
}
