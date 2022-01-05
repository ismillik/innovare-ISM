import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

const MilestoneSingle = (props) => {
    const { milestone, user, history } = props;
    const handleClick = () => history.push(`edit/${milestone.id}`);
    return (
      <div className='content-wrapper'>
          <h4 className='subheading-medium'>{milestone.title}</h4>
          <hr/>
          <h4 className='subheading-small'>Assigned To:</h4>
          <p className= 'single-details'>{user.firstName} {user.lastName}</p>
          <h4 className='subheading-small'>Due Date:</h4>
          <p className= 'single-details'>{milestone.dueDate}</p>
          <h4 className='subheading-small'>Status:</h4>
          <p className= 'single-details'>{milestone.status}</p>
          <h4 className='subheading-small'>Details:</h4>
          <p className= 'single-details'>{milestone.details}</p>
          <button onClick= {handleClick}>Edit Milestone</button>
 
      </div>
    );
};
  
const mapState = (state, { match }) => {
    const milestone = state.milestones.find(milestone => milestone.id === match.params.id) || {};
    const user = state.users.find(user => user.id === milestone.userId) || {};
    return {
      milestone,
      user
    };
}

export default connect(mapState)(MilestoneSingle);