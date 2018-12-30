import React from 'react'
import style from "./contactForm.module.sass"
class ContactForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
        this.selectRef = React.createRef()
    }
    componentDidMount() {
        console.log(this.selectRef.current);
        console.log(this.props);


        this.selectRef.current.value = this.props.contactFrom
    }

    render() {
        return (
            <form action="https://formspree.io/your@email.com" method="POST" className={style.wraper}>
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
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" placeholder="Your Name..." />
                <label htmlFor="phone">Phone</label>
                <input type="text" id="phone" placeholder="Your Phone Number..." />
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="_replyto" placeholder="Your Email..." />
                <label htmlFor="message">Message</label>
                <textarea name="" id="message" cols="30" rows="10" placeholder="Enter Your Message..."></textarea>
                <input type="submit" value="Send Message" />
            </form>
        );
    }
}

export default ContactForm;