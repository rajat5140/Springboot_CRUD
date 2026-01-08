"use client"

import { deleteUser } from "../lib/api.js"

function UserList({ users, loading, onRefresh, onEdit }) {
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this user?")) return

    try {
      await deleteUser(id)
      onRefresh()
    } catch (error) {
      alert("Failed to delete user")
    }
  }

  return (
    <div className="card">
      <div className="card-header">
        <h2>All Users ({users.length})</h2>
        <button className="btn btn-secondary" onClick={onRefresh}>
          Refresh
        </button>
      </div>

      {loading ? (
        <div className="loading">Loading users...</div>
      ) : users.length === 0 ? (
        <div className="empty">No users found. Add your first user!</div>
      ) : (
        <div className="user-list">
          {users.map((user) => (
            <div key={user.id} className="user-item">
              <div className="user-info">
                <div className="user-avatar">{user.name.charAt(0).toUpperCase()}</div>
                <div className="user-details">
                  <h3>{user.name}</h3>
                  <p>{user.email}</p>
                  <span className="user-id">ID: {user.id}</span>
                </div>
              </div>
              <div className="user-actions">
                <button className="btn-icon edit" onClick={() => onEdit(user)} title="Edit user">
                  ✏️
                </button>
                <button className="btn-icon delete" onClick={() => handleDelete(user.id)} title="Delete user">
                  🗑️
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default UserList
