import React, { Component } from 'react'

//components
import FooterLeft from './footer-left'
import FooterCenter from './footer-center'
import FooterRight from './footer-right'
// import Content from '../../content'

//styles
import '../../styles/layout/footer/footer.sass'

class Footer extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  // setAddress() {
  //   return {__html: }
  // }
  render() {
    return (
      <div className="footer__container">
        <p>{this.props.phoneNumber}</p>
        <p dangerouslySetInnerHTML={{ __html: this.props.address }} />
        <div className="footer__container__left">
          <FooterLeft />
        </div>
        <div className="footer__container__left">
          <FooterCenter />
        </div>
        <div className="footer__container__left">
          <FooterRight />
        </div>
      </div>
    )
  }
}

export default Footer
