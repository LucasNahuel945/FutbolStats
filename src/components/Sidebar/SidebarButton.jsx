import React from 'react';
import './Sidebar.css';

const SidebarButton = props => {
    return (
        <div className='side-btn bg-blue font-white' id="sidebar-btn">
            <i className="fas fa-bars"> </i>
        </div>
    )
}

export default SidebarButton;
