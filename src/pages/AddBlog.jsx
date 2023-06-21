import '../styles/AddBlog.css'
import {useState} from 'react'
import {useAuthContext} from '../hooks/useAuthContext'

const AddBlog = () => {
    
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [error, setError] = useState(null)
    const [emptyFields, setEmptyFields] = useState([])
    const {user} = useAuthContext()

    const handleSubmit= async (e) => {
        e.preventDefault()

        if(!user) {
            setError('You must be logged in')
            return
        }

        const blog = {title, description}
        const response = await fetch(`https://mern-textblog-44104543a6bf.herokuapp.com/api/blogs/create`, {
            method: 'POST',
            body: JSON.stringify(blog),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user.token}`
            }
        })
        const json = await response.json()
        if(!response.ok) {
            setError(json.err)
            setEmptyFields(json.emptyFields)
        }
        if(response.ok) {
            setEmptyFields([])
            setTitle('')
            setDescription('')
            setError(null)
        }
    }
    return (
        <div className="addblog__container">
            <h2>Add blog</h2>
            <form onSubmit={handleSubmit} className="addblog__form">
                <label>Title</label>
                <input 
                    type='text' 
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                    className={emptyFields.includes('title') ? 'fields__error' : ''}>
                </input>
                <label>Description</label>
                <textarea
                    onChange={(e) => setDescription(e.target.value)}
                    value={description}
                    className={emptyFields.includes('description') ? 'fields__error' : ''}>
                </textarea>
                <div className='addblog__button'>
                    <button type='submit'>Add blog</button>
                </div>
                {error && <div className='div__error'>{error}</div>}
                
            </form>
        </div>
    )
}

export default AddBlog
