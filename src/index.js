import React from 'react'
import ReactDOM from 'react-dom'
import ApplicationNode from './ApplicationNode'
import {unregister} from './services/registerServiceWorker'
import store from './services/store'

import fontawesome from '@fortawesome/fontawesome'
import icons from '@fortawesome/fontawesome-free-solid'

fontawesome.library.add(icons)

const render = (Component) => {
  ReactDOM.render(
    <Component store={store} />,
    document.getElementById('root')
  )
}

render(ApplicationNode)
unregister()

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('./ApplicationNode', () => {
    const NextApp = require('./ApplicationNode').default
    render(NextApp)
  })
}
