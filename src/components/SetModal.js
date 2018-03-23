import React from 'react'
import ReactModal from 'react-modal'
import Set from './Set'

class SetModal extends React.Component {
  constructor(props){
    super(props)
    ReactModal.setAppElement('#root');
  }

  render(){
    return(
      <ReactModal
        isOpen={this.props.isOpen}
        contentLabel="set modal"
        aria={{
          labelledby: "Set Confirm Modal",
          describedby: "set confirmation"
        }}
      >
        <div className="content">
          <center>
            <h2 className="title is-2 has-text-success">Got a SET!!</h2>
            <Set {...this.props.set} />

            {this.props.isOpen &&
              <table className="table is-bordered">
                <tbody>
                  <tr>
                    <td>color</td>
                    <td><p>{this.props.status[0]}</p></td>
                  </tr>
                  <tr>
                    <td>shape</td>
                    <td>{this.props.status[1]}</td>
                  </tr>
                  <tr>
                    <td>amount</td>
                    <td>{this.props.status[2]}</td>
                  </tr>
                  <tr>
                    <td>fill</td>
                    <td>{this.props.status[3]}</td>
                  </tr>
                </tbody>
              </table>
            }

            <button
              className="button is-success"
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

export default SetModal
