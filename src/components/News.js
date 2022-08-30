import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'

export class News extends Component {
  static defaultProps={
    country: "in",
    category: "general"
  }
  static propTypes={
    country: PropTypes.string,
    category: PropTypes.string
  }
  articles=[];
  constructor(){
    super();
    this.state={
      articles: this.articles,
      page: 1,
      pageSize: 18,
      totalResults: 0,//just for initialization, will change it later
      loading: false
    }
  }
  async componentDidMount(){
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.state.pageSize}`;
    this.setState({loading:true});
    let data= await fetch(url);
    let parsedData= await data.json();
    this.setState({
      articles:parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false
    });
    
  }
    handlePreviousClick = async ()=>{
      let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page-1}&pageSize=${this.state.pageSize}`;
      this.setState({loading:true});
      let data= await fetch(url);
      let parsedData= await data.json();
      this.setState({
        page: this.state.page-1,
        articles:parsedData.articles,
        loading: false
      });
      
    }
    
    handleNextClick = async ()=>{
      let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page+1}&pageSize=${this.state.pageSize}`;
      this.setState({loading:true});
      let data= await fetch(url);
      let parsedData= await data.json();
      this.setState({
        page: this.state.page+1,
        articles:parsedData.articles,
        loading: false
      });

    }


  render() {
    return (
      <div>
        <div className='container my-3'>
            <div style={{display:"flex",justifyContent:'center'}}>
                <h1>NewsMonkey - Top Headlines</h1>
            </div>
            {this.state.loading && <Spinner/>}
            <div className="row my-3">
              {!this.state.loading && this.state.articles.map((element)=>{
                return <div className="col-md-4 my-3" key={element.url}>
                    <NewsItem title={element.title} description={element.description} url={element.url} urlToImage={element.urlToImage}/>
                </div> 
              })}
            </div>
            <div className='d-flex justify-content-between'>
                <button disabled={this.state.page<=1} onClick={this.handlePreviousClick} type="button" className="btn btn-dark">&larr; Previous</button>
                <button disabled={this.state.page>=Math.ceil(this.state.totalResults/this.state.pageSize)} onClick={this.handleNextClick} type="button" className="btn btn-dark">Next &rarr;</button>
            </div>
        </div>
      </div>
    )
  }
}

export default News