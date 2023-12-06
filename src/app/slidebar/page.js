import React from 'react';
import "../css/sliderbar.css"



const Sidebar = () => {
    return (
        <section className="bar-lateral" id="bar-lateral">
            <div id="big-menu" className="">
                <ul className="options">
                    <li>
                        <a href="/">
                            <img src="https://web.opendrive.com/api/v1/download/file.json/MjdfMjIzNzUwNTdfTkJSbno?session_id=2403ecd79583378b2b2c4ed5530e2ef5d847b8277cc7fb44a8aa10cb1e8d8d0b&inline=1&preview=1" alt="Inicio" />
                            <span className="text">Inicio</span>
                        </a>
                    </li>
                    <li>
                        <a href="/shorts">
                            <img src="https://web.opendrive.com/api/v1/download/file.json/MjdfMjIzNzUxMDFfUVo4a00?session_id=2403ecd79583378b2b2c4ed5530e2ef5d847b8277cc7fb44a8aa10cb1e8d8d0b&inline=1&preview=1" alt="Shorts" />
                            <span className="text">Shorts</span>
                        </a>
                    </li>
                    <li>
                        <a href="/Suscripciones">
                            <img src="https://web.opendrive.com/api/v1/download/file.json/MjdfMjIzNzUxMDhfUFZtMHg?session_id=2403ecd79583378b2b2c4ed5530e2ef5d847b8277cc7fb44a8aa10cb1e8d8d0b&inline=1&preview=1" alt="Subscripciones" />
                            <span className="text">Subscripciones</span>
                        </a>
                    </li>
                    <hr />
                </ul>

                <ul className="options" id="library">
                    <li>
                        <a href="#">
                            <img src="https://web.opendrive.com/api/v1/download/file.json/MjdfMjIzNzUwNzJfZTE3MkI?session_id=2403ecd79583378b2b2c4ed5530e2ef5d847b8277cc7fb44a8aa10cb1e8d8d0b&inline=1&preview=1" alt="Mi Biblioteca" />
                            <span className="text">Mi Biblioteca</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="https://web.opendrive.com/api/v1/download/file.json/MjdfMjIzNzUwNTVfbGhFM00?session_id=2403ecd79583378b2b2c4ed5530e2ef5d847b8277cc7fb44a8aa10cb1e8d8d0b&inline=1&preview=1" alt="Historial" />
                            <span className="text">Historial</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="https://web.opendrive.com/api/v1/download/file.json/MjdfMjIzNzUxMTRfU3RTVU4?session_id=2403ecd79583378b2b2c4ed5530e2ef5d847b8277cc7fb44a8aa10cb1e8d8d0b&inline=1&preview=1" alt="Mis Videos" />
                            <span className="text">Mis Videos</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="https://web.opendrive.com/api/v1/download/file.json/MjdfMjIzNzUwNjRfdmp2QWk?session_id=2403ecd79583378b2b2c4ed5530e2ef5d847b8277cc7fb44a8aa10cb1e8d8d0b&inline=1&preview=1" alt="Ver más tarde" />
                            <span className="text">Ver más tarde</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="https://web.opendrive.com/api/v1/download/file.json/MjdfMjIzNzUwNzVfUnJqc0k?session_id=2403ecd79583378b2b2c4ed5530e2ef5d847b8277cc7fb44a8aa10cb1e8d8d0b&inline=1&preview=1" alt="Videos que me gustan" />
                            <span className="text">Videos que me gustan</span>
                        </a>
                    </li>
                    <hr />
                </ul>

                <ul className="options" id="subscriptions">
                    <h3>Subscripciones</h3>
                    <li>
                        <a href="#">
                            <img src="https://web.opendrive.com/api/v1/download/file.json/MjdfMjIzNzUwMDZfRzJKRW0?session_id=2403ecd79583378b2b2c4ed5530e2ef5d847b8277cc7fb44a8aa10cb1e8d8d0b&inline=1&preview=1" alt="Coderhouse" />
                            <span className="text">Coderhouse</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="https://web.opendrive.com/api/v1/download/file.json/MjdfMjIzNzUwMDhfT2Fmc24?session_id=2403ecd79583378b2b2c4ed5530e2ef5d847b8277cc7fb44a8aa10cb1e8d8d0b&inline=1&preview=1" alt="Plazti" />
                            <span className="text">Plazti</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="https://www.opendrive.com/s/MjdfMjIzNzUwMTRfSEN5WVc?preview=1&folder_id=MjdfMTQ0ODg4Nl9NR05ZSw" alt="Chess24 en Español" />
                            <span className="text">Coder</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="https://web.opendrive.com/api/v1/download/file.json/MjdfMjIzNzUwMTFfVkg2MVA?session_id=2403ecd79583378b2b2c4ed5530e2ef5d847b8277cc7fb44a8aa10cb1e8d8d0b&inline=1&preview=1" alt="CNN" />
                            <span className="text">CNN</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="https://www.opendrive.com/s/MjdfMjIzNzUwMTNfY3RFZ1E?preview=1&folder_id=MjdfMTQ0ODg4Nl9NR05ZSw" alt="National Geographic" />
                            <span className="text">National Geographic</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="https://web.opendrive.com/api/v1/download/file.json/MjdfMjIzNzUwMTRfSEN5WVc?session_id=2403ecd79583378b2b2c4ed5530e2ef5d847b8277cc7fb44a8aa10cb1e8d8d0b&inline=1&preview=1" alt="FreeCodeCamp.org" />
                            <span className="text">FreeCodeCamp.org</span>
                        </a>
                    </li>
                    <hr />
                </ul>

                <ul className="options" id="explorer">
                    <h3>Explorar</h3>
                    <li>
                        <a href="#">
                            <img src="https://web.opendrive.com/api/v1/download/file.json/MjdfMjIzNzUwMzZfbGFXbmU?session_id=2403ecd79583378b2b2c4ed5530e2ef5d847b8277cc7fb44a8aa10cb1e8d8d0b&inline=1&preview=1" alt="Explorar" />
                            <span className="text">Explorar</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="https://web.opendrive.com/api/v1/download/file.json/MjdfMjIzNzU2ODFfcFZjUmM?session_id=2403ecd79583378b2b2c4ed5530e2ef5d847b8277cc7fb44a8aa10cb1e8d8d0b&inline=1&preview=1" alt="Música" />
                            <span className="text">Música</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="https://www.opendrive.com/s/MjdfMjIzNzUwODNfUEp2RzA?preview=1&folder_id=MjdfMTQ0ODg4Nl9NR05ZSw" alt="Películas" />
                            <span className="text">Películas</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="https://www.opendrive.com/s/MjdfMjIzNzUwODBfdExjYVk?preview=1&folder_id=MjdfMTQ0ODg4Nl9NR05ZSw" alt="En directo" />
                            <span className="text">En directo</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="https://www.opendrive.com/s/MjdfMjIzNzUwNDJfVHhNTlo?preview=1&folder_id=MjdfMTQ0ODg4Nl9NR05ZSw" alt="Video Juegos" />
                            <span className="text">Video Juegos</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="https://web.opendrive.com/api/v1/download/file.json/MjdfMjIzNzUwODdfRE9MZUE?session_id=2403ecd79583378b2b2c4ed5530e2ef5d847b8277cc7fb44a8aa10cb1e8d8d0b&inline=1&preview=1" alt="Noticias" />
                            <span className="text">Noticias</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="https://www.opendrive.com/s/MjdfMjIzNzUxMDRfNXkwZ2c?preview=1" alt="Deportes" />
                            <span className="text">Deportes</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="https://www.opendrive.com/s/MjdfMjIzNzUwNzBfZzhWMkY?preview=1&folder_id=MjdfMTQ0ODg4Nl9NR05ZSw" alt="Aprendizaje" />
                            <span className="text">Aprendizaje</span>
                        </a>
                    </li>
                    <hr />
                </ul>

                <ul className="options" id="moreyoutube">
                    <h3>Mas de YouTube</h3>
                    <li>
                        <a href="#">
                            <img src="https://www.opendrive.com/s/MjdfMjIzNzUwOTFfMk1sSkQ?preview=1&folder_id=MjdfMTQ0ODg4Nl9NR05ZSw" alt="YouTube Premium" />
                            <span className="text">YouTube Premium</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="https://www.opendrive.com/s/MjdfMjIzNzUwMzNfeEhPYlA?preview=1&folder_id=MjdfMTQ0ODg4Nl9NR05ZSw" alt="Creator Studio" />
                            <span className="text">Creator Studio</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="https://www.opendrive.com/s/MjdfMjIzNzUxMTZfRlEzWjA?preview=1&folder_id=MjdfMTQ0ODg4Nl9NR05ZSw" alt="YouTube Music" />
                            <span className="text">YouTube Music</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="https://www.opendrive.com/s/MjdfMjIzNzUwNjJfTkR1OG8?preview=1&folder_id=MjdfMTQ0ODg4Nl9NR05ZSw" alt="YouTube Kids" />
                            <span className="text">YouTube Kids</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="https://www.opendrive.com/s/MjdfMjIzNzUxMTFfcjNQRzM?preview=1&folder_id=MjdfMTQ0ODg4Nl9NR05ZSw" alt="YouTube TV" />
                            <span className="text">YouTube TV</span>
                        </a>
                    </li>
                    <hr />
                </ul>

                <ul className="options" id="config">
                    <li>
                        <a href="#">
                            <img src="https://www.opendrive.com/s/MjdfMjIzNzUwOThfbkJUeXI?preview=1&folder_id=MjdfMTQ0ODg4Nl9NR05ZSw" alt="Configuración" />
                            <span className="text">Configuración</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="https://opendrive.com/s/MjdfMjIzNzUwMjZfb2tvUU4?preview=1" alt="Historial de denuncias" />
                            <span className="text">Historial de denuncias</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="https://www.opendrive.com/s/MjdfMjIzNzUwNDlfdmRYVDQ?preview=1&folder_id=MjdfMTQ0ODg4Nl9NR05ZSw" alt="Ayuda" />
                            <span className="text">Ayuda</span>
                        </a>
                    </li>
                    <hr />
                </ul>

                <div className="links">
                    <a href="#">Información</a>
                    <a href="#">Prensa</a>
                    <a href="#">Derechos de autor</a>
                    <a href="#">Contactar</a>
                    <a href="#">Creadores</a>
                    <a href="#">Publicidad</a>
                    <a href="#">Desarrolladores</a>
                </div>
                <div className="links">
                    <a href="#">Términos</a>
                    <a href="#">Privacidad</a>
                    <a href="#">Pólitica y seguridad</a>
                    <a href="#">Cómo funciona YouTube</a>
                    <a href="#">Probar funciones nuevas</a>
                </div>
                <span className="google">© 2023 Google LLC</span>
            </div>

            <div id="little-menu" className="little-menu ocultar">
            </div>
        </section>
    );
};

export default Sidebar;
