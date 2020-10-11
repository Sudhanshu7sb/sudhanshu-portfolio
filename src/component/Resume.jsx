import React,{ useState } from "react";
import Modal from "react-modal";
import PDFViewer from 'pdf-viewer-reactjs' 



function Resume(){
    const[modalIsOpen,setmodalIsOpen] = useState(false);

    return (
        <>
        <div className="has-text-centered">
            <button onClick={()=>{setmodalIsOpen(true)}} className="resume button is-info">View Resume</button>
            <Modal isOpen={modalIsOpen} onRequestClose={() => {setmodalIsOpen(false)} }>
            <div className="has-text-right">
                   <button onClick={()=>{setmodalIsOpen(false)}}>X</button>
               </div>
            <PDFViewer
            document={{
                url: 'Sudhanshu-Shekhar-Behera-Resume.pdf',
            }}
            hideZoom={true} onPrevBtnClick={false}
        />
              
            </Modal>
        </div>
        </>
    );

}

export default Resume;