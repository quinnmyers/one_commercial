import React, { Component } from 'react'
import PropTypes, { string } from 'prop-types'

//components
import Content from '../../content'

//styles
import './signupcta.sass'

class SignUpCta extends Component {
  render() {
    return (
      <div className="signupcta">
        <Content>
          <div className="signupcta__container">
            <div className="signupcta__container__logo">
              <img src={this.props.logo} alt="One Commercial Logo" />
            </div>
            <div className="signupcta__container__text">
              <p>{this.props.text}</p>
              <div className="signupcta__container__text__input">
                {/* Begin Mailchimp Signup Form */}
                <link
                  href="//cdn-images.mailchimp.com/embedcode/horizontal-slim-10_7.css"
                  rel="stylesheet"
                  type="text/css"
                />
                <style
                  type="text/css"
                  dangerouslySetInnerHTML={{
                    __html:
                      '\n\t#mc_embed_signup{ clear:left; font:14px Helvetica,Arial,sans-serif; width:100%;}\n\t/* Add your own Mailchimp form style overrides in your site stylesheet or in this style block.\n\t   We recommend moving this block and the preceding CSS link to the HEAD of your HTML file. */\n',
                  }}
                />
                <div id="mc_embed_signup">
                  <form
                    action="https://oneclv.us7.list-manage.com/subscribe/post?u=3e455fa09bcd3af7f1cad5709&id=5660a9d55a"
                    method="post"
                    id="mc-embedded-subscribe-form"
                    name="mc-embedded-subscribe-form"
                    className="validate"
                    target="_blank"
                    noValidate
                  >
                    <div id="mc_embed_signup_scroll">
                      <input
                        type="email"
                        defaultValue
                        name="EMAIL"
                        className="email"
                        id="mce-EMAIL"
                        placeholder="email address"
                        required
                      />
                      {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups*/}
                      <div
                        style={{ position: 'absolute', left: '-5000px' }}
                        aria-hidden="true"
                      >
                        <input
                          type="text"
                          name="b_3e455fa09bcd3af7f1cad5709_5660a9d55a"
                          tabIndex={-1}
                          defaultValue
                        />
                      </div>
                      <div className="clear">
                        <input
                          type="submit"
                          defaultValue="Subscribe"
                          name="subscribe"
                          id="mc-embedded-subscribe"
                          className="button"
                        />
                      </div>
                    </div>
                  </form>
                </div>
                {/*End mc_embed_signup*/}
              </div>
            </div>
          </div>
        </Content>
      </div>
    )
  }
}

SignUpCta.propTypes = {
  logo: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}

export default SignUpCta
