import React, {useState, useEffect} from 'react';
import axios from 'axios';
import CardList from './CardList';



const HomePage = () => {
    const [dataset,setDataset] = useState([]);
    const [error, setError] = useState(null);
    

    useEffect(()=>{
        axios.get('https://api.github.com/users').then(response=>{
            setDataset(response.data);
            }).catch(error => {
            setError(error);
            })          
    },[dataset])

    if (error) return `Error: ${error.message}`;
    if (!dataset) return "Loading......!"

    
    return(
        <div className='tc'>
            <div className='center f3 black ba b--green br4 bw2 w-50 ma3 showdow-5'>
                <h1>GITHUB USERS' PROFILE</h1>
            </div>
            <div className='tc'>            
                <CardList userdata={dataset} />
            </div>
           
        </div>        
    )      

     
}

export default HomePage;
