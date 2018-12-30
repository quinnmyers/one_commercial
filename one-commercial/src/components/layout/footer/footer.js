import React, { Component } from 'react'

//components
import FooterLeft from './footer-left'
import FooterCenter from './footer-center'
import FooterRight from './footer-right'
// import Content from '../../content'
import PropTypes from 'prop-types'

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
      <div className="footer">
        <div className="footer__container">
          <div className="footer__container__left">
            <FooterLeft socialMedia={this.props.socialMedia} />
          </div>
          <div className="footer__container__center">
            <FooterCenter
              address={this.props.address}
              phone={this.props.phone}
              logo={this.props.logo}
              email={this.props.email}
            />
          </div>
          <div className="footer__container__right">
            <FooterRight />
          </div>
        </div>
      </div>
    )
  }
}

Footer.propTypes = {
  address: PropTypes.string,
  phone: PropTypes.string,
  logo: PropTypes.string,
  email: PropTypes.string,
}

export default Footer
