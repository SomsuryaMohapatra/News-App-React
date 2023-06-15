import React, { Component } from "react";
import NewsItems from "./NewsItems";
import Spinner from "./Spinner";
import PropTypes from "prop-types";

export default class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 5,
    category: "general",
  };
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

  constructor() {
    super();
    this.state = {
      // articles: this.articles,
      articles: [],
      page: 1,
      loading: false,
    };
  }

  async updateNews() {
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=49b19e5967df4a00828b1c058f6946bd&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let jsonParsedData = await data.json();
    this.setState({
      articles: jsonParsedData.articles,
      totalArticles: jsonParsedData.totalResults,
      loading: false,
    });
  }

  async componentDidMount() {
    this.updateNews();
  }

  handleNextClick = async () => {
    this.setState({ page: this.state.page + 1 });
    this.updateNews();
  };

  handlePrevClick = async () => {
    this.setState({ page: this.state.page - 1 });
    this.updateNews();
  };

  render() {
    return (
      <div className="container my-3">
        <h2 className="text-center" style={{ margin: "35px 0px" }}>
          NewsMonkey - Top Headlines
        </h2>
        {this.state.loading ? <Spinner /> : ""}
        <div className="row my-3">
          {!this.state.loading &&
            this.state.articles.map((element) => {
              return (
                <div className="col-md-4 my-2" key={element.url}>
                  <NewsItems
                    title={element.title ? element.title.slice(0, 40) : ""}
                    source={element.source.name}
                    description={
                      element.description
                        ? element.description.slice(0, 74)
                        : ""
                    }
                    author={element.author}
                    date={new Date(element.publishedAt).toGMTString()}
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                  />
                </div>
              );
            })}
        </div>

        <div className="container d-flex justify-content-between">
          <button
            type="button"
            className="btn btn-warning"
            onClick={this.handlePrevClick}
            disabled={this.state.page <= 1}
          >
            {"<"}
          </button>
          <button
            type="button"
            className="btn btn-primary mx-2"
            onClick={this.handleNextClick}
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalArticles / this.props.pageSize)
            }
          >
            {">"}
          </button>
        </div>
      </div>
    );
  }
}
