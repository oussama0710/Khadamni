import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'

const Login = () => {
    const navigate = useNavigate()
    const [user,setUser] = useState({email:"", password:""})

    const logInUser = (e) => {
        e.preventDefault()
        axios.post("http://127.0.0.1:8000/api/users/login", user, {withCredentials: true})
        .then(res=> {
            console.log(res.data)
            setUser({ email:"", password:""})
            navigate("/home")
        })
        .catch(err => console.log(err))
    }
    return (
        <div>
            <h2>Log In</h2>
            <form  onSubmit={logInUser}>
                <p>Email <input type="email" onChange={(e)=>setUser({...user, email:e.target.value})} value={user.email} /></p>
                <p>Password <input type="password" onChange={(e)=>setUser({...user, password:e.target.value})} value={user.password} /></p>
                <button>Sign In</button>
            </form>
        </div>
    )
}

export default Login