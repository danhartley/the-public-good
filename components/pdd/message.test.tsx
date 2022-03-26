// NOTE: jest-dom adds handy assertions to Jest and it is recommended, but not required.
import '@testing-library/jest-dom'

import {h} from 'preact'
import {render, fireEvent} from '@testing-library/preact'

import HiddenMessage from './message'

test('shows the children when the checkbox is checked', () => {
  const testMessage = 'Test Message'

  const {queryByText, getByLabelText, getByText} = render(
    <HiddenMessage>{testMessage}</HiddenMessage>,
  )

  // query* functions will return the element or null if it cannot be found.
  // get* functions will return the element or throw an error if it cannot be found.
  expect(queryByText(testMessage)).toBeNull()

  // The queries can accept a regex to make your selectors more resilient to content tweaks and changes.
  fireEvent.click(getByLabelText(/show/i))

  // .toBeInTheDocument() is an assertion that comes from jest-dom.
  // Otherwise you could use .toBeDefined().
//   expect(getByText(testMessage)).toBeInTheDocument()
})