import './app.scss'

import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {withRouter} from 'react-router-dom'

import Profile from 'components/Profile'
import Repo from 'components/Repo'
import {getUser} from 'actions/userActions'
import {getRepos} from 'actions/reposActions'
import {getEvents} from 'actions/eventsActions'
import Events from '../../components/Events'

const mapStateToProps = ({user, repos, events}) => ({user, repos, events})
const mapDispatchToProps = dispatch => (bindActionCreators({
  getEvents,
  getRepos,
  getUser
}, dispatch))

@withRouter
@connect(mapStateToProps, mapDispatchToProps)
export default class App extends Component {
  static propTypes = {
    events: PropTypes.array.isRequired,
    repos: PropTypes.array.isRequired,
    user: PropTypes.object.isRequired,
    getEvents: PropTypes.func.isRequired,
    getRepos: PropTypes.func.isRequired,
    getUser: PropTypes.func.isRequired
  }

  componentDidMount () {
    const {getUser, getRepos, getEvents} = this.props

    getUser()
    getRepos()
    getEvents()
  }
  render () {
    const {user, repos, events} = this.props
    return (
      <div styleName='app'>
        <aside>
          <Profile user={user} />
          <Events events={events} />
        </aside>
        <main>
          {repos.map((repo, key) =>
            <Repo key={key} {...repo} />
          )}
        </main>
      </div>
    )
  }
}
