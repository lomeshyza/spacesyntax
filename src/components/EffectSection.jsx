import {React, useState, useEffect, useCallback }from 'react'
import Button from './Button/Button'
import Modal from './Modal/Modal'
import useInput from '../hooks/useInput'

export default function EffectSection() {
    const [isModalOpen, setModalOpen] = useState(false)
    const [loading, setLoading] = useState(false)
    const [users, setUsers] = useState([])
    const input = useInput()
   
    const fetchUsers =  useCallback(async() => {
        setLoading(true)
        const res = await fetch('https://json-placeholder.mock.beeceptor.com/users')
        const users = await res.json()
        setUsers(users)
        setLoading(false)
    },[])
        

    useEffect(() => {
        fetchUsers()
    },[fetchUsers])

    return (
        <section>
            <h3>Effect</h3>
            <Button onClick={()=>setModalOpen(true)} style={{marginBottom:"1rem"}}>Открыть информацию</Button>
            <Modal open={isModalOpen}>
                <h3>Hey Modal</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa illo fugiat sunt numquam quas, aspernatur, aut porro quasi minus aliquam optio commodi veritatis excepturi tempore impedit laborum ipsum praesentium quaerat.</p>
                <Button onClick={()=>setModalOpen(false)}>X</Button>
            </Modal>
            {loading && <p>Loading...</p>}
            {!loading && <>
                <input className="control" {...input}></input>
                <ul>
                    {users
                        .filter(user => user.name.toLowerCase().includes(input.value.toLowerCase()))
                        .map(user => { return <li key={user.id} >{ user.name}</li>})
                    }
                </ul>
            </>}
        </section>
    )
}
