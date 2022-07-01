import React from 'react';
import HomePage from '../components/HomePage';
import UserInfo from '../components/UserInfo';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

const App = () => {            
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} exact/>
                <Route path="/about/:username" element={<UserInfo />} exact/>                
            </Routes>    
        </BrowserRouter>           
    )
}

export default App;