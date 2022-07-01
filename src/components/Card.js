import React from 'react';
import {Link} from 'react-router-dom';


const Card = ({login, avatar}) =>{    
    return(
        <div className='tc bg-light-yellow dib br3 pa3 ma2 grow showdow-5 w-30'>
            <Link to={`/about/${login}`}>
                <img src={avatar} className='w-100' alt='avatar'/>
            </Link>                                 
            <div>
                <h2>{login}</h2>
            </div>                    
        </div>
    );

}

export default Card;



