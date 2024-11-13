import React from 'react';
import PostsComponent from "@/app/(private)/components/posts/PostsComponent";

const PostsPage = async () => {

    const posts = await fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())

    return (
        <div>
            <PostsComponent posts={posts}/>
        </div>
    );
};

export default PostsPage;