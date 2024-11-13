import React from 'react';
import {IPost} from "@/app/(private)/models/IPost";

type Props = { id:string }

const Post = async ({params}:{params:Props}) => {

    const post:IPost = await fetch('https://jsonplaceholder.typicode.com/posts/'+ params.id)
        .then(res => res.json())
        .then(data => JSON.parse(JSON.stringify(data)));

    return (
        <div>
            <h3>{post.title}</h3>
            <div>{post.body}</div>

        </div>
    );
};

export default Post;