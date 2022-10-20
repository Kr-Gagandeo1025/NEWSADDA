import React, { Component } from 'react';
import NewsItem from './NewsItem';

export class NewsArea extends Component {
  
  articles = []
  constructor(){
    super();
    console.log("Hello")
    this.state = {
      articles: this.articles,
      loading : false,
      page:1,
      totalarticles: 0
    }
  }

  async componentDidMount(){
    let url = "https://newsapi.org/v2/top-headlines?country=in&s&apiKey=37b8eee63e1945ef9474606fb1b1aeb7&pageSize=20"
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData)
    this.setState(
      {articles: parsedData.articles, totalarticles:parsedData.totalResults}
    )
  }

  handleNextClick = async() => {
  console.log("Next data");
  
  let url = `https://newsapi.org/v2/top-headlines?country=in&s&apiKey=37b8eee63e1945ef9474606fb1b1aeb7&page=${this.state.page+1}&pageSize=10`
  let data = await fetch(url);
  let parsedData = await data.json();
  console.log(parsedData)
  this.setState({
    articles: parsedData.articles,
    page: this.state.page+1,
  })
  
}
handlePrevClick = async() => {
  let url = `https://newsapi.org/v2/top-headlines?country=in&s&apiKey=37b8eee63e1945ef9474606fb1b1aeb7&page=${this.state.page-1}&pageSize=10`
  let data = await fetch(url);
  let parsedData = await data.json();
  console.log(parsedData)
  this.setState({
    articles: parsedData.articles,
    page: this.state.page-1,
  })
  console.log("Previous data")
}
  

  render() {
    return (
      <div className='container my-3' >
        <h2>Top Headlines</h2>
        <div className='row 4'>
        {this.state.articles.map((elements)=>{
          return <div className='col-md-4' key={elements.url}>
            <NewsItem title={elements.title?elements.title.slice(0,40)+"...":"NO TITLE!"} descp={elements.description?elements.description.slice(0,100)+"...":"NO DESCP."} 
            imgurl={elements.urlToImage} author={elements.source.name} datetime={elements.publishedAt?elements.publishedAt.slice(0,10):"no date"} newsurl={elements.url} />
          </div>
        })} 
        </div>
        <div className="d-flex justify-content-between">
        <button disabled={this.state.page<=1} className="btn btn-lg btn-primary" onClick={this.handlePrevClick}>&larr; PREVIOUS</button>
        <button disabled={this.state.page>=Math.ceil(this.state.totalarticles/10)} className="btn btn-lg btn-primary" onClick={this.handleNextClick}>NEXT &rarr;</button>
        </div>
      </div>
    );
  }
}

export default NewsArea;
