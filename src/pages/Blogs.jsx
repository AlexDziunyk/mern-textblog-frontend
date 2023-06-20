import { useEffect} from 'react'
import Blog from '../components/Blog'
import '../styles/Blogs.css'
import { useBlogsContext } from '../hooks/useBlogsContext'
import {useAuthContext} from '../hooks/useAuthContext'

const Blogs = () => {
    const {blogs, dispatch} = useBlogsContext()
    const {user} = useAuthContext()

    if(!user) {
        setError('You must be logged in')
        return
    }

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await fetch(`${REACT_APP_API_URL}api/blogs`, {
                    headers: {
                        'Authorization': `Beared ${user.token}`
                    }
                })
                const json = await response.json()
                if(response.ok) {
                    dispatch({type: 'SET_BLOGS', payload: json})
                }
            } catch (err) {
                console.log(err)
            }
        }
       
        fetchBlogs()
        
    }, [dispatch])
    return (
        <>
            <h2>Blogs</h2>
            <div className='blogs'>
                {blogs.length ? blogs.map(blog => (
                    <Blog 
                        key={blog._id} 
                        id={blog._id} 
                        title={blog.title} 
                        description={blog.description}
                        time={blog.createdAt}/>
                )) : <div>There isn't any blog</div>}
            </div>
        </>
    )
}

export default Blogs
