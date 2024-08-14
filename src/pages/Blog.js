import React, {Suspense} from 'react';
import {Await, defer, Link, useLoaderData, useSearchParams} from "react-router-dom";
import BlogFilter from "../components/BlogFilter";
function Blog() {
    const {blog} = useLoaderData()
    const [searchParams, setSearchParams] = useSearchParams()
    // .get сохраняет в url адресс наши вводимые данные и при помощи ключа post мы можем их вытащить
    const postQuery = searchParams.get('post') || ''

    const latest = searchParams.has('latest')

    const startsForm = latest ? 80 : 1;


    return (
        <div>
            <h1>Blog</h1>
            <BlogFilter setSearchParams={setSearchParams} postQuery ={postQuery} latest = {latest}/>
            <Link to="/blog/new">Add new Post</Link>
            <Suspense fallback={<h2>Loading...</h2>}>
                <Await resolve={blog}>
                    {
                        (resolvedBlog) => (
                            <>
                                {resolvedBlog.filter(post => post.title.includes(postQuery) && post.id >= startsForm).map((blog) => (
                                    <Link to={`/blog/${blog.id}`} key={blog.id}>
                                        <li>{blog.title}</li>
                                    </Link>
                                ))}
                            </>
                        )
                    }
                </Await>
            </Suspense>

        </div>
    );
}

async function getPosts(){
    const res = await fetch('https://jsonplaceholder.typicode.com/posts/')
    return res.json()
}

export const blogLoader = async () => {
    return defer({
        blog: getPosts()
    })
}

export default Blog;