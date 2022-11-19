import React from 'react';
import Card from './Card';



const MenuCard = (props) => {



    const userList = props.data.map(user => 
        <Card
            key={user._id}
            id={user._id}
            mail={user.email}
            date={user.date}
            status={user.status}
            updateEffect={props.updateEffect}
        />
    )


    return (
        <main className={props.className}>
            {userList}
        </main>
    );
};

export default MenuCard;