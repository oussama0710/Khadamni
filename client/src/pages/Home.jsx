import React from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'

const Home = () => {
    const navigate = useNavigate()
    const logout= (e)=>{
        axios.get("http://127.0.0.1:8000/api/users/logout")
        .then(res=> {
            console.log(res.data)
            localStorage.clear()
            navigate("/login")
        })
        .catch(err => console.log(err))
    }
    return (
        <div>
            <h1>Hello Welcome Home</h1>
            <button onClick={logout}>Log out</button>
        </div>
    )
}

export default Home
