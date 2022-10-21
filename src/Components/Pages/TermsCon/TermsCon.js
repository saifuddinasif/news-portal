import React from 'react';
import { Link } from 'react-router-dom';


const TermsCon = () => {
    return (
        <div>
            <h3>Here is our Terms and Conditions</h3>
            <p>Go back to registration <Link to='/register'>Register</Link> </p>

        </div>
    );
};

export default TermsCon;