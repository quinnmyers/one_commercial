import React from 'react'
import PropTypes from 'prop-types'

//components
import Content from '../../content'
import ButtonRound from '../../buttonRound/buttonRound'

//styles
import './listingindexhero.sass'

class ListingIndexHero extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loaded: false,
    }
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        loaded: true,
      })
    }, 100)
    setTimeout(() => {
      this.setState({
        secondLoaded: true,
      })
    }, 650)
  }
  render() {
    return (
      <div
        className="listing__index__hero"
        style={{
          backgroundImage: `url("${this.props.bgImage}")`,
          color: this.props.color,
        }}
      >
        <Content>
          <div className="listing__index__hero__content">
            <div
              className={`listing__index__hero__content__top ${
                this.state.loaded ? 'loaded' : ''
              }`}
            >
              <h2>{this.props.header}</h2>
              {this.state.innerhtml === false ? (
                <p>{this.props.content}</p>
              ) : (
                <div dangerouslySetInnerHTML={{ __html: this.props.content }} />
              )}
            </div>
            <div
              className={`listing__index__hero__content__bottom ${
                this.state.secondLoaded ? 'loaded' : ''
              }`}
            >
              <h3>{this.props.subHeader}</h3>
              <ButtonRound
                action={this.props.buttonLink}
                type="gatsbylink"
                innerText={this.props.buttonText}
                color={this.props.color}
                pos="left"
              />
            </div>
          </div>
        </Content>
      </div>
    )
  }
}

export default ListingIndexHero

//add is required here later
ListingIndexHero.propTypes = {
  bgImage: PropTypes.string,
  header: PropTypes.string,
  content: PropTypes.string,
  subHeader: PropTypes.string,
  buttonText: PropTypes.string,
  buttonLink: PropTypes.string,
}

//this was the OG component prior to switching is to class based to add state for load-ins
// const ListingIndexHero = ({
//   bgImage,
//   header,
//   content,
//   subHeader,
//   buttonText,
//   buttonLink,
//   color = 'white',
//   innerhtml = false,
// }) => (
//   <div
//     className="listing__index__hero"
//     style={{ backgroundImage: `url("${bgImage}")`, color: color }}
//   >
//     <Content>
//       <div className="listing__index__hero__content">
//         <div className="listing__index__hero__content__top">
//           <h2>{header}</h2>
//           {innerhtml === false ? (
//             <p>{content}</p>
//           ) : (
//             <div dangerouslySetInnerHTML={{ __html: content }} />
//           )}
//         </div>
//         <div className="listing__index__hero__content__bottom">
//           <h3>{subHeader}</h3>
//           <ButtonRound
//             action={buttonLink}
//             type="gatsbylink"
//             innerText={buttonText}
//             color={color}
//             pos="left"
//           />
//         </div>
//       </div>
//     </Content>
//   </div>
// )
