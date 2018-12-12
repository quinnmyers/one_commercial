import React from 'react'

export default ({ children }) => (
  <div className="page__container__content">{children}</div>
)

//this is just a component that sets styled boundaries for "content"
//anything wrapped in this is styled by the main.sass file for general
//page layout, anything not wrapped in it is by default full width
