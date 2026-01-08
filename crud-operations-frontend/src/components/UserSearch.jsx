"use client"

import { useState } from "react"
import { getUserById } from "../lib/api.js"

function UserSearch() {
  const [searchId, setSearchId] = useState("")
  const [result, setResult] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const handleSearch = async (e) => {
    e.preventDefault()
    if (!searchId.trim()) {
      setError("Please enter a user ID")
      return
    }

    setLoading(true)
    setError("")
    setResult(null)

    try {
      const user = await getUserById(searchId)
      setResult(user)
    } catch (error) {
      setError("User not found")
    } finally {
      setLoading(false)
    }
  }

  const handleClear = () => {
    setSearchId("")
    setResult(null)
    setError("")
  }

  return (
    <div className="card">
      <h2>Search by ID</h2>

      <form onSubmit={handleSearch}>
        <div className="form-group">
          <input
            type="text"
            value={searchId}
            onChange={(e) => setSearchId(e.target.value)}
            placeholder="Enter user ID"
          />
        </div>

        <div className="button-group">
          <button type="submit" className="btn btn-primary" disabled={loading}>
            {loading ? "Searching..." : "Search"}
          </button>
          <button type="button" className="btn btn-secondary" onClick={handleClear}>
            Clear
          </button>
        </div>
      </form>

      {error && <div className="message error">{error}</div>}

      {result && (
        <div className="search-result">
          <h3>Result</h3>
          <div className="result-item">
            <p>
              <strong>Name:</strong> {result.name}
            </p>
            <p>
              <strong>Email:</strong> {result.email}
            </p>
            <p>
              <strong>ID:</strong> {result.id}
            </p>
          </div>
        </div>
      )}
    </div>
  )
}

export default UserSearch
