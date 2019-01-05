import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Content from '../content.js'
import TestimonialCard from './testimonialcard'
//styles
import './testimonials.sass'

class Testimonials extends Component {
  render() {
    return (
      <Content>
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
      </Content>
    )
  }
}

Testimonials.propTypes = {
  testimonials: PropTypes.array.isRequired,
}

export default Testimonials
