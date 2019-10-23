// @flow

import React from 'react'
import '../global.css'
import './styles.css'
import { StaticQuery, graphql } from 'gatsby'
import type { FooterTypes } from '../../types.js'

type Props = {
  data: FooterTypes,
}

const Footer = ({ data }: Props) => {
  const { contentfulFooter } = data
  const { id } = contentfulFooter

  const jsx = (
    <footer className="Footer">
      <p>Footer: {id}</p>
    </footer>
  )
  return jsx
}

export const query = graphql`
  {
    contentfulFooter {
      id
    }
  }
`

const Static = () => (
  <StaticQuery query={query} render={data => <Footer data={data}></Footer>} />
)

export default Static
