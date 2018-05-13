import React from 'react';
import PropTypes from 'prop-types';
import { compose, graphql } from 'react-apollo';
import { DealMove } from '../../components';
import { queries } from '../../graphql';

const propTypes = {
  stagesQuery: PropTypes.object
};

class DealMoveContainer extends React.Component {
  render() {
    const { stagesQuery } = this.props;

    const stages = stagesQuery.dealStages || [];

    const updatedProps = {
      ...this.props,
      stages
    };

    return <DealMove {...updatedProps} />;
  }
}

DealMoveContainer.propTypes = propTypes;

export default compose(
  graphql(queries.dealStages, {
    name: 'stagesQuery',
    options: ({ deal: { pipeline } }) => ({
      variables: {
        pipelineId: pipeline._id
      }
    })
  })
)(DealMoveContainer);
