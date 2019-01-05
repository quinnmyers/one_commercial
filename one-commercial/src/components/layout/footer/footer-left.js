import React from 'react'

//styles
import './footer-left.sass'

const FooterLeft = ({ socialMedia }) => (
  <div className="footer__left">
    <div className="footer__left__container">
      <div className="footer__left__container__top">
        <h6>Contact Us Today For A Free Consultation</h6>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla, odio
          magnam. Sequi distinctio illum dicta doloribus excepturi reprehenderit
          officiis consectetur, nisi numquam! Assumenda adipisci aut sit
          inventore, id alias molestiae.
        </p>
        <p>Contact Button Goes Here</p>
      </div>
      <div className="footer__left__container__middle">
        <h6>Or Find Us Here</h6>
        <div className="footer__left__container__middle__socialmedia">
          <div className="footer__left__container__middle__socialmedia__container">
            {socialMedia.map(account => (
              <div
                className="footer__left__container__middle__socialmedia__container__account"
                key={account.id}
              >
                <a href={account.link} target="__blank">
                  <img
                    src={account.icon.file.url}
                    alt={`${account.name} logo`}
                  />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="footer__left__container__bottom">
        <h6>Sign Up For Our Mailing List</h6>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque eum
          sed ipsa ut illum et? Cum, quae tempora? Ex molestias neque eligendi
          at inventore ipsa laudantium ad nostrum pariatur. In?
        </p>
        <p>Sign Up Goes Here</p>
      </div>
    </div>
  </div>
)

export default FooterLeft
