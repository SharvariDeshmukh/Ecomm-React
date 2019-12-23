import React from 'react'

import {Link} from 'gatsby'
import Heading from './Heading'
export default function Dualinfoblock({heading, Imgsrc}) {
    return (
        <section className="my-4 py-4 bg-theme">
            <div className="container">
                <Heading title={heading}></Heading>
                <div className="row">
                    <div className="col-8 mx-auto">
                        <p className="lead text-white mb-5">
                            Lorem50 
                            aenean euismod elementum nisi quis eleifend quam adipiscing vitae proin sagittis 
                            nisl rhoncus mattis rhoncus urna neque viverra justo nec ultrices dui sapien eget 
                            mi proin sed libero enim sed faucibus turpis in eu mi bibendum neque egestas congue 
                            quisque egestas diam in arcu cursus euismod quis viverra nibh cras pulvinar mattis 
                            nunc sed blandit libero volutpat sed cras ornare arcu dui vivamus arcu felis bibendum 
                            ut tristique et egestas quis ipsum suspendisse ultrices gravida dictum fusce ut placerat
                            orci nulla pellentesque dignissim enim sit amet venenatis urna cursus eget nunc scelerisque
                            Some quick example text to build on the card title and make up the bulk of the card's content.
                            Some quick example text to build on the card title and make up the bulk of the card's content.
                            Some quick example text to build on the card title and make up the 
                        </p>
                    </div>
                    <div className="col-4">
                        <div className="card bg-dark">
                            <img src={Imgsrc} className="card-img-top" alt={heading}/>
                            <div className="card-body">
                                <h5 className="card-title text-white">Just click Photos</h5>
                                <p className="card-text text-white">
                                    Some quick example text to build on the card title and make up the bulk of the card's content.
                                   bulk of the card's content.
                                </p>
                                <Link to="/about/" className="btn btn-warning btn-block">
                                    {heading}
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
