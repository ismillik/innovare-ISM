import React from 'react';
import { connect } from 'react-redux';
import Carousel from './Carousel';
import { Link, useHistory } from 'react-router-dom';

const Dashboard = (props) => {
    const history = useHistory();
    const handleClick = () => history.push('/milestones/create');
    const { milestones } = props;
        return (
          <div className='content-wrapper'>
              <div id= 'dashboard-width'>
                  <div id='carousel-container'>
                      <div id= 'carousel-title'>
                          <h4 className='subheading-medium'>Milestones</h4>
                          <Link className='view-all' to= '/milestones'>View all</Link>
                      </div>
                      <Carousel milestones= {milestones}/>
                  </div>
                  <img className='plus' src='/Icon/40px/Plus.png' align= 'right' onClick= {handleClick} />
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

export default connect(mapState)(Dashboard);
