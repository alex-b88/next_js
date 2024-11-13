import React, {FC} from 'react';
import {IUser} from "@/app/(private)/models/IUser";
import Link from "next/link";

type Props = { users: IUser[] }

const UsersComponent:FC<Props> = ({users}) => {
    return (
        <div>
            {
                users.map(user => (<div key={user.id}>
                    <Link href={'/users/' + user.id}>{user.name}</Link>

                </div>))
            }
        </div>
    );
};

export default UsersComponent;