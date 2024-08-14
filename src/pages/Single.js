import React from 'react';
import { useNavigate, useLoaderData} from "react-router-dom";

function Single() {

    const {blog, id}  = useLoaderData()

    const navigate = useNavigate();

    const goBack = () => navigate(-1)
    // не записывает в историю переадресацию на главную страницу
    // const goHome = () => navigate('/', {replace: true});



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

export const singleLoader = async ({req, params}) => {
    const id = params.id
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const blog = await res.json()

    return {blog, id}
}

export default Single;