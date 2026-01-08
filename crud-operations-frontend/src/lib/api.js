const API_BASE_URL = "http://localhost:8081/api"

export async function getUsers() {
  const response = await fetch(`${API_BASE_URL}/users`)
  if (!response.ok) throw new Error("Failed to fetch users")
  return response.json()
}

export async function getUserById(id) {
  const response = await fetch(`${API_BASE_URL}/users/${id}`)
  if (!response.ok) throw new Error("User not found")
  return response.json()
}

export async function createUser(userData) {
  const response = await fetch(`${API_BASE_URL}/users`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userData),
  })
  if (!response.ok) throw new Error("Failed to create user")
  return response.json()
}

export async function updateUser(id, userData) {
  const response = await fetch(`${API_BASE_URL}/users/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userData),
  })
  if (!response.ok) throw new Error("Failed to update user")
  return response.json()
}

export async function deleteUser(id) {
  const response = await fetch(`${API_BASE_URL}/users/${id}`, {
    method: "DELETE",
  })
  if (!response.ok) throw new Error("Failed to delete user")
  return true
}
