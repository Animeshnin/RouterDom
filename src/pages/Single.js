import React from 'react';
import {useParams, useNavigate} from "react-router-dom";
import {useState, useEffect} from "react";

function Single(props) {
    const [blog, setBlog] = useState()
    const navigate = useNavigate();
    const {id}  = useParams();

    const goBack = () => navigate(-1)
    // не записывает в историю переадресацию на главную страницу
    // const goHome = () => navigate('/', {replace: true});

    useEffect(() => {
        fetch(`http://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => res.json())
            .then(data => setBlog(data))
    }, [id])

    return (
        <div>
            <button onClick={goBack}>GoBack</button>
            {blog && (
                <>
                    <h1>{blog.title}</h1>
                    <p>{blog.body}</p>
                </>
            )}
        </div>
    );
}

export default Single;