import React from "react"

import "./itempage.styles.scss"
import { withRouter } from "react-router-dom"
import {SHOP_DATA_FLAT} from "../../dummy"
import ItemGallery from "../../components/single-item-gallery/single-item-gallery.component"

class ItemPage extends React.Component {
    constructor(){
        super()

        this.state = {
            item: {},
            loading: true
        }
    }

    componentDidMount(){
        const {itemId} = this.props.match.params;
        this.setState({
            item: SHOP_DATA_FLAT.find(el => el.id === parseInt(itemId))
        }, () => this.setState({loading:false}))
    }

    render(){
        if(this.state.loading) return null
        return(
            <div className="item-page">
                <ItemGallery gallery={this.state.item.gallery}/> 
                <div className="text-block">
                <h1>{this.state.item.name}</h1>
                <span className="price">{this.state.item.price}</span>
                </div>
            </div>)
    }
}

export default withRouter(ItemPage)