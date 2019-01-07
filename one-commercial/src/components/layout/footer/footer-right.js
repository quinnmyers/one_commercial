import React from 'react'
import { Link } from 'gatsby'

//styles
import './footer-right.sass'

const FooterRight = () => (
  <div className="footer__right">
    <div className="footer__right__content">
      <ul className="footer__right__content__list">
        <li className="footer__right__content__list__item">
          <Link to="/">
            <h6 className="footer__right__content__list__item__main">Home</h6>
          </Link>
        </li>
        <li className="footer__right__content__list__item">
          <Link to="/saleindex/">
            <h6 className="footer__right__content__list__item__main">
              Listings
            </h6>
          </Link>
          <Link to="/leaseindex/">
            <p className="footer__right__content__list__item__sub">For Lease</p>
          </Link>
          <Link to="/saleindex/">
            <p className="footer__right__content__list__item__sub">For Sale</p>
          </Link>
          {/* <Link> <p className="footer__right__content__list__item__sub">For Sold</p></Link> */}
        </li>
        <li className="footer__right__content__list__item">
          <Link to="/services/">
            <h6 className="footer__right__content__list__item__main">
              Services
            </h6>
          </Link>
          <Link to="/services/" state={{ toID: 'Listing_Services' }}>
            <p className="footer__right__content__list__item__sub">
              Listing Services
            </p>
          </Link>
          <Link to="/services/" state={{ toID: 'Property_Management' }}>
            <p className="footer__right__content__list__item__sub">
              Property Management
            </p>
          </Link>
          <Link to="/services/" state={{ toID: 'Development_Services' }}>
            <p className="footer__right__content__list__item__sub">
              Development Services
            </p>
          </Link>
          <Link to="/services/" state={{ toID: 'Investment_Solutions' }}>
            <p className="footer__right__content__list__item__sub">
              Investment Solutions
            </p>
          </Link>
        </li>
        <li className="footer__right__content__list__item">
          <Link to="/about/">
            <h6 className="footer__right__content__list__item__main">About</h6>
          </Link>
        </li>
        <li className="footer__right__content__list__item">
          <Link to="/contact/">
            <h6 className="footer__right__content__list__item__main">
              Contact
            </h6>
          </Link>
        </li>
      </ul>
    </div>
  </div>
)

export default FooterRight

{
  /* <Link
                  to={navitem === 'Home' ? `/` : `/${navitem.toLowerCase()}/`}
                  key={index}
                  activeClassName="active"
                  onClick={this.handleClick.bind(this)}
                >
                  {navitem}
                </Link> */
}
