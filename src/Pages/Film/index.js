import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import axios from "axios";
import './film.css'

import Footer from "../../components/Footer";
import Header from "../../components/Header";

export default function Film(){
    const {id} = useParams();

    const[film, setFilm] = useState([]);

    async function getFilm(){
        await axios.get(`https://sujeitoprogramador.com/r-api/?api=filmes/${id}`)
        .then(item => {
            console.log(item.data)
            setFilm(item.data)
        })
        .catch( err => console.log(err))
    }

    useEffect(()=> getFilm(),[] );

    return(
        <div >
            <Header/>
            {film.length !== 0? (
                <div id="film-view">
                    <h1 id="title-film">{film.nome}</h1>
                    <img src={film.foto}/>
                    <p>{film.sinopse}</p>
                </div>
            ):(
                <div class="dots">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            )}
            <Footer/>
        </div>
    );
}