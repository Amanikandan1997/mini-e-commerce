import React, { Fragment } from 'react'

function Footer() {
  return (
  <Fragment>
    
    <footer className="py-1 bg-dark">
      <p className="text-center text-white mt-1 ">
      Mani Mart - 1997-{new Date().getFullYear()}, All Rights Reserved
      </p>
      <p>Manikandan amazon clone dummy api  used for demonstration purposes only. The actual data is not provided by this platform.</p>
    </footer>
  </Fragment>
  )
}

export default Footer