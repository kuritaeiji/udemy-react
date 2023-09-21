import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'

const Example = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    const getUser = async () => {
      const response = await axios.get('/users')
      setUsers(response.data)
    }
    getUser()
  }, [])

  return (
    <div>
      {users.map(user => (
        <div key={user.id}>
          <h3>{user.username}</h3>
          <p>age: {user.age}</p>
          <p>hobby: {user.hobbies.join(',')}</p>
        </div>
      ))}
    </div>
  )
}

export default Example
