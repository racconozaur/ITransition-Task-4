import React, {useEffect} from 'react';
import Navbar from "./navbar/Navbar";
import './app.css'
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Registration from "./authorization/Registration";
import Login from "./authorization/Login";

import NotFound from './nooFound/NotFound';


import {useDispatch, useSelector} from "react-redux";
import {auth} from "../actions/user";
import MenuCard from './Card/MenuCard';
import { useState } from 'react';
import axios from 'axios'



function App() {
    const [count, setCount] = useState(0)
    const isAuth = useSelector(state => state.user.isAuth)
    const dispatch = useDispatch()

    const [data, setData] = useState([])

    const getAll = async () => {
        try {
            const res = await axios.get(`https://agile-peak-50869.herokuapp.com/api/auth/allusers`,

                    {headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}}
        )
            setData(res.data)
            return res.data
        } catch (e) {
            console.log(e);
        }
    }

    const updateEffect = () => {
        setCount(count+1)
    }

    useEffect(() => {
        dispatch(auth())
        getAll()
    }, [count])


    return (
        <BrowserRouter>
            <div className='app'>
                <Navbar/>
                <div className="wrap">
                    {!isAuth &&
                    <Switch>
                        <Route path="/registration" component={Registration}/>
                        <Route path="/login" component={Login}/>
                        <Route path='/*' component={NotFound}/>
                    </Switch>
                    }
                </div>

                    {!isAuth ? '' :<p className=' text-white flex justify-center'>Sometimes you will need to reload page to see changes</p>}

            
                
                    {isAuth 
                        ? <MenuCard className={'container mx-auto flex flex-wrap justify-start'} data={data} updateEffect={updateEffect}/> 
                        : <h2 className=' flex justify-center text-lg font-bold mt-10 text-white'>Hello u should Register or Log-In first :)</h2>
                    }
                
            </div>
        </BrowserRouter>
    );
}

export default App;
