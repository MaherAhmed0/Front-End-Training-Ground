import { useDispatch } from "react-redux"
import { login } from "../../Redux/userSlice"
import "./Form.css"
import React, { useState } from "react"

export default function Form() {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch()

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(login({ username, email, password }))
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-item">
                <input
                    type="text"
                    placeholder="Enter username"
                    onChange={(e) => setUsername(e.target.value)} />
            </div>
            <div className="form-item">
                <input
                    type="email"
                    placeholder="Enter email"
                    onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="form-item">
                <input
                    type="password"
                    placeholder="Enter password"
                    onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div className="form-item">
                <button>Login</button>
            </div>
        </form>
    )
}
