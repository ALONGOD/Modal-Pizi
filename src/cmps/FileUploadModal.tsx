import React from 'react';

function FileUploadModal() {
    const openModal = () => {
        const dialog = document.getElementById('fileUploadDialog') as HTMLDialogElement | null;
        if (dialog) {
            dialog.showModal();
        }
    };

    const closeModal = () => {
        const dialog = document.getElementById('fileUploadDialog') as HTMLDialogElement | null;
        if (dialog) {
            dialog.close();
        }
    };

    const handleFileUpload = (files: FileList) => {
        // Handle file upload
        console.log(files);
        closeModal();
    };

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            handleFileUpload(event.target.files);
        }
    };

    const triggerFileInputClick = () => {
        const fileInput = document.getElementById('fileInput') as HTMLInputElement | null;
        if (fileInput) {
            fileInput.click();
        }
    };

    return (
        <div>
            <button onClick={openModal} style={styles.filesButton}>+ Files</button>
            <dialog id="fileUploadDialog" style={styles.dialog}>
                <h2 style={styles.header}>Attach files to file search</h2>
                <div style={styles.body}>
                    <div style={styles.dropZone}>
                        <svg style={styles.icon} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h10a4 4 0 004-4m-4-4l-4-4m0 0l-4 4m4-4v12"></path>
                        </svg>
                        <p style={styles.text}>Drag your files here or <span style={styles.link} onClick={triggerFileInputClick}>click to upload</span></p>
                        <input type="file" id="fileInput" style={styles.hiddenInput} onChange={handleFileChange} />
                        <p style={styles.info}>Information in attached files will be available to this assistant.</p>
                    </div>
                </div>
                <div style={styles.footer}>
                    <button style={styles.footerButton}>Select vector store</button>
                    <div>
                        <button onClick={closeModal} style={styles.footerButton}>Cancel</button>
                        <button onClick={triggerFileInputClick} style={styles.footerButton}>Attach</button>
                    </div>
                </div>
            </dialog>
        </div>
    );
}

const styles: { [key: string]: React.CSSProperties } = {
    filesButton: {
        backgroundColor: '#4a4a4a',
        color: '#fff',
        padding: '5px 10px',
        borderRadius: '5px',
        border: 'none',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        fontSize: '14px',
    },
    dialog: {
        width: '400px',
        border: 'none',
        borderRadius: '8px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.5)',
        padding: '20px',
        backgroundColor: '#2d2d2d',
        color: '#ffffff',
    },
    header: {
        fontSize: '20px',
        marginBottom: '20px',
    },
    body: {
        marginBottom: '20px',
    },
    dropZone: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        border: '2px dashed #444',
        borderRadius: '10px',
        height: '200px',
    },
    icon: {
        width: '50px',
        height: '50px',
        color: '#888',
    },
    text: {
        marginTop: '20px',
        textAlign: 'center',
    },
    link: {
        color: '#1a73e8',
        cursor: 'pointer',
    },
    hiddenInput: {
        display: 'none',
    },
    info: {
        marginTop: '10px',
        color: '#bbb',
    },
    footer: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    footerButton: {
        backgroundColor: '#3a3a3a',
        color: '#fff',
        padding: '10px 20px',
        borderRadius: '5px',
        border: 'none',
        cursor: 'pointer',
        marginLeft: '10px',
    },
};

export default FileUploadModal;
