import './profile.scss'

import React from 'react'
import PropTypes from 'prop-types'

const Profile = ({ user }) => (
  <section styleName='profile'>
    <a href={user.html_url}>
      <img styleName='avatar' src={user.avatar_url} alt={user.name} />
    </a>
    <h1>{user.name}</h1>
    <h2>{user.login}</h2>
    <p>{user.bio}</p>
  </section>
)
Profile.propTypes = {
  user: PropTypes.object.isRequired
}

export default Profile
