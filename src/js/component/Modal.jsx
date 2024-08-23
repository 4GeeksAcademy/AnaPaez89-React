import React from "react";

export const Modal = () => {
    return (
        <div className="modal modal-sheet position-static d-block bg-secondary py-5" tabindex="-1" role="dialog" id="modalSheet">
            <div className="modal-dialog" role="document">
                <div className="modal-content rounded-6 shadow">
                    <div className="modal-header border-bottom-0">
                        <h5 className="modal-title">Título del modal</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body py-0">
                        <p>Esta es una hoja modal, una variación del modal que se coloca en la parte inferior del viewport como las
                            nuevas hojas compartidas en iOS.</p>
                    </div>
                    <div className="modal-footer flex-column border-top-0">
                        <button type="button" className="btn btn-lg btn-primary w-100 mx-0 mb-2">Guardar cambios</button>
                        <button type="button" className="btn btn-lg btn-light w-100 mx-0" data-bs-dismiss="modal">Cerrar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}