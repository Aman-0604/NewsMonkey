import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        //the below line of code is for using the  props. We are accessing the elements of props by using the concept
        //of destructuring in JavaScript
        let {title,description,url,urlToImage}=this.props; //this.props is an object and i am pulling title and description from it
        if (urlToImage===null) {
            urlToImage="./image_not_available.png";//setting up a default image if there is no image in the news source
        }
        if (description===null) {
            description="Tap to read more.";
        }
        if (title.length>63) {
            title=title.slice(0,63);
        }
        if (description.length>91) {
            description=description.slice(0,91);
        }
        return (
                <div className="card">
                    <a href={url} target="_blank" rel='noreferrer'>
                        <img src={urlToImage} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title" style={{color: "black", textDecoration: "none"}}>{title}...</h5>
                            <p className="card-text my-3">{description}...</p>
                        </div>
                    </a>
                </div>

        )
    }
}

export default NewsItem