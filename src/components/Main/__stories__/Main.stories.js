import React from 'react'
import { storiesOf } from '@storybook/react'
import Main from '..'

const data1 = {
  id: '123',
}

const data2 = {
  id: 'abc',
}

storiesOf('Main', module)
  .add('Version 1', () => <Main data={data1} />)
  .add('Version 2', () => <Main data={data2} />)
