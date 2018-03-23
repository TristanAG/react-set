import React from 'react'
import ReactModal from 'react-modal'
import Set from './Set'

class SetModal extends React.Component {

  constructor(props){
    super(props)
    // console.log(this.props)
    // this.state = {
    //   set: props.set
    // }
    ReactModal.setAppElement('#root');
  }

  render(){
    return(
      <ReactModal
        isOpen={this.props.isOpen}
        contentLabel="set modal"
        // ariaHideApp={false}
        aria={{
          labelledby: "Set Confirm Modal",
          describedby: "set confirmation"
        }}
        // setCards={this.state.setCards}
      >
        <div className="content">
          <center><h2 className="title is-2 has-text-primary">Got a SET!!</h2></center>
          {this.props.isOpen && console.log(this.props.set.cardOne.name)}
          {/* {console.log(this.state.set)} */}
          <Set {...this.props.set} />

          <button className="button is-success" onClick={this.props.clearModal}>close</button>
        </div>
      </ReactModal>
    )
  }

}

export default SetModal
