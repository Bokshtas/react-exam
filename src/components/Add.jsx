import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Styles/Add.css"

function Add() {
    const [errors, setErrors] = useState('')
    let navg = useNavigate();

    useEffect(() => {
        let getToken = localStorage.getItem("token");
        {!getToken && navg("/login")}
    }, [])

    function Add(title, description) {
        let getToken = localStorage.getItem("token")

        fetch("https://autumn-delicate-wilderness.glitch.me/v1/content/skills", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${getToken}`
            },
            body: JSON.stringify({
                title: title,
                description: description
            })
        })
            .then(res => res.json())
            .then(res => {
                if(res.err){
                    setErrors(res.err)
                    return
                }
                setErrors(res.msg)
                setTimeout(() => {
                    navg("/home")
                }, 2000)
            })
            .catch(error => console.log(error))
    }

    return(
        <main>
            <div>
                <form className="add" onSubmit={(e) => {
                    e.preventDefault();

                    Add(e.target.title.value, e.target.description.value)
                }}>
                    <label>Title</label>
                    <input type="text" name="title" />
                    <label>Description</label>
                    <textarea name="description" rows="5"></textarea>
                    <div className="registerLog">
                        <button type="submit">ADD</button>
                    </div>
                </form>
                <div className="errorBox">{errors}</div>
            </div>
        </main>
    )
}

export default Add;