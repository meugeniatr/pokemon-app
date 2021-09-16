import React, { createContext } from 'react';

export type ModalContextType = {
    showModal: boolean;
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
};

export const ModalContext = createContext<ModalContextType>({
    showModal: false,
    setShowModal: () => {},
});
