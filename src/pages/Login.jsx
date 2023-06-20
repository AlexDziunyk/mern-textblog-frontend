import {useState} from 'react'
import '../styles/Login.css'
import {useLogin} from '../hooks/useLogin'

const Login = () => {
    const [loginValue, setLoginValue] = useState('')
    const [password, setPassword] = useState('')
    const {login, error, isLoading} = useLogin()

    const handleSubmit = async (e) => {
        e.preventDefault()
        
        await login(loginValue, password)
    }

    return (
        <div className='login__container'>
            <form className='login__form' onSubmit={handleSubmit}>
                <h3>Login</h3>
                <label>Login</label>
                <input 
                    value={loginValue}
                    onChange={(e) => setLoginValue(e.target.value)}>
                </input>
                <label>Password</label>
                <input 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}>
                </input>
                <button disabled={isLoading} type='submit'>Login</button>
                {error && <div className='error'>{error}</div>}
            </form>
        </div>
    )
}

export default Login
