import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { DragSource } from 'react-dnd'
import { getEmptyImage } from 'react-dnd-html5-backend'

const itemSource = {
  beginDrag(props) {
    return {
      name: props.name
    }
  }
}

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging(),
    connectDragPreview: connect.dragPreview(),
  }
}

class Draggable extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.connectDragPreview(getEmptyImage(), {
      captureDraggingState: true,
    })
  }

  render() {
    const { connectDragSource, isDropped, name } = this.props
    return connectDragSource(
      <div style={styles.wrapper}>
        <ul>
          <li style={styles.itemStyle}>
            {
              isDropped ? <s> Added </s> : name
            }
          </li>
        </ul>
      </div>
    )
  }
}

Draggable.propTypes = {
  connectDragSource: PropTypes.func.isRequired,
  connectDragPreview: PropTypes.func.isRequired,
  isDragging: PropTypes.bool.isRequired,
  isDropped: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
}

const styles = {
  wrapper: {
    width: 250,
    float: 'left',
    marginRight: 50,
    marginTop: 40
  },
  itemStyle: {
    height: 60,
    backgroundColor: '#fff',
    padding: 15,
    fontSize: 20,
    marginBottom: 10,
    cursor: 'move',
  },
  itemDragStyle: {
    height: 60,
    backgroundColor: '#fff',
    padding: 15,
    fontSize: 20,
    marginBottom: 10,
    opacity: 0.1,
    cursor: 'move',
    WebkitBoxShadow: '0px 0px 4px 1px rgba(0,0,0,0.5)'
  }
}

export default DragSource(props => props.type, itemSource, collect)(Draggable)
