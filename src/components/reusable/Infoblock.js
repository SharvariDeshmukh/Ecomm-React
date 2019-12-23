import React from 'react'
import Heading from "./Heading";
import {Link} from 'gatsby'
export default function Infoblock({heading,btnCond}) {
    if ({btnCond}){
    return (
        <section className = "bg-theme my-5 py-4">
            <div className="container">
                <Heading title = {heading}/>
                    <div className="col-10 col-sm-8 mx-auto text-center">
                        <p className="lead text-white mb-4">
                            Dolore sunt Lorem amet id non exercitation id deserunt eu et laborum exercitation cupidatat.
                            Esse cillum sit fugiat sunt occaecat ullamco exercitation consectetur qui. 
                            Culpa cupidatat et laboris do ea officia sit id qui deserunt. 
                            Aliquip ipsum esse reprehenderit enim mollit id mollit elit laborum laboris.
                            Tempor nisi aute cu pariatur veniam mollit elit in elit ipsum.
                        </p>
                        
                        <Link to="/about/">
                            <button className="btn btn-warning btn-lg">
                                {heading}
                            </button>
                        </Link>
                        
                    
                    </div>
            </div>
            
        </section>
     ) }else{
        return (
            <section className = "bg-theme my-5 py-4">
                <div className="container">
                    <Heading title = {heading}/>
                        <div className="col-10 col-sm-8 mx-auto text-center">
                            <p className="lead text-white mb-4">
                                Dolore sunt Lorem amet id non exercitation id deserunt eu et laborum exercitation cupidatat.
                                Esse cillum sit fugiat sunt occaecat ullamco exercitation consectetur qui. 
                                Culpa cupidatat et laboris do ea officia sit id qui deserunt. 
                                Aliquip ipsum esse reprehenderit enim mollit id mollit elit laborum laboris.
                                Tempor nisi aute cu pariatur veniam mollit elit in elit ipsum.
                            </p>
                        </div>
                </div>
                
            </section>
         )

    }
    
}
