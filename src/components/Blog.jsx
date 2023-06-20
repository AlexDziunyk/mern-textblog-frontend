import '../styles/Blog.css'
import {useState} from 'react'
import {Link} from 'react-router-dom'
import { useBlogsContext } from '../hooks/useBlogsContext'
import {BsFillTrash3Fill} from 'react-icons/bs'
import {useAuthContext} from '../hooks/useAuthContext'

//date fns
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const Blog = ({id, title, description, time}) => {
    const [error, setError] = useState(null)
    const { dispatch } = useBlogsContext()
    const {user} = useAuthContext()

    const handleButtonClick = async () => {

        if(!user) {
            setError('You must be logged in')
            return
        }

        const response = await fetch(`${process.env.REACT_APP_API_URL}/api/blogs/` + id, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${user.token}`
            }
        })
        const json = await response.json()
        if(!response.ok) {
            setError(json.err)
        } 
        if(response.ok) {
            dispatch({type: 'DELETE_BLOG', payload: json})
        }
    }


    return (
        <div className="blog__container">
            <Link to={`/blogs/${id}`} className='blog__data'>
                <h2>{title}</h2>
                <p>{description}</p>
                <p>{formatDistanceToNow(new Date(time), {addSuffix: true})}</p>
            </Link>
            <div className='blog__delete'>
                <BsFillTrash3Fill size={25} onClick={handleButtonClick}></BsFillTrash3Fill>
            </div>
            {error && <div className='error'>{error}</div>}
        </div>
    )
}

export default Blog
