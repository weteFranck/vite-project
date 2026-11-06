import { useState } from "react"

function MyForm({ }) {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");


    return (
        <>
            <form action="">
                <p>{name}, {email}</p>
                <div>
                    <label htmlFor="">name</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </div>

                <div>
                    <label htmlFor="">email</label>
                    <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>

                <div>
                    <button>submit</button>
                </div>

            </form>
        </>
    )
}
export default MyForm;