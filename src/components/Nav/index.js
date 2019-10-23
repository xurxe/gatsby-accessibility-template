// @flow

import React, { useState, useEffect } from 'react'
import '../global.css'
import './styles.css'
import { StaticQuery, graphql, Link } from 'gatsby'
import ReactResizeDetector from 'react-resize-detector'
import type { NavTypes } from '../../types.js'

type Props = {
  data: NavTypes,
}

const Nav = ({ data }: Props) => {
  const { contentfulNavigationBar, allContentfulPage } = data
  console.log(data)
  const { id } = contentfulNavigationBar
  let desktop = useState(true)
  let closed = useState(true)
  let classNameNav = useState('Nav Nav___desktop')

  const renderDesktop = () => {
    desktop = true
    closed = true
    classNameNav = 'Nav Nav___desktop'
  }

  const renderClosed = () => {
    desktop = false
    closed = true
    classNameNav = 'Nav Nav___closed'
  }

  const renderOpen = () => {
    desktop = false
    closed = false
    classNameNav = 'Nav Nav___open'
  }

  useEffect(() => {
    if (window.matchMedia('(max-width: 600px)').matches) {
      renderClosed()
    } else {
      renderDesktop()
    }
  })

  const handleWindowResize = () => {
    if (desktop && window.matchMedia('(max-width: 600px)').matches) {
      renderClosed()
    } else if (!desktop && !window.matchMedia('(max-width: 600px)').matches) {
      renderDesktop()
    }
  }

  const handleClick = () => {
    if (!desktop && closed) {
      renderOpen()
    } else if (!desktop && !closed) {
      renderClosed()
    }
  }

  const jsx = (
    <ReactResizeDetector
      handleWidth
      onResize={handleWindowResize}
      refreshMode="throttle"
      refreshRate={100}
    >
      <nav className={classNameNav}>
        <button
          className="Nav_button hvr-outline-out___nav"
          onClick={handleClick}
          type="button"
        >
          Button
        </button>
        <ol>
          <li>
            <Link to="/">Home</Link>
          </li>
          {allContentfulPage.edges.map(page => (
            <li>
              <Link key={page.node.id} to={page.node.slug}>
                {page.node.slug}
              </Link>
            </li>
          ))}
        </ol>
        Navigation: {id}
      </nav>
    </ReactResizeDetector>
  )
  return jsx
}

export const query = graphql`
  {
    contentfulNavigationBar {
      id
    }
    allContentfulPage {
      edges {
        node {
          id
          slug
        }
      }
    }
  }
`

const Static = () => (
  <StaticQuery query={query} render={data => <Nav data={data}></Nav>} />
)

export default Static
