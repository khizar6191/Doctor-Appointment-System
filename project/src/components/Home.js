import React from 'react';


import '../components/admin1.css';
import '../components/animations.css';
import '../components/index1.css';
import '../components/background.css';


function App1() {
  return (
 
     <div className="full-height back">
      
      <div >
         
        <font className="edoc-logo">DOCO. </font>
        <font className="edoc-logo-sub">| THE ECHANNELING PROJECT</font>
        
      </div>

    

      <div className="text-center">
        <p className="heading-text">Avoid Hassles & Delays.</p>
      </div>

      <div className="text-center">
        <p className="sub-text2">
          How is health today, Sounds like not good!<br />
          Don't worry. Find your doctor online Book as you wish with DOCO. <br />
          We offer you a free doctor channeling service, Make your appointment now.
        </p>
      </div>

      <div className="text-center">
        <a href="/login">
          <input
            type="button"
            value="Make Appointment"
            className="login-btn btn-primary btn"
            style={{
              paddingLeft: '25px',
              paddingRight: '25px',
              paddingTop: '10px',
              paddingBottom: '10px'
            }}
          />
        </a>
      </div>
    </div>
    
    
  );
}

export default App1;
