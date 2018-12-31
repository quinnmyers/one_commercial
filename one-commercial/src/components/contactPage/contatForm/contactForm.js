import React from 'react'
import style from "./contactForm.module.sass"
class ContactForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
        this.selectRef = React.createRef()
        this.focusHandler = this.focusHandler.bind(this)
        this.blurHandler = this.blurHandler.bind(this)
    }
    focusHandler(e) {
        e.persist()
        const oldPlaceholder = e.target.placeholder
        e.target.placeholder = ""
        this.setState({ oldPlaceholder: oldPlaceholder })
    }
    blurHandler(e) {
        e.persist()
        if (e.target.value === "") {
            e.target.placeholder = this.state.oldPlaceholder
        }
    }
    componentDidMount() {
        this.selectRef.current.value = this.props.contactFrom
    }

    render() {
        return (
            <form action={`https://formspree.io/${this.props.email}`} method="POST" className={style.wraper}>
                <div className={style.inputblock}>
                    <label htmlFor="listings">Which property are you interested in?</label>
                    <select ref={this.selectRef} id="listings">
                        <option disabled value>Please select one</option>
                        {this.props.listings.map((link, index) => (

                            <option
                                value={link.name} key={index}>
                                {link.name}

                            </option>
                        ))}

                    </select>
                </div>
                <div className={style.inputblock}>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" id="name" placeholder="Your Name..." onFocus={this.focusHandler} onBlur={this.blurHandler} />
                </div>
                <div className={style.inputblock}>
                    <label htmlFor="phone">Phone</label>
                    <input type="text" id="phone" placeholder="Your Phone Number..." onFocus={this.focusHandler} onBlur={this.blurHandler} />
                </div>
                <div className={style.inputblock}>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="_replyto" placeholder="Your Email..." onFocus={this.focusHandler} onBlur={this.blurHandler} />
                </div>
                <div className={style.inputblock}>
                    <label htmlFor="message">Message</label>
                    <textarea name="" id="message" cols="30" rows="6" placeholder="Enter Your Message..." onFocus={this.focusHandler} onBlur={this.blurHandler}></textarea>
                </div>
                <div className={style.inputsubmit}>
                    <input type="submit" value="Send Message" />
                </div>
            </form >
        );
    }
}

export default ContactForm;