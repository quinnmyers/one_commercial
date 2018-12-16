import React from 'react'

import Content from '../content.js'

import ServiceCard from './servicecard.js'

import '../styles/home/servicecards.sass'

class ServiceCards extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      serviceCards: [
        {
          name: 'Listings',
          icon: 'http://placehold.it/60x60',
          alt: 'test alt text',
          link: '/listings/',
          description:
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit iure vel iste accusamus, voluptatibus vero, perspiciatis quasi cupiditate eos mollitia dolor quam fugiat tempora nam unde quaerat autem repudiandae ducimus?',
        },
        {
          name: 'Property Management',
          icon: 'http://placehold.it/60x60',
          alt: 'test alt text',
          link: '/listings/',
          description:
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit iure vel iste accusamus, voluptatibus vero, perspiciatis quasi cupiditate eos mollitia dolor quam fugiat tempora nam unde quaerat autem repudiandae ducimus?',
        },
        {
          name: 'Development Services',
          icon: 'http://placehold.it/60x60',
          alt: 'test alt text',
          link: '/listings/',
          description:
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit iure vel iste accusamus, voluptatibus vero, perspiciatis quasi cupiditate eos mollitia dolor quam fugiat tempora nam unde quaerat autem repudiandae ducimus?',
        },
        {
          name: 'Investment Solutions',
          icon: 'http://placehold.it/60x60',
          alt: 'test alt text',
          link: '/listings/',
          description:
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit iure vel iste accusamus, voluptatibus vero, perspiciatis quasi cupiditate eos mollitia dolor quam fugiat tempora nam unde quaerat autem repudiandae ducimus?',
        },
      ],
    }
  }
  render() {
    return (
      <Content>
        <div className="service__cards">
          <div className="service__cards__container" />
          {this.state.serviceCards.map(serviceCard => (
            <ServiceCard
              name={serviceCard.name}
              icon={serviceCard.icon}
              alt={serviceCard.alt}
              link={serviceCard.link}
              description={serviceCard.description}
            />
            // <h2>{serviceCard.name}</h2>
          ))}
        </div>
      </Content>
    )
  }
}

export default ServiceCards
