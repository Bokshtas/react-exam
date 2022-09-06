import { useState } from "react"
import './Styles/RegisterLogin.css'
import { useNavigate } from 'react-router-dom'

function Login() {
    let navg = useNavigate();
    const [errors, setErrors] = useState('')

    return(
        <main className="registerLog">
            <div>
                <h1>Login</h1>
            <form onSubmit={(e) => {
              e.preventDefault()

              fetch('https://autumn-delicate-wilderness.glitch.me/v1/auth/login', {
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
                                localStorage.setItem('token', res.token)
                                setErrors('Logged In')  
                                setTimeout(() => {
                                    navg('/home')
                                }, 2000)        
                            }
                        })
                        
            }}>
                <label>Email</label>
                <input type="email" name="email"/>
                <label>Password</label>
                <input type="password" name="password" />
                <div><button type='submit'>Login</button></div>
            </form>
            <div className='errorBox'>{errors}</div>
            </div>
        </main>
    )
}

export default Login;