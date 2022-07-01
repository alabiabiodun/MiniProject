import React, {useState, useEffect } from 'react';
import axios from 'axios';
import {useParams, useNavigate, useLocation} from 'react-router-dom';

const UserInfo = () =>{

    const [info,setInfo] = useState([]);
    const [error, setError] = useState(null);
    const {username} = useParams();
    let navigate = useNavigate();
    let location = useLocation();

    useEffect(()=>{
        axios.get(`https://api.github.com/users/${username}`)
            .then(response=>{
                setInfo(response.data);
            }).catch(error => {
                setError(error);
        })          
    },[info,username])

    if (error) return `Error: ${error.message}`;
    if (!info) return "Loading......!"

    return(
        <div className='tc'>
            <div className='center bg-light-yellow dib br3 pa3 ma4 grow showdow-5 w-50'>
                <h2>My Profile</h2>
                <img className='br3 w-40' src={info.avatar_url} alt='avatar'/>
                <div className='tc'>
                    <h3>{info.name}</h3>
                    <div className='bg-white ba b--light-pink fw6 dib br4 grow showdow-5 w-5 pa1'>
                        <small className='f5 pa2 violet'>Twitter Username: {info.login}</small><br/>
                        <small className='f5 pa2 purple'>Location: {info.location}</small>
                    </div>                                                              
                </div>
                <div className='center ma3'>
                    <div className='bg-green white br3 dib grow w-20 ma2'>{info.public_repos}<br/>Repositories</div>
                    <div className='bg-green white br3 dib grow w-20 ma2'>{info.followers}<br/>Followers</div>
                    <div className='bg-green white br3 dib grow w-20 ma2'>{info.following}<br/>Following</div>     
                </div>           
            </div>
            <div>
                <button onClick={()=>{navigate('/'+location.search)}} className='center dib f5 dim bg-white ba b--white purple grow w-18 br3 pa1 showdow-5'>Go Back</button> 
            </div>            

        </div>
            
    )
}

export default UserInfo;
