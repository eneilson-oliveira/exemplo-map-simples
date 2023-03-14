

import './App.css'
const users = [
  {
    id:1,
    name:'Carlos',
    address:' Rua 14',
    age:'14',
    isAdmin:'false',
  },
  {
    id:2,
    name:'Ambronho',
    address:' Rua 41',
    age:'41',
    isAdmin:'true',
  }
]

function App() {
  return (
   <>
   <div>
    {users.map((user) => (
      <div key={user.id}>
        {user.name }, 
        {user.age} ,
        {user.address},
      </div>
    ))}
    </div>
   </>
  )
 }

export default App
