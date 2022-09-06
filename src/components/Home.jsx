import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import './Styles/Home.css'

function Home() {
    let navg = useNavigate();
    const [data, setData] = useState(null)

    useEffect(() => {
        let getToken = localStorage.getItem("token")
        { !getToken && navg('/login') }

        fetch('https://autumn-delicate-wilderness.glitch.me/v1/content/skills', {
            headers: {
                "Authorization": `Bearer ${getToken}`
            }
        })
            .then(res => res.json())
            .then(res => {
                console.log(res)
                setData(res)
            })

    }, [])

    return (
        <div>
            <h1 className="homeHeader">Home</h1>
          <main className="home">
            {data && data.length === 0 && <div className="dataLoading">No data.....</div>}
            {!data && <div className="dataLoading">Data loading........</div>}
            {data && data.map((item, num) => {
                return (
                    <div key={num} className="item">
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                    </div>
                )

            })}
        </main>  
        </div>
        
    )
}

export default Home;