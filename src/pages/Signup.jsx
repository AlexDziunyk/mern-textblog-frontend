import {useState} from 'react'
import { useSignup } from '../hooks/useSignup'
import '../styles/Signup.css'

const Signup = () => {
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const {signup, isLoading, error} = useSignup()

    const handleSubmit = async (e) => {
        e.preventDefault()
        await signup(login, password)
    }
    
    return (
        <div className='signup__container'>
            <form className='signup__form' onSubmit={handleSubmit}>
                <h3>Signup</h3>
                <label>Login</label>
                <input 
                    value={login}
                    onChange={(e) => setLogin(e.target.value)}>
                </input>
                <label>Password</label>
                <input 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)}>
                </input>
                {/* <label>Repeat password</label>
                <input></input> */}
                <button disabled={isLoading} type='submit'>Signup</button>
                {error && <div className='error'>{error}</div>}
            </form>
        </div>
    )
}

export default Signup
