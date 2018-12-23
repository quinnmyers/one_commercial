import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'

import '../styles/home/testimonials.sass'

const TestimonialCard = ({ testimonial, photo, name, title, company }) => (
  <div className="testimonials__container__card">
    <div className="testimonials__container__card__line" />
    <div className="testimonials__container__card__content">
      <div className="testimonials__container__card__content__text">
        <p>{testimonial}</p>
      </div>
      <div className="testimonials__container__card__content__person">
        <div className="testimonials__container__card__content__person__headshot">
          <Img
            fluid={photo}
            className="person--headshot"
            alt={`headshot of ${name}`}
          />
        </div>
        <div className="testimonials__container__card__content__person__info">
          <div className="testimonials__container__card__content__person__info__name">
            <h6>{name}</h6>
          </div>
          <div className="testimonials__container__card__content__person__info__title">
            <p>{`${title}, ${company}`}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
)

TestimonialCard.propTypes = {
  testimonial: PropTypes.string.isRequired,
  photo: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
}
export default TestimonialCard
