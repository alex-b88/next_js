import React from 'react';
import Link from "next/link";

const Menu = () => {
    return (
        <div className={"menu"}>
            <ul>
                <li>
                    <Link href={"/"}>main</Link>
                </li>
                <li>
                    <Link href={"/users"}>users</Link>
                </li>
                <li>
                    <Link href={"/posts"}>posts</Link>
                </li>
                <li>
                    <Link href={"/comments"}>comments</Link>
                </li>
            </ul>
        </div>
    );
};

export default Menu;