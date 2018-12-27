import React, { Component } from 'react'
import Layout from '../components/layout'

//components
import Button from '../components/general/button/button'

class About extends Component {
  render() {
    return (
      <Layout>
        <p>this is the about page</p>
        <Button text="testing" link="contact" internal={true} />
      </Layout>
    )
  }
}

export default About
