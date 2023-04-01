import React from 'react';

import { BrowserRouter } from 'react-router-dom'
import {Route, Routes} from 'react-router-dom'
import Ok from './Ok';
import Mainapp from './Mainapp';
function Uapp(){
    return(
        <BrowserRouter>
         
            <Routes>
                <Route  path='/' element={<Mainapp/>}/>
                <Route  path={'/lol1'} element={<Ok/>}/>
                
            </Routes>
            
            
        </BrowserRouter>
    )
}
export default Uapp;