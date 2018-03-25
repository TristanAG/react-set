import React from 'react'
import ReactModal from 'react-modal'

class DupModal extends React.Component {
  constructor(props){
    super(props)
    ReactModal.setAppElement('#root');
  }

  render(){
    return(
      <ReactModal
        isOpen={this.props.isOpen}
        contentLabel="warning modal"
        aria={{
          labelledby: "warning modal",
          describedby: "warning"
        }}
        style={{
          overlay: {},
          content: {
            top: '80px',
            bottom: '180px',
            paddingTop: '88px',
            backgroundColor: '#f7f8f9'
          }
        }}
      >
        <div className="content">
          <center>
            <h3>Oops! you already got this set</h3>
            <button
              className="button is-warning is-large"
              onClick={this.props.clearModal}
            >
              close
            </button>
          </center>
        </div>
      </ReactModal>
    )
  }

}

export default DupModal
