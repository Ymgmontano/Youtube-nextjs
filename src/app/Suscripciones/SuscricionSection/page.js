"use client"
import React, { useState, useEffect } from 'react';
import "../../css/SuscripcionSection.css"

const SuscripcionSection = () => {
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
            .then((data) => setProducts(data.slice(0, 9).map(product => ({ ...product, subscribed: false }))))
            .catch((error) => {
                console.error('Error obteniendo productos:', error);
                setError('No se pudieron cargar los productos. Inténtalo de nuevo más tarde.');
            });
    }, []);

    const handleSubscribe = (productId) => {
        setProducts((prevProducts) => {
            return prevProducts.map(product => {
                if (product.id === productId) {
                    return { ...product, subscribed: !product.subscribed };
                }
                return product;
            });
        });
    };

    return (
        <section className="videos" id="videos">
            {products.map((product) => (
                <div key={product.id} className="container-item">
                    <div className="item">
                        <img src={product.imagechannel} alt="" className="img-channel" />
                        <div className="info">
                            <a href="#" className="name-channel">{product.channel}</a>
                            <span className="subscriptions">{product.subscriptions}</span>
                            <button onClick={() => handleSubscribe(product.id)}>
                                {product.subscribed ? 'Suscrito' : 'Suscribirse'}
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </section>
    );
};

export default SuscripcionSection;
