import React, {useEffect} from 'react';
import Navbar from "./navbar/Navbar";
import './app.css'
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Registration from "./authorization/Registration";
import Login from "./authorization/Login";
import {useDispatch, useSelector} from "react-redux";
import {auth} from "../actions/user";
import MenuCard from './Card/MenuCard';
import { useState } from 'react';
import axios from 'axios'

let count = 0

function App() {
    const isAuth = useSelector(state => state.user.isAuth)
    const dispatch = useDispatch()

    const [data, setData] = useState([])

    const getAll = async () => {
        try {
            const res = await axios.get(`http://localhost:5000/api/auth/allusers`,
                    {headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}}
        )
            setData(res.data)
            return res.data
        } catch (e) {
            console.log(e);
        }
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
                    </Switch>
                    }
                </div>
                
                    {isAuth 
                        ? <MenuCard className={'container mx-auto flex flex-wrap justify-start'} data={data}/> 
                        : <h2 className=' flex justify-center text-lg font-bold mt-10 text-white'>Hello u should Register or Log-In first :)</h2>
                    }
                
            </div>
        </BrowserRouter>
    );
}

export default App;
