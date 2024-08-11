import React from 'react';
import {useState, useEffect} from 'react'
import {Link} from "react-router-dom";
function Blog() {
    const [blog, setBlog] = useState([])

    useEffect(() => {
        fetch('http://jsonplaceholder.typicode.com/posts/')
            .then(res => res.json())
            .then(data => setBlog(data))
    }, [])
    return (
        <div>
            <h1>Blog</h1>
            <Link to="/blog/new">Add new Post</Link>
            {blog.map((blog) => (
                <Link to={`/blog/${blog.id}`} key={blog.id}>
                    <li>{blog.title}</li>
                </Link>
            ))}
        </div>
    );
}

export default Blog;