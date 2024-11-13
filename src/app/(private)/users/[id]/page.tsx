import React from 'react';
import {IUser} from "@/app/(private)/models/IUser";

type Props = { id: string }

const User = async ({params}:{params: Props}) => {

    const user:IUser = await fetch('https://jsonplaceholder.typicode.com/users/'+ params.id)
        .then(res => res.json())
        .then(data => JSON.parse(JSON.stringify(data)));

    return (
        <>
            {user.name}

        </>
    );
};

export default User;