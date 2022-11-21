
import React from 'react';
import { useState } from 'react';
import axios from 'axios'
import Button from '../../utils/button/Button';
import { deleteuser, updateStatus } from '../../actions/user';
import Checkbox from '../../utils/checkbox/Checkbox';

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
        // window.location.reload();
        const reloadTimeout = setTimeout(() => {
            window.location.reload();
        }, 500)
        
        
    }

    

    return (
        // <div className=' w-64 h-64 m-4 bg-blue-500 border-2 border-white rounded-lg flex flex-col justify-around p-4 text-slate-800 text-lg font-semibold '>

        //     <div className="flex items-center mb-4">
        //         <Checkbox id={single} className={"w-5 h-5 rounded-lg border-white focus:ring-green-500 "} />
        //         {/* <input id={single} checked={'true'} type="checkbox" value="" className="w-5 h-5 rounded-lg border-white focus:ring-green-500 "/> */}
        //         <label htmlFor={single} className="ml-2 text-sm font-medium text-gray-900">Check user</label>
        //     </div>

        //     <h2 className=' text-xl font-bold text-white'>E-mail: {props.mail}</h2>
        //     <p>Registration date: {props.date}</p>
        //     <p>Status: {props.status}</p>
        //     <div className=' flex justify-around'>
        //         <Button
        //             className={props.status == 'active' ? 'bg-red-400 hover:bg-red-500' : ' bg-green-300 hover:bg-green-500' }
        //             onClick={blockHandler}
        //         >
        //             {props.status == 'active' ? 'Block' : 'Unblock'}
        //         </Button>
        //         <Button
        //             className={' bg-white hover:bg-slate-200'}
        //             onClick={deleteHandler}
        //         >
        //             Delete
        //         </Button>
        //     </div>
        // </div>


        <tr>
            <td className="px-6 py-4 text-sm font-bold text-white whitespace-nowrap">
                <Checkbox id={single} checked={props.checkedState} className={"w-5 h-5 rounded-lg border-white focus:ring-green-500 "} />
            </td>
            <td className="px-6 py-4 text-sm font-bold text-white whitespace-nowrap">
                {props.mail}
            </td>
            <td className="px-6 py-4 text-sm text-white font-bold  whitespace-nowrap">
                {props.date}
            </td>
            <td className="px-6 py-4 text-sm text-white font-bold whitespace-nowrap">
                {props.status}
            </td>
            <td className="px-6 py-4 text-sm font-bold text-right whitespace-nowrap">
                <Button
                    className={props.status == 'active' ? 'bg-red-400 hover:bg-red-500' : ' bg-green-300 hover:bg-green-500' }
                    onClick={blockHandler}
                >
                    {props.status == 'active' ? 'Block' : 'Unblock'}
                </Button>
            </td>
            <td className="px-6 py-4 text-sm font-bold text-right whitespace-nowrap">
                <Button
                    className={' bg-white hover:bg-slate-200'}
                    onClick={deleteHandler}
                >
                    Delete
                </Button>
            </td>
        </tr>
    );
};

export default Card

