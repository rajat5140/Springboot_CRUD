"use client"

import { useState, useEffect } from "react"
import UserForm from "./components/UserForm.jsx"
import UserList from "./components/UserList.jsx"
import UserSearch from "./components/UserSearch.jsx"
import { getUsers } from "./lib/api.js"
import "./App.css"
import "./components/styles.css"

function App() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [editingUser, setEditingUser] = useState(null)

  const fetchUsers = async () => {
    setLoading(true)
    try {
      const data = await getUsers()
      setUsers(data)
    } catch (error) {
      console.error("Failed to fetch users:", error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchUsers()
  }, [])

  const handleUserCreated = () => {
    fetchUsers()
    setEditingUser(null)
  }

  const handleEdit = (user) => {
    setEditingUser(user)
  }

  const handleCancelEdit = () => {
    setEditingUser(null)
  }

  return (
    <div className="app">
      <header className="header">
        <h1>User Management</h1>
        <p>Spring Boot + MongoDB CRUD</p>
      </header>

      <main className="main-content">
        <div className="left-panel">
          <UserForm onUserCreated={handleUserCreated} editingUser={editingUser} onCancelEdit={handleCancelEdit} />
          <UserSearch />
        </div>

        <div className="right-panel">
          <UserList users={users} loading={loading} onRefresh={fetchUsers} onEdit={handleEdit} />
        </div>
      </main>
    </div>
  )
}

export default App
