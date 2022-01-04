import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

const MilestoneList = (props) => {
    const { milestones, pastMilestones } = props;
    const history = useHistory();
    const handleClick = () => history.push('/milestones/create');
    return (
        <div className='content-wrapper'>
            <h4>Milestones</h4>
            <hr />
            <div className= 'button'>
                <button onClick= {handleClick}> Create New Milestone</button>
            </div>
            <div id= 'milestones-list-titles'>
                <h5>Milestone</h5>
                <h5>Deadline</h5>
                <h5>Assigned To</h5>
            </div>
            <hr/>  
            <div id='milestones-list'>
                {milestones.map((milestone) => {
                return (
                    // <MilestoneListItem milestone= {milestone} key= {milestone.id}/>
                    <li key={milestone.id}>{milestone.title}</li>
                )
                })}
            </div>  
            <h4>Completed Milestones</h4>
            <hr />
            <div id='past-milestones-list'>
                {pastMilestones.map((milestone) => {
                return (
                    // <MilestoneListItem milestone= {milestone} key= {milestone.id}/>
                    <li key={milestone.id}>{milestone.title}</li>
                )
                })}
            </div>  
        </div>
  );
};

const mapState = (state) => {
  const milestones = state.milestones.filter(milestone => milestone.status !== 'Complete') || [];
  const pastMilestones = state.milestones.filter(milestone => milestone.status === 'Complete') || [];
  return {
    milestones: milestones,
    pastMilestones: pastMilestones
  };
};

export default connect(mapState)(MilestoneList);