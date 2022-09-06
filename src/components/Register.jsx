import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Styles/RegisterLogin.css'

function Register() {
    let navg = useNavigate();
    const [errors, setErrors] = useState('')

    return(
        <main className="registerLog">
            <div>
                <h1>Register</h1>
                <form onSubmit={(e) => {
              e.preventDefault()

              fetch('https://autumn-delicate-wilderness.glitch.me/v1/auth/register', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            email: e.target.email.value,
                            password: e.target.password.value
                        })
                    })
                        .then(res => res.json())
                        .then(res => {
                            if(res.err){
                                console.log(res.err)
                                setErrors('WRONG DATA')
                                return
                            }else {
                                setErrors('Created')
                                setTimeout(() => {
                                    navg('/login')
                                }, 2000)                         
                            }
                        })
                       
            }}>
                <label>Email</label>
                <input type="email" name="email"/>
                <label>Password</label>
                <input type="password" name="password" />
                <div><button type='submit'>Register</button></div>
            </form>
            <div className='errorBox'>{errors}</div>
            </div>           
        </main>
    )
}

export default Register;