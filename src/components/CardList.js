import React from 'react';
import Card from './Card';

const CardList = ({userdata}) =>{
    return(
        <div>
            {
                userdata.map((user,i) =>{
                    return (
                        <Card
                        key={userdata[i].id} 
                        id={userdata[i].id}                        
                        url={userdata[i].url} 
                        avatar={userdata[i].avatar_url}
                        login={userdata[i].login} />                    
                    );                  

                })
            }          
        </div>
    )
}

export default CardList;