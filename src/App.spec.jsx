import React from 'react'
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import App from './App.jsx'

describe('App', () => {
  it('should mount App component', () => {
    const component = render(
      <App />,
    )
    const { asFragment } = component
    expect(asFragment).toMatchSnapshot()
  })

  it('should increment count', () => {
    // Given
    const component = render(
      <App />,
    )
    const button = component.getByText(/count is: 0/i)

    // When
    userEvent.click(button)

    // Then
    expect(button.innerHTML).toContain('count is: 1')
  })
})
