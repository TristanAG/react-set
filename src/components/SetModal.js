import React from 'react'
import ReactModal from 'react-modal'

const SetModal = (props) => (
  <ReactModal
    isOpen={props.isOpen}
    contentLabel="set modal"
    ariaHideApp={false}
  >
    <div className="content">
      <h3>hello world</h3>
      <button className="button is-success" onClick={props.clearModal}>close</button>
    </div>
  </ReactModal>
)

export default SetModal
