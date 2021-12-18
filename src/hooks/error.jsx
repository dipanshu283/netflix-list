import React from 'react';
import { Link } from 'react-router-dom';

function Error(props) {
    return (
        <section className='hero error'>

        <h1> 404!! </h1>
        <p>Page is not Found !!</p>
        <Link to ="/" >Go Back</Link>

    
            
        </section>
    );
}

export default Error;