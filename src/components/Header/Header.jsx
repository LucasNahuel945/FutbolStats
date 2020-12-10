import React from 'react';
import {Link} from 'react-router-dom';
import LeagueSelector from '../LeagueSelector/LeagueSelector';
import './Header.css';

const Header = (props) => {
    const {league} = props;
    return (
        <div className='header'>
            <div className='container'>
                <LeagueSelector/>
                <div className='flex-rows expand nav'>
                    <Link className='nav-item' to={'/'+league}> Partidos </Link>
                    <Link className='nav-item' to={'/'+league+'/teams'}> Equipos </Link>
                    <Link className='nav-item' to={'/'+league+'/instances'}> Instancias </Link>
                    <Link className='nav-item' to={'/'+league+'/standings'}> Posiciones </Link>
                    <Link className='nav-item' to={'/'+league+'/stats'}> Estadísticas </Link>
                </div>
            </div>
        </div>
    )
}

export default Header;
