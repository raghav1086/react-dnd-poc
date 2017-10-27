import React, { Component } from 'react'
import { DragDropContext } from 'react-dnd'
import MultiBackend, { Preview } from 'react-dnd-multi-backend'
import HTML5toTouch from 'react-dnd-multi-backend/lib/HTML5toTouch'
import Draggable from './Draggable'
import Droppable from './Droppable'
import CustomDragLayer from './CustomDragLayer'

const ItemTypes = {
  LIST: 'list',
}

const style = {
  height: 60,
  backgroundColor: '#fff',
  border: '1px solid #eee',
  padding: 15,
  fontSize: 20,
  marginBottom: 10,
  cursor: 'move',
}

class Board extends Component {
  constructor(props) {
    super(props)
    this.state = {
      droppedItem: null,
      dropped: false,
    }
  }

  isDropped() {
    return this.state.dropped
  }

  handleDrop(item) {
    const { name } = item
    this.setState({
      droppedItem: name,
      dropped: true
    })
  }

  generatePreview(type, item, style) {
    Object.assign(style, {
      height: 60,
      backgroundColor: '#fff',
      border: '1px solid #eee',
      opacity: 0.5,
      padding: 15,
      fontSize: 20,
      marginBottom: 10,
      cursor: 'move',
      width: 250,
      WebkitBoxShadow: '0px 0px 4px 1px rgba(0,0,0,0.5)'
    })
    return <div style={style}>{item.name}</div>
  }

  render() {
    return (
      <div>
        <Draggable
          name="List Item"
          isDropped={this.isDropped()}
          type={ItemTypes.LIST}
        />
        <Droppable
          type={ItemTypes.LIST}
          onDrop={item => this.handleDrop(item)}
          droppedItem={this.state.droppedItem}
        />
        <Preview generator={this.generatePreview} />
        <CustomDragLayer type={ItemTypes.LIST} name="List Item" />
      </div>
    )
  }
}

export default DragDropContext(MultiBackend(HTML5toTouch))(Board)
