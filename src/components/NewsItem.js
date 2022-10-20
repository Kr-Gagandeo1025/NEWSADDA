import React, { Component } from 'react';

export class NewsItem extends Component {
  render() {
    let {title, descp, imgurl, author, datetime, newsurl } = this.props;
    return (
      <div className='my-3'>
        <div className="card" style={{width: "20rem"}}>
            <img src={imgurl?imgurl:"https://t3.ftcdn.net/jpg/02/23/38/64/360_F_223386472_g3ZlTnCCTRD9jtcvXML9F3HUNu91UAa0.jpg"} className="card-img-top" alt="..."/>
            <div className="card-body">
                <p className="card-text my-0">{author}</p>
                <p className="card-text mt-0">{datetime}</p>
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{descp}</p>
                <a href={newsurl} className="btn btn-sm btn-outline">Read More</a>
            </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
