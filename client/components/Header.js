import React from 'react';


const Header = () => {
    return (
      <div id='header'>
          <div id='header-left'>
              {/* would update this to reflect appropriate account based on logged in user */}
              <h4>Jefferson High School</h4>
          </div>
          <div id='header-right'>
            {/* would update this to reflect a logged in user and notifications connected with that user account */}
              <img id='notification' src='/Icon/24px/Notification.png'/>
              <h5>Ann Hand</h5>
              <img id= 'profile' src='/Icon/60px/Profile.png'/>
          </div>
      </div>
    );
  };
  
  export default Header;