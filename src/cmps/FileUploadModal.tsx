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
            <button onClick={openModal} className="filesButton">+ Files</button>
            <dialog id="fileUploadDialog" className="dialog">
                <h2 className="header">Attach files to file search</h2>
                <div className="body">
                    <div className="dropZone">
                        <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h10a4 4 0 004-4m-4-4l-4-4m0 0l-4 4m4-4v12"></path>
                        </svg>
                        <p className="text">Drag your files here or <span className="link" onClick={triggerFileInputClick}>click to upload</span></p>
                        <input type="file" id="fileInput" className="hiddenInput" onChange={handleFileChange} />
                        <p className="info">Information in attached files will be available to this assistant.</p>
                    </div>
                </div>
                <div className="footer">
                    <button onClick={closeModal} className="footerButton">Cancel</button>
                    <button onClick={triggerFileInputClick} className="footerButton">Attach</button>
                </div>
            </dialog>
        </div>
    );
}

export default FileUploadModal;
