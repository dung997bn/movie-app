import React, {
  Fragment,
  Component,
  forwardRef,
  useImperativeHandle,
} from "react";
import { render } from "react-dom";

class Modal extends Component {
  constructor(props) {
    super(props);
    this.closeButton = null;
  }
  closeModal() {
    this.closeButton.click();
  }
  // submitModal() {
  //   this.closeModal;
  // }

  render() {
    return (
      <Fragment>
        <button
          type="button"
          className="btn btn-primary"
          data-toggle="modal"
          data-target="#exampleModal"
        >
          Create Movie
        </button>

        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Modal title
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">{this.props.children}</div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                  ref={(ele) => (this.closeButton = ele)}
                >
                  Close
                </button>
                {!this.props.hasSubmit && (
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={this.submitModal}
                  >
                    Save changes
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

// const Modal = forwardRef((props, ref) => {
//   let closeButton = null;
//   useImperativeHandle(ref, () => ({
//     closeModal(){
//       closeButton.click()
//     }
//   }));

//   return (
//     <Fragment>
//       <button
//         type="button"
//         className="btn btn-primary"
//         data-toggle="modal"
//         data-target="#exampleModal"
//       >
//         Create Movie
//       </button>

//       <div
//         className="modal fade"
//         id="exampleModal"
//         tabIndex="-1"
//         role="dialog"
//         aria-labelledby="exampleModalLabel"
//         aria-hidden="true"
//       >
//         <div className="modal-dialog" role="document">
//           <div className="modal-content">
//             <div className="modal-header">
//               <h5 className="modal-title" id="exampleModalLabel">
//                 Modal title
//               </h5>
//               <button
//                 type="button"
//                 className="close"
//                 data-dismiss="modal"
//                 aria-label="Close"
//               >
//                 <span aria-hidden="true">&times;</span>
//               </button>
//             </div>
//             <div className="modal-body">{props.children}</div>
//             <div className="modal-footer">
//               <button
//                 type="button"
//                 className="btn btn-secondary"
//                 data-dismiss="modal"
//                 ref={(ele) => (closeButton = ele)}
//               >
//                 Close
//               </button>
//               {props.hasSubmit && (
//                 <button
//                   type="button"
//                   className="btn btn-primary"
//                   onClick={submitModal}
//                 >
//                   Save changes
//                 </button>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </Fragment>
//   );
// });

// (props) => {
//   closeModal = () => {
//     closeButton.click();
//   };
//   const submitModal = () => {
//     alert("ok");
//     debugger;
//     closeButton.click();
//   };
// };

export default Modal;
