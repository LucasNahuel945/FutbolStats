import React, {Fragment} from 'react';

const Sidebar = props => {
    
    return (
        <Fragment>
            <nav className='sidebar' id='sidebar'>
                <h1>Ligas</h1>
                <hr className='hr1 hr-lg hr-blue'/>
                <ol className='menu'>
                    <li>
                        <h4> Liga 1</h4>
                        <ol className='submenu'>
                            <li>Partidos</li>
                            <li>Equipos</li>
                        </ol>
                    </li>
                </ol>
            </nav>
        </Fragment>
    )
}

export default Sidebar;
