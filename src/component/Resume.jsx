import React from "react";
import Modal from "react-modal";
import PDFViewer from "pdf-viewer-reactjs";
// import ReactToPrint from "react-to-print";

class Resume extends React.Component {
  state = {
    modalIsOpen: false,
  };
  // const [modalIsOpen, setmodalIsOpen] = useState(false);

  render() {
    return (
      <>
        <div className="has-text-centered resume-section py-6">
          <button
            onClick={() => {
              this.setState({ modalIsOpen: true });
            }}
            className="resume button is-info"
          >
            View Resume
          </button>
          {Modal.setAppElement('body')}
          <Modal
            isOpen={this.state.modalIsOpen}
            onRequestClose={() => {
              this.setState({ modalIsOpen: false });
            }}
          >
            <div className="has-text-right">
              <button
                onClick={() => {
                  this.setState({ modalIsOpen: false });
                }}
              >
                X
              </button>
            </div>
            <PDFViewer
              document={{
                url: "Sudhanshu-Shekhar-Behera-Resume.pdf",
              }}
              hideZoom={true}
            />
          </Modal>
        </div>
      </>
    );
  }
}
// const Example = () => {
//   const componentRef = useRef();
//   return (
//     <div>
//       <ReactToPrint
//         trigger={() => <button>Print this out!</button>}
//         content={() => componentRef.current}
//       />
//       <Resume ref={componentRef} />
//     </div>
//   );
// };
export default Resume;