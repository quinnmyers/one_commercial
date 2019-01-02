// props
// icons : {site: "linkedin", icon:"url"}
// url "url"
import twitterIcon from "../../../images/twitterIcon.svg"
import facebookIcon from "../../../images/facebookIcon.svg"
import linkedInIcon from "../../../images/linkedInIcon.svg"
import shareIcon from "../../../images/shareIcon.svg"
import React from 'react'
import style from './shareLinkButtons.module.sass'
class shareLinkButtons extends React.Component {
    constructor(props) {
        super(props);
        this.state = { ShareLinks: [] }
        this.buildArray = this.buildArray.bind(this)
    }
    buildArray(prop) {

        const tempArray = []
        prop.icons.forEach(element => {
            if (element.site === "facebook") {
                tempArray.push({
                    link: `https://www.facebook.com/sharer/sharer.php?u${prop.url.substr(8)}`,
                    icon: facebookIcon,
                    alt: "face book logo click to share to this site"
                })
            } else if (element.site === "twitter") {
                tempArray.push({
                    link: `https://twitter.com/intent/tweet?url=${prop.url}&text=check%20out%20this%20property%20from%20One%20Commercial%20`,
                    icon: twitterIcon,
                    alt: "Twitter logo click to share to this site"
                })
            } else if (element.site === "linkedin") {
                tempArray.push({
                    link: `http://www.linkedin.com/shareArticle?mini=true&url=${prop.url}&title=check%20out%20this%20property%20from%20One%20Commercial%20${prop.url}`,
                    icon: linkedInIcon,
                    alt: "linked in logo click to share to this site"
                })
            }
        });
        this.setState({ ShareLinks: tempArray })

    }
    componentDidMount() {
        this.buildArray(this.props)
        console.log("icon", twitterIcon);

    }
    render() {
        return (<div className={style.wraper}>
            <img src={shareIcon} width="24px" height="24px" alt="shareIcon" />
            {this.state.ShareLinks.map((shareLink, i) => (
                <a key={i} href={shareLink.link}><img src={shareLink.icon} width="24px" height="24px" alt={shareLink.alt} /></a>
            ))}
        </div>);
    }
}

export default shareLinkButtons;