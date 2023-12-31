import { useCallback, useState } from 'react';

const useModal = (config = {}) => {
    const { openModal = null, closeModal = null } = config;
    const [state, setState] = useState(false);

    const getCloseModal = useCallback(() => {
        if (typeof closeModal === 'function') {
            return closeModal(setState);
        }
        return setState(false);
    }, [closeModal]);

    const getOpenModal = useCallback(() => {
        if (typeof openModal === 'function') {
            return openModal(setState);
        }
        return setState(true);
    }, [openModal]);

    return { state, closeModal: getCloseModal, openModal: getOpenModal };
};

export default useModal;
