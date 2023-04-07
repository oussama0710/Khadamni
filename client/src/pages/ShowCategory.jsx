import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const ShowCategory = () => {
    const {cat} = useParams()
    console.log(cat)
    const [users, setUsers] = useState([])
    const [services, setServices] = useState([])
    useEffect(() => {
        axios.get("http://127.0.0.1:8000/api/auth/users")
            .then(res => {
                console.log("***********************************************Server Response", res.data)
                setUsers(res.data)
            })
            .catch(err => console.log(err))
    }, [])
    console.log(users);
    return (
        <div>
            {users.map((user, i)=>

                    /* {JSON.stringify(user.services)} */
                    user.services.map(service=>(
                        <p> {service.category===cat? 
                        service.title: ""
                    }
                    
                        </p> 
                    ))
                    


            )}
        </div>
    )
}

export default ShowCategory