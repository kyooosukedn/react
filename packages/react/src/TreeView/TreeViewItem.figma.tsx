import React from 'react'
import {TreeView} from './TreeView'
import figma from '@figma/code-connect'

/**
 * -- This file was auto-generated by `figma connect create` --
 * `props` includes a mapping from Figma properties and variants to
 * suggested values. You should update this to match the props of your
 * code component, and update the `example` function to return the
 * code example you'd like to see in Figma
 */

figma.connect(
  TreeView,
  'https://www.figma.com/design/GCvY3Qv8czRgZgvl1dG6lp/Primer-Web?node-id=35020-46073&t=NJEhZBWKMz4wkvh0-4',
  {
    props: {
      item: figma.nestedProps('Type', {
        current: figma.enum('state', {
          active: true,
        }),
        expanded: figma.boolean('expanded'),
        label: figma.textContent('label'),
        leadingVisual: figma.boolean('leadingVisual?', {
          true: <TreeView.DirectoryIcon />,
          false: undefined,
        }),
        trailingVisual: figma.boolean('trailingVisual?', {
          true: figma.instance('trailingVisual'),
          false: undefined,
        }),
      }),
    },
    variant: {Type: 'Parent'},
    example: ({item}) => (
      <TreeView.Item current={item.current} expanded={item.expanded} id="...">
        {item.leadingVisual}
        {item.label}
        <TreeView.TrailingVisual>{item.trailingVisual}</TreeView.TrailingVisual>
      </TreeView.Item>
    ),
  },
)

figma.connect(
  TreeView,
  'https://www.figma.com/design/GCvY3Qv8czRgZgvl1dG6lp/Primer-Web?node-id=35020-46073&t=NJEhZBWKMz4wkvh0-4',
  {
    props: {
      item: figma.nestedProps('Type', {
        current: figma.enum('state', {
          active: true,
        }),
        label: figma.textContent('label'),
        leadingVisual: figma.boolean('leadingVisual?', {
          true: figma.instance('leadingVisual'),
          false: undefined,
        }),
        trailingVisual: figma.boolean('trailingVisual?', {
          true: figma.instance('trailingVisual'),
          false: undefined,
        }),
      }),
    },
    variant: {Type: 'Item'},
    example: ({item}) => (
      <TreeView.Item current={item.current} id="...">
        <TreeView.LeadingVisual>{item.leadingVisual}</TreeView.LeadingVisual>
        {item.label}
        <TreeView.TrailingVisual>{item.trailingVisual}</TreeView.TrailingVisual>
      </TreeView.Item>
    ),
  },
)