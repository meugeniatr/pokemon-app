import React, { useState } from "react";

import { ModalContext } from './ModalContext';

export const Provider: React.FC = ({ children }) => {
    const [showModal, setShowModal] = useState<boolean>(false);

    return (
        <ModalContext.Provider value={{ showModal, setShowModal }}>
            {children}
        </ModalContext.Provider>
    );
};

