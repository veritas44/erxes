import { Meteor } from 'meteor/meteor';
import { compose } from 'react-komposer';
import { Brands } from '/imports/api/brands/brands';
import { getTrackerLoader, composerOptions } from '/imports/react-ui/utils';
import { LiveCall } from '../components';
import { saveCallback } from './utils';

const composer = (props, onData) => {
  console.log('live call composer');
  const brandsHandler = Meteor.subscribe('brands.list', 0);
  const brands = Brands.find().fetch();

  const save = doc => saveCallback({ doc }, 'addLiveCall', 'editLiveCall', props.integration);

  if (brandsHandler.ready()) {
    return onData(null, { brands, save });
  }

  return null;
};

export default compose(getTrackerLoader(composer, composerOptions({ spinner: true })))(LiveCall);
