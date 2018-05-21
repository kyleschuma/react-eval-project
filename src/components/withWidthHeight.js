import React from 'react'
import DOM from 'react-dom'

export default WrappedComponent => class extends React.Component {
  constructor (props) {
    super(props)

    this.state = { width: 0, height: 0 }

    this._setRef = this._setRef.bind(this)
  }

  _setRef (el) {
    this._el = el
  }

  componentDidMount () {
    const {offsetWidth: width, offsetHeight: height} = DOM.findDOMNode(this._el)
    console.log(width, height)
    this.setState({width, height})
  }
  render () {
    return (
      <div ref={this._setRef} >
        <WrappedComponent {...this.state} {...this.props} />
      </div>
    )
  }
}
