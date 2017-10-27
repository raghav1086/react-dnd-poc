import React, {Component} from 'react'
import Board from './Board'
// import Container from './Container'
// import Card from './Card'
// import {SortableContainer, SortableElement, arrayMove} from 'react-sortable-hoc'
// import { Draggable, Droppable } from 'react-drag-and-drop'
// import Modal from 'react-bootstrap/lib/Modal'
// import Popover from 'react-bootstrap/lib/Popover'
// import Tooltip from 'react-bootstrap/lib/Tooltip'
// import OverlayTrigger from 'react-bootstrap/lib/OverlayTrigger'
// import Title from '../../ui/typography/Title'
// import TitleBold from '../../ui/typography/TitleBold'
// import SubTitle from '../../ui/typography/SubTitle'
// import BoldText from '../../ui/typography/BoldText'
// import PrimaryButton from '../../ui/button/PrimaryButton'
// import Autosuggest from './AutosuggestView'

// const SortableItem = SortableElement(({value}) => <li>{value}</li>)

// const SortableList = SortableContainer(({items}) => {
//   return (
//     <ul>
//       {items.map((value, index) => (
//         <SortableItem key={`item-${index}`} index={index} value={value} />
//       ))}
//     </ul>
//   )
// })

class Styleguide extends Component {
  state = {
    // items: ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6'],
    // showModal: false,
  }
  // onSortEnd = ({oldIndex, newIndex}) => {
  //   this.setState({
  //     items: arrayMove(this.state.items, oldIndex, newIndex),
  //   })
  // }

  // close = () => {
  //   this.setState({ showModal: false })
  // }

  // open = () => {
  //   this.setState({ showModal: true })
  // }

  // onDrop(data) {
  //   console.log(data)
  // }

  render() {
    // const popover = (
    //   <Popover id="modal-popover" title="popover">
    //     very popover. such engagement
    //   </Popover>
    // )

    // const tooltip = (
    //   <Tooltip id="modal-tooltip">
    //     wow.
    //   </Tooltip>
    // )

    return (
      <div style={styles.container}>
        <Board />
        {/* <Container /> */}
        {/* <Card /> */}

        {/* <BoldText style={styles.margin}>Type ahead</BoldText> */}
        {/* <Autosuggest /> */}

        {/* <PrimaryButton onClick={this.open.bind(this)}>
          Launch demo modal
        </PrimaryButton>
        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Text in a modal</h4>
            <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>

            <h4>Popover in a modal</h4>
            <p>there is a <OverlayTrigger overlay={popover}><a href="#">popover</a></OverlayTrigger> here</p>

            <h4>Tooltips in a modal</h4>
            <p>there is a <OverlayTrigger overlay={tooltip}><a href="#">tooltip</a></OverlayTrigger> here</p>
          </Modal.Body>
          <Modal.Footer>
            <PrimaryButton onClick={this.close}>Close</PrimaryButton>
          </Modal.Footer>
        </Modal> */}
        {/* <SubTitle>Draggable list components</SubTitle> */}
        {/* <SortableList items={this.state.items} onSortEnd={this.onSortEnd} /> */}
      </div>
    )
  }
}

const styles = {
  container: {
    width: 800,
    margin: '0 auto',
  },
  dropzone: {
    padding: 50,
    marginTop: 30,
    width: 200,
  },
  margin: {
    marginTop: 20,
    marginBottom: 20,
  }
}
export default Styleguide
