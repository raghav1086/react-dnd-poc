import React, { Component, } from 'react'
import PropTypes from 'prop-types'
import { DragLayer } from 'react-dnd'

const layerStyles = {
  position: 'fixed',
  pointerEvents: 'none',
  zIndex: 100,
  left: 0,
  top: 0,
  width: '100%',
  height: '100%'
}

const styles = {
  WebkitBoxShadow: '0px 0px 4px 1px rgba(0,0,0,0.3)',
  height: 60,
  backgroundColor: '#fff',
  padding: 15,
  fontSize: 20,
  marginBottom: 10,
  opacity: 0.9,
  cursor: 'move',
  width: 250,
}

function getItemStyles(props) {
  const { currentOffset } = props
  if (!currentOffset) {
    return {
      display: 'none'
    }
  }

  const { x, y } = currentOffset
  const transform = `translate(${x}px, ${y}px)`
  return {
    transform: transform,
    WebkitTransform: transform
  }
}

class CustomDragLayer extends Component {

  render() {
    const { name, isDragging } = this.props
    if (!isDragging) {
      return null
    }

    return (
      <div style={layerStyles}>
        <div style={getItemStyles(this.props)}>
          <div style={styles}>{name}</div>
        </div>
      </div>
    )
  }
}

CustomDragLayer.propTypes = {
  item: PropTypes.object,
  itemType: PropTypes.string,
  currentOffset: PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired
  }),
  isDragging: PropTypes.bool.isRequired
}

function collect(monitor) {
  return {
    item: monitor.getItem(),
    itemType: monitor.getItemType(),
    currentOffset: monitor.getSourceClientOffset(),
    isDragging: monitor.isDragging()
  }
}

export default DragLayer(collect)(CustomDragLayer)
