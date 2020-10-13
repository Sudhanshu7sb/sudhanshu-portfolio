import React,{ useState ,useRef} from "react";
import Modal from "react-modal";
import PDFViewer from 'pdf-viewer-reactjs' ;
import ReactToPrint from "react-to-print";



function Resume(){
    const[modalIsOpen,setmodalIsOpen] = useState(false);

    return (
        <>
        <div className="has-text-centered resume-section pb-6" >
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

const Example = () => {
    const componentRef = useRef();
   
    return (
      <div>
        <ReactToPrint
          trigger={() => <button>Print this out!</button>}
          content={() => componentRef.current}
        />
        <Resume ref={componentRef} />
      </div>
    );
  };
    
  export default Example;