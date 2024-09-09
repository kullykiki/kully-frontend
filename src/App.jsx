import React,{useState, useEffect} from 'react'

function App() {
  const [users, setusers] = useState([])
  useEffect(() => {
    fetch(import.meta.env.VITE_API_URL+'/users')
    .then(res => res.json())
    .then(data => setusers(data))
    .catch(e => console.log(e))
    
  }, [])
  

  return (
    <div>
      {users.map(user => (
        <li key={user.id}>{user.id} {user.name} {user.email}</li>
      ))}
      {import.meta.env.VITE_API_URL}
    </div>
  )
}

export default App