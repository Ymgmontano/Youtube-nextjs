"use client"
import React, { useState, useEffect } from 'react';
import "../css/VideoSection.css"

const VideosSection = () => {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('http://127.0.0.1:5001/api/products')
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Error al obtener productos');
                }
                return response.json();
            })
            .then((data) => setProducts(data.slice(0, 9)))
            .catch((error) => {
                console.error('Error obteniendo productos:', error);
                setError('No se pudieron cargar los productos. Inténtalo de nuevo más tarde.');
            });
    }, []);

    return (
        <section className="videos" id="videos">
            {products.map((product) => (
                <div key={product.id} className="container-item">
                    <div className="item">
                        <div className="img-container">
                            <img src={product.image} alt="" />
                            <span className="time">{product.time}</span>
                        </div>
                        <div className="row">
                            <div className="col">
                                <div className="img-channel">
                                    <img src={product.imagechannel} alt="" />
                                </div>
                            </div>
                            <div className="col">
                                <div className="info">
                                    <h3><a href="#">{product.title}</a></h3>
                                    <a href="#" className="name-channel">{product.channel}</a>
                                    <div className="metadata">
                                        <span>{product.view} visualizaciones</span>
                                        &#9679;
                                        <span>{product.uploaded} días</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="buttons-video" id="buttons-video">
                            <button>
                                <img src="img/icono-historial.png" alt="Clock Icon" />
                                Ver mas tarde
                            </button>
                            <button>
                                <img src="img/icono-add.png" alt="Video Add Icon" />
                                Añadir a la cola
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </section>
    );
};

export default VideosSection;