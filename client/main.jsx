import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';

import FirstComp from '../imports/ui/FirstComponent.jsx';

Meteor.startup(() => {
  render(<FirstComp />, document.getElementById('render-first-component'));
});
