import React from 'react';
import { useState } from 'react';
import { updateStatus } from '../../actions/user';
import Toolbar from '../Toolbar/Toolbar';
import Card from './Card';



const MenuCard = (props) => {

    const allUserId = []

    const [checked, setIsChecked] = useState(false)

    const changeHandler = () => {
        setIsChecked(!checked)
        
    }

    const blockAllHandler = () => {
        // allUserId.forEach(e => {
        //     updateStatus(e)
        // })
        if (checked) {
            props.data.map(user => updateStatus(user._id))
            console.log('all blocked');
            props.updateEffect()
            // const reloadTimeout = setTimeout(() => {
            //     window.location.reload();
            // }, 500)
        }
        else{
            alert('check all first');
        }
    }



    const userList = props.data.map(user => 
        <Card
            key={user._id}
            id={user._id}
            mail={user.email}
            date={user.date}
            status={user.status}
            updateEffect={props.updateEffect}
            checkedState = {checked}
        />
    )


    return (
        <main className={props.className}>
            {/* {userList} */}
            <Toolbar changeHandler={changeHandler} blockAllHandler={blockAllHandler}/>
            <div className="flex flex-col w-full">
                <div className="overflow-x-auto">
                    <div className="p-1.5 w-full inline-block align-middle">
                        <div className="overflow-hidden border rounded-lg">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-base font-bold text-left text-gray-500 uppercase "
                                        >
                                            Check
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-base font-bold text-left text-gray-500 uppercase "
                                        >
                                            Email
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-base font-bold text-left text-gray-500 uppercase "
                                        >
                                            Date
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-base font-bold text-left text-gray-500 uppercase "
                                        >
                                            Status
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-base font-bold text-right text-gray-500 uppercase "
                                        >
                                            Edit
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-base font-bold text-right text-gray-500 uppercase "
                                        >
                                            Delete
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 ">
                                    {userList}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        
    );
};

export default MenuCard;