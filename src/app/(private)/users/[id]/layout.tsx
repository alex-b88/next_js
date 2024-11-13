import React from 'react';
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'metadata',
    description: 'description',
    keywords: 'keywords',
}

type Props = { children: React.ReactNode }

const UserLayOut = ({ children }: Props) => {
    return (
        <>
            {children}

        </>
    );
};

export default UserLayOut