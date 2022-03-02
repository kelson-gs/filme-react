import axios from 'axios';
import { Link } from 'react-router-dom';
import {useState, useEffect} from 'react';

import Footer from "../../components/Footer";
import Header from "../../components/Header";

import './home.css';

export default function Home(){
    const[allFilms, setAllFilms] = useState([]);

    async function getFilms(){
        await axios.get('https://sujeitoprogramador.com/r-api/?api=filmes/')
        .then( valor => {
            setAllFilms(valor.data);
        } )
        .catch( err => console.log(err) )
    }

    useEffect(()=>{
        getFilms()
    },[])

    return(
        <div>
            <Header/>
                { allFilms.length !== 0 ? (
                    <div id="view-films">
                        {allFilms.map ( items => (
                            <div id="film" key={items.id}>
                                <img src={`${items.foto}`} />
                                <p>{items.nome}</p>
                                <Link id="link-to-film" to={`film/${items.id}`}>Acessar</Link>
                            </div>
                        ) )}
                    </div>
                ):(
                    
                    <div class="dots">
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>

                ) }
            <Footer/>
        </div>
    );
}