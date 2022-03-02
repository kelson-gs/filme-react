import { Link } from 'react-router-dom';
import './header.css';

export default function Header(){
    return(
        <div id="container-header">
            <h1>FilmNews</h1>

            <div id="nav-header">
                <Link className='link-header' to="/">home</Link>
                <Link className='link-header' to="About">About</Link>
            </div>
        </div>
    )
}