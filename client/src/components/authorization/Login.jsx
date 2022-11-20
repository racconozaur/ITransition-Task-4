import React, {useState} from 'react';
import Input from "../../utils/input/Input";
import {useDispatch} from "react-redux";
import {login} from "../../actions/user";

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch()


    const submitHandler = () => {


        dispatch(login(email, password))

        const reloadTimeout = setTimeout(() => {
            window.location.reload();
        }, 500)
    }

    return (
        <div className=' flex justify-center mt-20'>
            <div className=' bg-blue-400 w-96 p-10 rounded-lg'>
            <div className="block text-lg font-bold text-white my-2">Log-In</div>
                <div className="block text-lg font-bold text-slate-700 my-2">E-mail</div>
                <Input
                    className="border-slate-200 w-full h-10 p-2 placeholder-slate-400 rounded-lg contrast-more:border-slate-400 contrast-more:placeholder-slate-500" 
                    value={email}
                    setValue={setEmail}
                    type={'email'}
                    placeholder={'Your Email'}
                />

                <div className="block text-lg font-bold text-slate-700 my-2">Password</div>
                <Input
                    className="border-slate-200 w-full h-10 p-2 placeholder-slate-400 rounded-lg contrast-more:border-slate-400 contrast-more:placeholder-slate-500" 
                    value={password}
                    setValue={setPassword}
                    type={'passwordemail'}
                    placeholder={'Your Password'}
                />

                <div className=' flex justify-end'>
                    <button 
                        className=' bg-green-300 p-3 rounded-lg mt-5 hover:cursor-pointer'
                        onClick={submitHandler}
                    >
                        Submit
                    </button>
                </div>
            </div>
            
        </div>
    );
};

export default Login;
