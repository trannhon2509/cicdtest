import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    // Gọi API để lấy danh sách người dùng
    axios.get('https://reqres.in/api/users?page=2')
      .then(response => {
        setUsers(response.data.data)
      })
      .catch(error => {
        console.error('There was an error fetching the users!', error)
      })
  }, [])

  return (
    <>
      <h1>Danh sách người dùng</h1>
      <div className="users">
        {users.map(user => (
          <div key={user.id} className="user">
            <img src={user.avatar} alt={user.first_name} />
            <h2>{user.first_name} {user.last_name}</h2>
            <p>Email: {user.email}</p>
          </div>
        ))}
      </div>
    </>
  )
}

export default App
