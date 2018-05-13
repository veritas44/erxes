import React from 'react';
import PropTypes from 'prop-types';
import { compose, graphql } from 'react-apollo';
import { Tab } from '../../../components/deal/editForm';
import { queries } from '../../../graphql';

class TabContainer extends React.Component {
  render() {
    const { dealActivityLogQuery } = this.props;

    const extendedProps = {
      ...this.props,
      loadingLogs: dealActivityLogQuery.loading,
      dealActivityLog: dealActivityLogQuery.activityLogsDeal || []
    };

    return <Tab {...extendedProps} />;
  }
}

const propTypes = {
  dealActivityLogQuery: PropTypes.object
};

TabContainer.propTypes = propTypes;

export default compose(
  graphql(queries.activityLogsDeal, {
    name: 'dealActivityLogQuery',
    options: ({ deal }) => ({
      variables: {
        _id: deal._id
      }
    })
  })
)(TabContainer);
