"use client";
import React, { useState } from 'react';
import "../css/header.css";

const Header = () => {
    const [showModal, setShowModal] = useState(false);
    const [showSecondModal, setShowSecondModal] = useState(false);


    return (
        <header className="header" id="header">
            <div className="logo-bar">
                <div className="container-nav" id="icono-bar">
                    <img src="https://www.opendrive.com/s/MjdfMjIzNzM5NzRfUTdCOUc?preview=1&folder_id=MjdfMTQ0ODg4Nl9NR05ZSw" className="nav-bar" alt="nav-bar" />
                </div>
                <img src="https://www.opendrive.com/s/MjdfMjIzNzM3NzFfbXY3TXg?preview=1&folder_id=MjdfMTQ0ODg4Nl9NR05ZSw" alt="" className="logo" />
            </div>

            <div className="center" id="center">
                <div className="container-search">
                    <div className="icono">
                        <img src="https://www.opendrive.com/s/MjdfMjIzNzQwNzhfUFlJRFg?preview=1&folder_id=MjdfMTQ0ODg4Nl9NR05ZSw" className="icono" alt="icono" />
                    </div>
                    <input type="text" placeholder="Buscar" id="buscar" />
                    <div className="button-search">
                        <img src="https://www.opendrive.com/s/MjdfMjIzNzQwNzhfUFlJRFg?preview=1&folder_id=MjdfMTQ0ODg4Nl9NR05ZSw" alt="button-search" />
                    </div>
                </div>
                <div className="container-micro">
                    <img src="https://www.opendrive.com/s/MjdfMjIzNzUwNzhfR3V0Qno?preview=1&folder_id=MjdfMTQ0ODg4Nl9NR05ZSw" className="micro" alt="micro" />
                </div>
            </div>

            <div className="end">
                <div className="item-end">
                    <img src="https://web.opendrive.com/api/v1/download/file.json/MjdfMjIzNzUwMjRfdUhtTmM?session_id=2403ecd79583378b2b2c4ed5530e2ef5d847b8277cc7fb44a8aa10cb1e8d8d0b&inline=1&preview=1" className="camera" alt="camera" />
                </div>
                <div className="item-end">
                    <button onClick={() => setShowModal(true)} className='button-notification'>
                        <img src="https://www.opendrive.com/s/MjdfMjIzNzUwMjJfaUVtWEs?preview=1&folder_id=MjdfMTQ0ODg4Nl9NR05ZSw" alt="notification" />
                    </button>
                </div>
                <div className="item-end">
                    <button className='button-notification'>
                        <img src="https://web.opendrive.com/api/v1/download/file.json/MjdfMjIzNzYwNDdfdGpMUUk?session_id=2403ecd79583378b2b2c4ed5530e2ef5d847b8277cc7fb44a8aa10cb1e8d8d0b&inline=1&preview=1" alt="" className="logo-canal" />
                    </button>
                </div>
            </div>

            {showModal ? (
                <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 modal-container">
                    <h2 className="text-base text-gray-400 font-semibold text-center mb-4">
                        May your life be filled with success and achievements. Congratulations!
                    </h2>
                    <button
                        className="w-auto px-4 py-2 bg-blue-600 text-white rounded-md shadow hover:shadow-lg font-semibold"
                        onClick={() => setShowModal(false)}
                    >
                        Close
                    </button>
                </div>
            ) : null}


        </header>
    );
};

export default Header;
