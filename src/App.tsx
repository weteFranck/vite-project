import image1 from "../src/assets/Screenshot.png"
import UserInfo from "./compoments/infos"

function App() {

  const user = {
    id : 2,
    username : "wete franck",
    email : "wetefranck@gmail.com",
    age : 23,
    bio : "sddfgyfuhmgfkdmlfbgjhtk;rgfld",
    avatar : image1
  }

  return (
    <>
      <UserInfo id={user.id} username={user.username} email={user.email} age={user.age} bio={user.bio} avatar={user.avatar} />
    </>
  )
}

export default App
