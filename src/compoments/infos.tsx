import { type User } from "./interface"


export default function UserInfo ({id, username, email, age, bio, avatar} : User) {


    return (
        <>
            <div>{id}</div>
            {/* <input type="text" placeholder="Enter your Name"/> <br /> */}
            <label>Name :{username}</label>
            {/* <input type="text" placeholder="Enter your Name"/> <br /> */}
            <label>Email :{email}</label>
            {/* <input type="text" placeholder="Enter your Email"/> <br /> */}
            <label>Age :{age}</label>
            {/* <input type="text" placeholder="Enter your Age "/> <br /> */}
            <label>Bio :{bio}</label>
            <img src={avatar}/>
            

        </>
    )
}

