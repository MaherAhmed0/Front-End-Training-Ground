import "./Header.css"
import React from "react"
import { useSelector } from "react-redux"

export default function Header() {
    const username = useSelector(state => state.user.username)
    console.log(username)
    return (
        <header>
            <h1>LOGO</h1>
            <p>Welcome {username}</p>
        </header>
    )
}