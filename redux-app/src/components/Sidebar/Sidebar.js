/* eslint-disable jsx-a11y/anchor-is-valid */
import "./Sidebar.css"
import React from "react"
import { useSelector } from "react-redux"

export default function Sidebar() {
    const username = useSelector(state => state.user.username)

    return (
        <div className="side-bar">
            <ul>
                <li><a href="#">Hello {username}</a></li>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </div>
    )
}