import React,{useState, useEffect} from 'react'

function App() {
  const [users, setusers] = useState([])
  useEffect(() => {
    fetch('/api/users')
    .then(res => res.json())
    .then(data => setusers(data))
    .catch(e => console.log(e))
    
  }, [])
  

  return (
    <div>
      {users.map(user => (
        <li key={user.id}>{user.id} {user.name} {user.email}</li>
      ))}
    </div>
  )
}

export default App