import React, { Component } from 'react'
import Heading from '../reusable/Heading'
import Img from 'gatsby-image'


export default class Bundlecart extends Component {
    constructor(props){
        super(props)
        this.state={
            bundles: props.bundles.edges,
            mybundles : props.bundles.edges,
          

        }
    }

 
    render() {
        return (
            <section className="py-5">
                <div classname="container">
                    <Heading title="Bundles"/>
               
                    <div className="row">
                        {this.state.mybundles.map(({node})=>{
                            return(
                                <div
                                key = {node.id}
                                className = "col-11 col-md-6 d-flex mx-auto mb-2"
                                >
                                    <Img fixed={node.image.fixed}/>
                                    <div className="flex-grow-1 px-3">
                                        <div className="d-flex justify-content-between">
                                            <h6 className="mb-0">{node.title}</h6>
                                            <h6 className="mb-0 text-success ml-5">${node.price}</h6>
                                        </div>
                                        
                                        <button 
                                        data-item-id={node.id}
                                        data-item-name={node.title}
                                        data-item-price={node.price}
                                        data-item-url="https://lco-ecomm.netlify.com/"
                                       data-item-image={node.image.fixed.source}
                                       className="btn snipcart-add-item btn-warning"
                                        >Join Now</button>

                                    </div>
                                </div>
                            )
                        } 
                        )}
                    
                    </div>

                </div>
            </section>
        )
    }
}
