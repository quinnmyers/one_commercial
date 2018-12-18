import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Content from '../content.js'

import ServiceCard from './servicecard.js'

import '../styles/home/servicecards.sass'

class ServiceCards extends Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     serviceCards: [
  //       {
  //         name: 'Listings',
  //         icon: 'http://placehold.it/60x60',
  //         alt: 'test alt text',
  //         link: '/listings/',
  //         description:
  //           'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit iure vel iste accusamus, voluptatibus vero, perspiciatis quasi cupiditate eos mollitia dolor quam fugiat tempora nam unde quaerat autem repudiandae ducimus?',
  //       },
  //       {
  //         name: 'Property Management',
  //         icon: 'http://placehold.it/60x60',
  //         alt: 'test alt text',
  //         link: '/listings/',
  //         description:
  //           'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit iure vel iste accusamus, voluptatibus vero, perspiciatis quasi cupiditate eos mollitia dolor quam fugiat tempora nam unde quaerat autem repudiandae ducimus?',
  //       },
  //       {
  //         name: 'Development Services',
  //         icon: 'http://placehold.it/60x60',
  //         alt: 'test alt text',
  //         link: '/listings/',
  //         description:
  //           'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit iure vel iste accusamus, voluptatibus vero, perspiciatis quasi cupiditate eos mollitia dolor quam fugiat tempora nam unde quaerat autem repudiandae ducimus?',
  //       },
  //       {
  //         name: 'Investment Solutions',
  //         icon: 'http://placehold.it/60x60',
  //         alt: 'test alt text',
  //         link: '/listings/',
  //         description:
  //           'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit iure vel iste accusamus, voluptatibus vero, perspiciatis quasi cupiditate eos mollitia dolor quam fugiat tempora nam unde quaerat autem repudiandae ducimus?',
  //       },
  //     ],
  //   }
  // }
  componentDidMount() {
    console.log(this.props.serviceCards)
  }
  render() {
    // const { serviceCards } = this.props
    // const serviceCardAsset = data.contentfulHomePage
    return (
      <Content>
        <div className="service__cards">
          <div className="service__cards__container">
            {/* <p>{serviceCardAssets.serviceCards.title}</p> */}
            {this.props.serviceCards.map(service => (
              <ServiceCard
                key={service.id}
                name={service.title}
                icon={service.cardIcon.fluid}
                alt={service.iconDescription}
                // link={service.link}
                description={service.cardDescription.internal.content}
              />
              // <h2>{serviceCard.name}</h2>
            ))}
          </div>
        </div>
      </Content>
    )
  }
}

ServiceCards.propTypes = {
  serviceCards: PropTypes.array.isRequired,
}

export default ServiceCards
