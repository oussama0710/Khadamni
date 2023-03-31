import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'

const Register = (props) => {

    const navigate = useNavigate()
    const [newUser,setNewUser] = useState({firstName:"", lastName:"", email:"", password:"", confirmPassword:""})

    const createUser = (e) => {
        e.preventDefault()
        axios.post("http://127.0.0.1:8000/api/users/register", newUser, {withCredentials: true})
        .then(res=> {
            console.log(res.data)
            setNewUser({firstName:"", lastName:"", email:"", password:"", confirmPassword:""})
            navigate("/home")
        })
        .catch(err => console.log(err))
    }
    return (
        <div>
            <h2>Register</h2>
            <form  onSubmit={createUser}>
                <p>First Name <input onChange={(e)=>setNewUser({...newUser, firstName:e.target.value})} value={newUser.firstName}  /></p>
                <p>Last Name <input onChange={(e)=>setNewUser({...newUser, lastName:e.target.value})} value={newUser.lastName} /></p>
                <p>Email <input type="email" onChange={(e)=>setNewUser({...newUser, email:e.target.value})} value={newUser.email} /></p>
                <p>Password <input type="password" onChange={(e)=>setNewUser({...newUser, password:e.target.value})} value={newUser.password} /></p>
                <p>Confirm Password <input type="password" onChange={(e)=>setNewUser({...newUser, confirmPassword:e.target.value})} value={newUser.confirmPassword}/></p>
                <button>Register</button>
            </form>
        </div>
    )
}

export default Register
