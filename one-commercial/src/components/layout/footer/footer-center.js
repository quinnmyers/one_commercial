import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'

//styles
import './footer-center.sass'

const FooterCenter = ({ address, phone, logo, email }) => (
  <div>
    <div className="footer__center">
      <div className="footer__center__logo">
        {/* <Img src={logo} /> */}
        <img src={logo} alt="One Commercial Logo" />
      </div>
      <div className="footer__center__info">
        <div className="footer__center__info__item">
          <h6>Address</h6>
          <div dangerouslySetInnerHTML={{ __html: address }} />
        </div>
        <div className="footer__center__info__item">
          <h6>Phone</h6>
          <p>{phone}</p>
        </div>
        <div className="footer__center__info__item">
          <h6>Email</h6>
          <p>{email}</p>
        </div>
      </div>
    </div>
  </div>
)

FooterCenter.propTypes = {
  address: PropTypes.string,
  phone: PropTypes.string,
  logo: PropTypes.string,
  email: PropTypes.string,
}

export default FooterCenter
