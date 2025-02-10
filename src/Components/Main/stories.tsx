import React from 'react'
import { Meta, StoryFn } from '@storybook/react'
import Main from './index'

const meta: Meta<typeof Main> = {
  title: 'Main',
  component: Main,
}

export default meta

const Template: StoryFn<typeof Main> = (args) => <Main {...args} />

export const Default = Template.bind({})
Default.args = {
  title: 'Título do Storybook', // Aqui estamos passando a prop title
}
