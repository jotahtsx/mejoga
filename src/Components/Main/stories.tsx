import React from 'react'
import { Meta, StoryFn } from '@storybook/react'
import Main from './index'

const meta: Meta<typeof Main> = {
  title: 'Main',
  component: Main,
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta

const Template: StoryFn<typeof Main> = () => <Main />

export const Default = Template.bind({})
