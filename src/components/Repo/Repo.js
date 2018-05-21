import './repo.scss'

import React from 'react'
import PropTypes from 'prop-types'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'

const Repo = ({
  description,
  html_url: url,
  forks_count: forks,
  name,
  open_issues_count: bugs,
  stargazers_count: starred,
  watchers_count: watchers
}) => (
  <section styleName='repo'>
    <header>
      <h1>
        <a href={url}>{name}</a>
      </h1>
      <div styleName='aside'>
        <span>
          <FontAwesomeIcon icon='star' /> ({ starred })
        </span>
        <span>
          <FontAwesomeIcon icon='code-branch' /> ({ forks })
        </span>
        <span>
          <FontAwesomeIcon icon='binoculars' /> ({ watchers })
        </span>
        <span>
          <FontAwesomeIcon icon='bug' /> ({ bugs })
        </span>
      </div>
    </header>
    <p>{description}</p>
  </section>
)
Repo.propTypes = {
  description: PropTypes.string.isRequired,
  html_url: PropTypes.string.isRequired,
  forks_count: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  open_issues_count: PropTypes.number.isRequired,
  stargazers_count: PropTypes.number.isRequired,
  watchers_count: PropTypes.number.isRequired
}

export default Repo
