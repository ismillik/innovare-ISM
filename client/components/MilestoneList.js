import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const MilestoneList = (props) => {
    const { milestones, pastMilestones, history } = props;
    const handleClick = () => history.push('/milestones/create');
    return (
        <div className='content-wrapper'>
            <div className= 'list-title'>
                <h4 className='subheading-medium'>Current Milestones</h4>
                <button onClick= {handleClick}> Create New Milestone</button>
            </div>
            <hr/>  
            <div id='milestones-list'>
                {milestones.map((milestone) => {
                return (
                    <div className= 'list-item'>
                        <Link to= {`milestones/${milestone.id}`}>
                            <li key={milestone.id} className='subheading-small'>{milestone.title}</li>
                        </Link>
                        <p className= 'list-details'><strong>Due Date:</strong> {milestone.dueDate}</p>
                        <br />
                    </div>
                )
                })}
            </div>  
            <h4 className='subheading-medium'>Completed Milestones</h4>
            <hr />
            <div id='past-milestones-list'>
                {pastMilestones.map((milestone) => {
                return (
                    <div className= 'list-item'>
                        <Link to= {`milestones/${milestone.id}`}>
                            <li key={milestone.id} className='subheading-small'>{milestone.title}</li>
                        </Link>
                        <br />
                    </div>
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