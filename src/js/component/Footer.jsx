import React from "react";

export const Footer = () => {
    return (
        <div className="container">
            <footer className="py-3 my-4">
                <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                    <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Inicio</a></li>
                    <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Características</a></li>
                    <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Precios</a></li>
                    <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">FAQs</a></li>
                    <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Acerca</a></li>
                </ul>
                <p className="text-center text-muted">© 2023 Company, Inc</p>
            </footer>
        </div>
    )
}