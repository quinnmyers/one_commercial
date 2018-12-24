import React from 'react'
import { Link } from 'gatsby'

//styles
import '../../styles/layout/footer/footer-right.sass'

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
          <Link to="/listings/">
            <h6 className="footer__right__content__list__item__main">
              Listings
            </h6>
          </Link>

          <p className="footer__right__content__list__item__sub">For Lease</p>
          <p className="footer__right__content__list__item__sub">For Sale</p>
          <p className="footer__right__content__list__item__sub">For Sold</p>
        </li>
        <li className="footer__right__content__list__item">
          <Link to="/services/">
            <h6 className="footer__right__content__list__item__main">
              Services
            </h6>
          </Link>

          <p className="footer__right__content__list__item__sub">
            Listing Services
          </p>
          <p className="footer__right__content__list__item__sub">
            Property Management
          </p>
          <p className="footer__right__content__list__item__sub">
            Development Services
          </p>
          <p className="footer__right__content__list__item__sub">
            Investment Strategy
          </p>
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
