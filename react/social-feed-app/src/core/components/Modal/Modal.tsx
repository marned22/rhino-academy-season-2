import ReactDOM from 'react-dom'
import { ModalProps } from '../../../types/types'
import React, { useState, useEffect } from 'react'
import { TextareaAutosize } from '@mui/material'
import '../../../ux/styles/Modal.scss'

export const Modal: React.FC<ModalProps> = ({ 
    isOpen, 
    onClose, 
    onConfirm, 
    title, 
    message, 
    isUpdateMode = false, 
    initialContent = '',
    onUpdate,
}) => {
    const [content, setContent] = useState(initialContent)

    useEffect(() => {
        setContent(initialContent)
    }, [initialContent]);

    if(!isOpen) return null

    const handleUpdate = () => {
        if(onUpdate) {
            onUpdate(content)
        }
        onClose()
    }

    return ReactDOM.createPortal(
            <div className="modal-overlay">
                <div className="modal-content">
                    <h2>{title}</h2>
                    {isUpdateMode? (
                        <TextareaAutosize
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                            minRows={5}
                            style={{
                                width: '100%',
                                padding: '12px',
                                borderRadius: '6px',
                                border: '1px solid #ccc',
                                fontSize: '1rem',
                                background: '#f9f9f9',
                                color: '#333',
                            }}
                            placeholder="Edit your content here..."
                        />
                    ) : (
                        <p>{message}</p>
                    )}
                    <div className="modal-actions">
                        <button onClick={onClose} className="cancel-button">Cancel</button>
                        {isUpdateMode ? (
                            <button onClick={handleUpdate} className="update-button">Update</button>
                        ) : (
                            <button onClick={onConfirm} className="delete-button">Delete</button>
                        )}
                    </div>
                </div>
            </div>,
            document.body
    )
}