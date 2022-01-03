import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

const MilestoneList = (props) => {
  const { milestones } = props;
  const history = useHistory();
  const handleClick = () => history.push('/milestones/create');
  return (
    <div className='content-wrapper'>
      <h4>Milestones</h4>
      <hr />
      <div className= 'button'>
        <button onClick= {handleClick}> Create New Milestone</button>
      </div>
      <div id= 'milestone-list-titles'>
        <h5>Milestone</h5>
        <h5>Deadline</h5>
        <h5>Assigned To</h5>
      </div>
      <hr/>  
      <div id='milestone-list'>
        {milestones.map((milestone) => {
          return (
            // <MilestoneListItem milestone= {milestone} key= {milestone.id}/>
            <li>{milestone.title}</li>
          )
        })}
      </div>  

    </div>
  );
};

const mapState = (state) => {
  const milestones = state.milestones.filter(milestone => milestone.status !== 'Complete') || [];
  return {
    milestones: milestones,
  };
};

export default connect(mapState)(MilestoneList);