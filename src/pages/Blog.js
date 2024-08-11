import React from 'react';
import {useState, useEffect} from 'react'
import {Link} from "react-router-dom";
function Blog(props) {
    const [blog, setBlog] = useState([])

    useEffect(() => {
        fetch('http://jsonplaceholder.typicode.com/posts/')
            .then(res => res.json())
            .then(data => setBlog(data))
    }, [])
    return (
        <div>
            <h1>Blog</h1>
            {blog.map((blog, key) => (
                <Link to={`/blog/${blog.id}`} key={blog.id}>
                    <li>{blog.title}</li>
                </Link>
            ))}
        </div>
    );
}

export default Blog;