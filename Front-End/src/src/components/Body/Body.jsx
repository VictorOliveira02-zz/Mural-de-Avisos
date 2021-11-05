import React, { useState, useEffect } from 'react'
import { Post, BtnDelete } from './style'
import postApi from '../../api/data.api'

const Body = () => {
    const [posts, setPosts] = useState()

    const loadPosts = async () => {
        try {
            const response = await postApi.getAllPost()
            setPosts(response)
        } catch (error) {
            console.log(error)
        }
    }

    const deletePost = async (id) => {
        try {
            const response = await postApi.delPost(id)
            console.log(response)
            loadPosts()
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        loadPosts()
    }, [])

    return (
        <>
            {posts && posts.map(post => (
                <Post key={post.id}>
                    <h1 className="post-title">{post.title}</h1>
                    <p className="post-content">{post.description}</p>
                    <BtnDelete
                        onClick={() => deletePost(post.id)}
                    >
                        <img src="trash.webp" alt="trash icon" width="40" height="40" />
                    </BtnDelete>
                </Post>
            ))}
        </>
    )
}
export default Body;