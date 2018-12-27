// props
// icons : {site: "linkedin", icon:"url"}

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
                    link: `https://www.facebook.com/sharer/sharer.php?u${window.location.href.substr(8)}`,
                    icon: element.icon
                })
            } else if (element.site === "twitter") {
                tempArray.push({
                    link: `https://twitter.com/intent/tweet?url=test&text=check%20out%20this%20property%20from%20One%20Commercial%20${window.location.href}`,
                    icon: element.icon
                })
            } else if (element.site === "linkedin") {
                tempArray.push({
                    link: `http://www.linkedin.com/shareArticle?mini=true&url=test&title=check%20out%20this%20property%20from%20One%20Commercial%20${window.location.href}`
                })
            }
        });
        console.log(tempArray);
        this.setState({ ShareLinks: tempArray })

    }
    componentDidMount() {
        this.buildArray(this.props)
    }
    render() {
        return (<div className={style.wraper}>
            {this.state.ShareLinks.map((shareLink, i) => (
                <a key={i} href={shareLink.link}><img src={shareLink.icon} alt="" /></a>
            ))}
        </div>);
    }
}

export default shareLinkButtons;