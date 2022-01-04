import React from 'react';
import { Link } from 'react-router-dom';

const CarouselItem = (props) => {
    const { milestone } = props;
    // <Link to={`/milestones/${milestone.id}`}>

    return (  
        <div className='carousel-item'> 
            <div className='calendar'>
                <img className='top' src='/Icon/Cal/RectangleBlue.png' />
                <h5 className='month'>JAN</h5>
                <h5 className='date'>21</h5>
            </div>
            <div>
                <p>{milestone.title}</p>
            </div>
            
        </div>
        
    );
};

export default CarouselItem;