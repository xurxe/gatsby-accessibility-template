import React from 'react'

import { storiesOf } from '@storybook/react'
import Header from '..'

const data1 = {
  id: '123',
}

const data2 = {
  id: 'abc',
}

storiesOf('Header', module)
  .add('Version 1', () => <Header data={data1} />)
  .add('Version 2', () => <Header data={data2} />)
