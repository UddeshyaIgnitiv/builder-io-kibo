import React from 'react'

import { ComponentStory, ComponentMeta } from '@storybook/react'

import { ProductDataMock } from '../../../__mocks__/stories/ProductDataMock'
import ProductDetailTemplate from './ProductDetailTemplate'
import type { ProductCustom } from '@/lib/types'

export default {
  title: 'Page Templates/Product Detail',
  component: ProductDetailTemplate,
} as ComponentMeta<typeof ProductDetailTemplate>

const Template: ComponentStory<typeof ProductDetailTemplate> = (args) => (
  <ProductDetailTemplate {...args} />
)

export const Common = Template.bind({})
Common.args = {
  product: ProductDataMock as unknown as ProductCustom,
  breadcrumbs: [
    {
      text: 'Home',
      link: '/',
    },
  ],
}

export const Mobile = Template.bind({})
Mobile.args = {
  product: ProductDataMock as unknown as ProductCustom,
}
Mobile.parameters = {
  viewport: {
    defaultViewport: 'iphone12promax',
  },
}