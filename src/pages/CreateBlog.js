import React from 'react';
import {useNavigate} from "react-router-dom";
import useAuth from "../hook/useAuth";

function CreateBlog() {
    const {signOut} = useAuth();
    const navigate = useNavigate();


    return (
        <div>
            <h1>Create a post</h1>
            <button onClick={() => signOut(() => navigate('/', {replace: true}))}>Log out</button>
        </div>
    );
}

export default CreateBlog;