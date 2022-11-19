import React from 'react';
import { useState } from 'react';
import axios from 'axios'
import Button from '../../utils/button/Button';
import { deleteuser, updateStatus } from '../../actions/user';

const Card = (props) => {

    const single = Math.random()

    const [blocked, setBlocked] = useState(true)

    const blockHandler = () => {
        setBlocked(!blocked)
        updateStatus(props.id)
        props.updateEffect()
    }

    const deleteHandler = async () => {
        console.log(props.id);
        deleteuser(props.id)
        props.updateEffect()
        
        
    }

    

    return (
        <div className=' w-64 h-64 m-4 bg-blue-500 border-2 border-white rounded-lg flex flex-col justify-around p-4 text-slate-800 text-lg font-semibold '>

            <div className="flex items-center mb-4">
                <input id={single} type="checkbox" value="" className="w-5 h-5 rounded-lg border-white focus:ring-green-500 "/>
                <label htmlFor={single} className="ml-2 text-sm font-medium text-gray-900">Default checkbox</label>
            </div>

            <h2 className=' text-xl font-bold text-white'>E-mail: {props.mail}</h2>
            <p>Registration date: {props.date}</p>
            <p>Status: {props.status}</p>
            <div className=' flex justify-around'>
                <Button
                    className={props.status == 'active' ? ' bg-green-300 hover:bg-green-500' : 'bg-red-400 hover:bg-red-500' }
                    onClick={blockHandler}
                >
                    {props.status == 'active' ? 'Block' : 'Unblock'}
                </Button>
                <Button
                    className={' bg-white hover:bg-slate-200'}
                    onClick={deleteHandler}
                >
                    Delete
                </Button>
            </div>
            
        </div>
    );
};

export default Card;