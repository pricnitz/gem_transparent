import React, { useState } from 'react';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'; // Import the magnifying glass icon
import LanguageDropdown from './langugedropdown';
import UserDetailsForm from './UserDetailsForm';
import '../css/App.css';
import '../css/Header.css';

const Header = () => {

    const [showModal, setShowModal] = useState(false);

    const showModalForm = () => setShowModal(true);
    const hideModalForm = () => setShowModal(false);

    return (
        <header>
            <nav className='nav'>
                <div className='nav_list'>
                    <LanguageDropdown />
                </div>
                <div className='nav_list'>
                    <input type="text" placeholder='Enter your text' />
                    <FontAwesomeIcon className='nav_link' icon={faMagnifyingGlass} />
                </div>
                <div className='nav_list'>
                    <button id='showmodalone_btn'> Log in</button>
                </div>
                <div className='nav_list'>
                    <button id='showmodalone_btn' onClick={showModalForm}>Register</button>
                </div>
                {showModal && (
                    <div className="modal-overlay">
                        <UserDetailsForm hideModalForm={hideModalForm} />
                    </div>
                )}
            </nav>
        </header>
    );
};

export default Header;
