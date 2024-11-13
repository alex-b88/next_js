import React from 'react';
import {IComment} from "@/app/(private)/models/IComment";

type Props = { id: string }

const Page = async({params}:{params:Props}) => {

    const comment:IComment = await fetch('https://jsonplaceholder.typicode.com/comments/'+ params.id)
        .then(res => res.json())
        .then(data => JSON.parse(JSON.stringify(data)));

    return (
        <>
            <h3>{comment.name}</h3>
            <div>{comment.body}</div>
        </>
    );
};

export default Page;