import React from 'react'
import PropTypes from 'prop-types'

//styles
import style from "./footerclone.module.sass"

const FooterClone = ({ address, phone, logo, email }) => (
    <div>
        <div className={style.footer__center}>
            <div className={style.footer__center__logo}>
                <img src={logo} alt="One Commercial Logo" />
            </div>
            <div className={style.footer__center__info}>
                <div className={style.footer__center__info__item}>
                    <h6>Address</h6>
                    <div dangerouslySetInnerHTML={{ __html: address }} />
                </div>
                <div className={style.footer__center__info__item}>
                    <h6>Phone</h6>
                    <p>{phone}</p>
                </div>
                <div className={style.footer__center__info__item}>
                    <h6>Email</h6>
                    <p>{email}</p>
                </div>
            </div>
        </div>
    </div>
)

FooterClone.propTypes = {
    address: PropTypes.string,
    phone: PropTypes.string,
    logo: PropTypes.string,
    email: PropTypes.string,
}

export default FooterClone
