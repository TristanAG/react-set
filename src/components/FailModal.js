import React from 'react'
import ReactModal from 'react-modal'
import Set from './Set'

class FailModal extends React.Component {
  constructor(props){
    super(props)
    ReactModal.setAppElement('#root');
    console.log(props)
  }

  render() {
    return (

        <ReactModal
            isOpen={this.props.isOpen}
            contentLabel="fail modal"
            aria={{
              labelledby: "fail modal",
              describedby: "fail"
            }}
          >
            hi
            <button
              className="button is-danger"
              onClick={this.props.clearModal}
            >
              close
            </button>
        </ReactModal>

    )
  }
}

export default FailModal
