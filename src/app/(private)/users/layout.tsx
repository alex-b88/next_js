import React from 'react';
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'List of users'
}

type Props = { children: React.ReactNode }

const UsersLayout = ({ children }: Props) => {
    return (
        <>
            {children}
        </>
    );
};

export default UsersLayout