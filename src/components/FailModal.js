import React from 'react'
import ReactModal from 'react-modal'
import Set from './Set'

class FailModal extends React.Component {
  constructor(props){
    super(props)
    ReactModal.setAppElement('#root');
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
        style={{height: 300, width: 300}}
      >
        <div className="content">
          <center>
            <h2 className="title is-2 has-text-danger">It's not a set...</h2>
            <Set {...this.props.set} />
              {this.props.isOpen &&
                <table className="table is-bordered">
                  <tbody>
                    <tr>
                      <td>color</td>
                      <td><p className={this.props.status[0] === 'pass' ? "has-text-success" : "has-text-danger"}>{this.props.status[0]}</p></td>
                    </tr>
                    <tr>
                      <td>shape</td>
                      <td><p className={this.props.status[1] === 'pass' ? "has-text-success" : "has-text-danger"}>{this.props.status[1]}</p></td>
                    </tr>
                    <tr>
                      <td>amount</td>
                      <td><p className={this.props.status[2] === 'pass' ? "has-text-success" : "has-text-danger"}>{this.props.status[2]}</p></td>
                    </tr>
                    <tr>
                      <td>fill</td>
                      <td><p className={this.props.status[3] === 'pass' ? "has-text-success" : "has-text-danger"}>{this.props.status[3]}</p></td>
                    </tr>
                  </tbody>
                </table>
              }

            <button
              className="button is-danger is-large"
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

export default FailModal
