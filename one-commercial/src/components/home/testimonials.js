import React, { Component } from 'react'
import PropTypes from 'prop-types'
import TestimonialCard from './testimonialcard'
//styles
import '../styles/home/testimonials.sass'

class Testimonials extends Component {
  render() {
    return (
      <div className="testimonials">
        <div className="testimonials__container">
          {this.props.testimonials.map(testimonial => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial.testimonialParagraph.internal.content}
              photo={testimonial.personsPhoto.fluid}
              name={testimonial.personsName}
              title={testimonial.personsTitle}
              company={testimonial.personsCompany}
            />
          ))}
        </div>
      </div>
    )
  }
}

Testimonials.propTypes = {
  testimonials: PropTypes.array.isRequired,
}

export default Testimonials
