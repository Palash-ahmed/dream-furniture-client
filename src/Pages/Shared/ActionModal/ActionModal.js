import React from 'react';

const ActionModal = ({title, message, cancelModal, successDelete, modalData}) => {
    return (
        <div>
            < input type="checkbox" id="action-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">{title}</h3>
                    <p className="py-4">{message}</p>
                    <div className="modal-action">
                        <button onClick={cancelModal} className='btn btn-outline'>Cancel</button>
                        <label onClick={() => successDelete(modalData)} htmlFor="action-modal" className="btn">Delete</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ActionModal;