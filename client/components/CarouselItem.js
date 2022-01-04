import React from 'react';
import { useHistory } from 'react-router-dom';

const CarouselItem = (props) => {
    const { milestone } = props;
    const history = useHistory();
    const handleClick = () => history.push(`/milestones/${milestone.id}`);

    const today = new Date();
    today.setUTCHours(0,0,0,0);
    const dueDate = new Date (milestone.dueDate);
    const isOverdue = today > dueDate;
    
    const monthNum = milestone.dueDate.slice(5,7);
    const monthCon = (num) => {
        switch (num) {
            case '01':
                return 'JAN';
            case '02':
                return 'FEB';
            case '03':
                return 'MAR';
            case '04':
                return 'APR';
            case '05':
                return 'MAY';
            case '06':
                return 'JUN';
            case '07':
                return 'JUL';
            case '08':
                return 'AUG';
            case '09':
                return 'SEP';
            case '10':
                return 'OCT';
            case '11':
                return 'NOV';
            case '12':
                return 'DEC';
            default:
                undefined;
        }
    };
    const month = monthCon(monthNum);
    const day = milestone.dueDate.slice(8);

    return (  
        <div className='carousel-item'> 
            <div className= 'withAlert'>
                <div onClick= {handleClick} className='calendar'>
                    <img className='top' src='/Icon/Cal/RectangleBlue.png' />
                    <h5 className='month'>{month}</h5>
                    <h5 className='date'>{day}</h5>
                </div>
                {isOverdue ? (<img className= 'alert' src='/Icon/Alert.png' />):(<div></div>)}
            </div>
            <div>
                <p onClick= {handleClick} className='carousel-titles'>{milestone.title}</p>
            </div>
            
        </div>
        
    );
};

export default CarouselItem;