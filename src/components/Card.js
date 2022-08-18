import React from 'react';
import {Link} from 'react-router-dom';


const Card = ({login, avatar}) =>{    
    return(
        <Link to={`/about/${login}`}>
                <div className='tc bg-light-yellow dib br3 pa3 ma2 grow shadow-5 w-30'>
                    <img src={avatar} className='w-100' alt='avatar'/>                                            
                    <div>
                        <h2 className='f4'>{login}</h2>
                    </div>
                </div>
        </Link>              
        
    );

}

export default Card;



