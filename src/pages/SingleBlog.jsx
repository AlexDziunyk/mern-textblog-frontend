import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {useAuthContext} from '../hooks/useAuthContext'
import '../styles/SingleBlog.css'

const SingleBlog = () => {
    
    const {id} = useParams()
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const {user} = useAuthContext()

    useEffect(() => {
        if(!user) {
            return
        }
        const fetchBlog = async () => {
            try {
                const response = await fetch(`${REACT_APP_API_URL}api/blogs/` + id, {
                    headers: {
                        'Authorization': `Bearer ${user.token}`
                    }
                })
                const json = await response.json()
                if(response.ok) {
                    setTitle(json.title)
                    setDescription(json.description)
                }
            } catch (err) {
                console.log(err)
            }
        }
        fetchBlog()
    }, [])

    return (
        <div>
            <h1>{title}</h1>
            <p className='singleblog__description'>{description}</p>
        </div>
    )
}

export default SingleBlog
