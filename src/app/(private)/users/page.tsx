import React from 'react';
import UsersComponent from "@/app/(private)/components/users/UsersComponent";


const UsersPage = async () => {

    const users = await fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())

    return (
        <div>
            <UsersComponent users={users}/>
        </div>
    );
};

export default UsersPage;