import { Link } from 'react-router-dom';
import './Styles/HeaderFooter.css'

function HeaderFooter({ children, link1, link2 }) {
    return (
        <div>
            <nav>
                <div>
                    <img src="https://img.cppng.com/download/2020-06/27358-8-sparkle-transparent-background.png" alt="img" width="110px" />
                </div>
                <div className='links'>
                    <Link to={"/"+link1}>{link1}</Link>
                    <Link to={"/"+link2}>{link2}</Link>
                </div>
            </nav>
            {children}
            <footer>
                Copy Right @ asd
            </footer>
        </div>
    )
}

export default HeaderFooter;