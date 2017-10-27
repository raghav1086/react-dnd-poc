import React, { Component } from 'react'
import { findDOMNode } from 'react-dom'
import PropTypes from 'prop-types'
import { DropTarget } from 'react-dnd'

const itemTarget = {
  // canDrop(props, monitor) {
  //   console.log('------- canDrop')
  // },

  hover(props, monitor, component) {
    // console.log('------- hover triggered')
    const clientOffset = monitor.getClientOffset()
    const componentRect = findDOMNode(component).getBoundingClientRect()
    console.log(clientOffset)
    console.log(componentRect)
  },

  drop(props, monitor) {
    props.onDrop(monitor.getItem())
  },
}

const twenty = []
for (let i = 0; i < 20; i++) {
  twenty.push(i + 1)
}
function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop(),
  }
}

class Droppable extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {connectDropTarget, isOver, canDrop, droppedItem } = this.props
    // console.log('isOver: ', isOver)
    // console.log('canDrop: ', canDrop)
    const isActive = isOver && canDrop
    const border = isActive ? '1px solid gold' : '1px solid #eee'
    const dropList = twenty.map(idx => {
      return (
        <li
          key={idx}
          style={{...styles.itemStyle, border}}>
          {
            isActive ? 'Release to drop' : droppedItem ? droppedItem : 'Drop item here'
          }
        </li>
      )
    })
    return connectDropTarget(
      <div style={styles.wrapper}>
        <ul>
          {/*<li style={{...styles.itemStyle, border}}>
            {
              isActive ? 'Release to drop' : droppedItem ? droppedItem : 'Drop item here'
            }
          </li>*/}
          {dropList}
        </ul>
      </div>
    )
  }
}

Droppable.propTypes = {
  connectDropTarget: PropTypes.func.isRequired,
  isOver: PropTypes.bool.isRequired,
  onDrop: PropTypes.func.isRequired,
  canDrop: PropTypes.bool.isRequired,
  type: PropTypes.string.isRequired,
}

const styles = {
  wrapper: {
    width: 250,
    height: 300,
    float: 'left',
    marginRight: 50,
    marginTop: 40,
    overflow: 'overlay'
  },
  itemStyle: {
    height: 60,
    border: '1px solid #eee',
    backgroundColor: '#fff',
    fontSize: 20,
    marginBottom: 10,
    padding: 15,
  }
}

export default DropTarget(props => props.type, itemTarget, collect)(Droppable)
