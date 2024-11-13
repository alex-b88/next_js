import React, {FC} from 'react';
import {IPost} from "@/app/(private)/models/IPost";
import Link from "next/link";

type Props = { posts: IPost[] }

const PostsComponent:FC<Props> = ({posts}) => {
    return (
        <>
            {
                posts.map(post => (<div key={post.id}>
                    <Link href={'/posts/' + post.id}>{post.title}</Link>

                </div>))
            }
        </>
    );
};

export default PostsComponent;