"use client"

import { useState, useEffect } from "react"
import { createUser, updateUser } from "../lib/api.js"

function UserForm({ onUserCreated, editingUser, onCancelEdit }) {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState({ type: "", text: "" })

  useEffect(() => {
    if (editingUser) {
      setName(editingUser.name)
      setEmail(editingUser.email)
    } else {
      setName("")
      setEmail("")
    }
  }, [editingUser])

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!name.trim() || !email.trim()) {
      setMessage({ type: "error", text: "Please fill in all fields" })
      return
    }

    setLoading(true)
    setMessage({ type: "", text: "" })

    try {
      if (editingUser) {
        await updateUser(editingUser.id, { name, email })
        setMessage({ type: "success", text: "User updated successfully!" })
      } else {
        await createUser({ name, email })
        setMessage({ type: "success", text: "User created successfully!" })
      }
      setName("")
      setEmail("")
      onUserCreated()
    } catch (error) {
      setMessage({ type: "error", text: "Failed to save user. Please try again." })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="card">
      <h2>{editingUser ? "Edit User" : "Add New User"}</h2>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter name"
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
          />
        </div>

        {message.text && <div className={`message ${message.type}`}>{message.text}</div>}

        <div className="button-group">
          <button type="submit" className="btn btn-primary" disabled={loading}>
            {loading ? "Saving..." : editingUser ? "Update User" : "Add User"}
          </button>

          {editingUser && (
            <button type="button" className="btn btn-secondary" onClick={onCancelEdit}>
              Cancel
            </button>
          )}
        </div>
      </form>
    </div>
  )
}

export default UserForm
