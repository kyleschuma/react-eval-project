import React from 'react'
import PropTypes from 'prop-types'
import { PieChart } from 'react-d3-components'
import withWidthHeight from '../withWidthHeight'

const EVENT_LABELS = {
  CreateEvent: 'Create',
  DeleteEvent: 'Delete',
  ForkEvent: 'Fork',
  GollumEvent: 'Gollum',
  IssueCommentEvent: 'Issue Comment',
  IssuesEvent: 'Issue',
  PullRequestEvent: 'Pull',
  PullRequestReviewCommentEvent: 'Reviewed',
  PushEvent: 'Push',
  ReleaseEvent: 'Release',
  WatchEvent: 'Watch'
}

const Events = withWidthHeight(({events, width, height}) => {
  if (events.length === 0) {
    return null
  }

  const counts = events.reduce((accr, {type}) => {
    if (accr[type] === undefined) {
      accr[type] = 0
    }
    accr[type]++
    return accr
  }, [])

  const data = {
    values: Object.keys(counts).map(type => ({
      x: EVENT_LABELS[type],
      y: counts[type]
    }))
  }

  return (
    <section>
      <h3>Events</h3>
      <PieChart
        data={data}
        width={width}
        height={width}
        margins={{ left: 0, top: 0, right: 0, bottom: 0 }}
        hideLabels
        tooltipHtml={(type, count) => `${type} (${count})`} />
    </section>
  )
})
Events.propTypes = {
  events: PropTypes.array.isRequired
}

export default Events
