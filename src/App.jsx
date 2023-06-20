import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import {useAuthContext} from './hooks/useAuthContext'
import About from './pages/About'
import Blogs from './pages/Blogs'
import AddBlog from './pages/AddBlog'
import SingleBlog from './pages/SingleBlog'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Navbar from './components/Navbar'
import './App.css'


function App() {
  const {user} = useAuthContext()

  return (
    <div className='container'>
      <BrowserRouter>
        <Navbar />
        <div className='pages__container'>
          <Routes>
            <Route 
              path='/' 
              element={<Blogs />}
            />
            <Route 
              path='/about' 
              element={user ? <About /> : <Navigate to='/login' />}
            />
            <Route 
              path='/blogs/create' 
              element={user ? <AddBlog /> : <Navigate to='/login' />}
            />
            <Route 
              path='/blogs/:id' 
              element={user ? <SingleBlog /> : <Navigate to='/login' />}
            />
            <Route 
              path='/signup' 
              element={!user ? <Signup /> : <Navigate to='/' />}
            />
            <Route 
              path='/login' 
              element={!user ? <Login /> : <Navigate to='/' />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
