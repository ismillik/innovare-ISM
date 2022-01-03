import React from 'react';
import Carousel from './Carousel';
import { Link, useHistory } from 'react-router-dom';

const Dashboard = () => {
  const history = useHistory();
  const handleClick = () => history.push('/milestones/create');
    return (
      <div className='content-wrapper'>
          <div id= 'dashboard-width'>
              <div id='carousel-container'>
                  <div id= 'carousel-title'>
                      <h4 className='subheading-medium'>Milestones</h4>
                      <Link to = '/milestones'>View all</Link>
                  </div>
                  <Carousel />
              </div>
              <img className='plus' src='/Icon/40px/Plus.png' align= 'right' onClick= {handleClick} />
          </div>   
      </div>
    );
  };
  
  export default Dashboard;