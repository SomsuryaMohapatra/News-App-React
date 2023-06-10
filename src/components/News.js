import React, { Component } from "react";
import NewsItems from "./NewsItems";

export default class News extends Component {
  // articles = [
  //   {
  //     source: {
  //       id: "talksport",
  //       name: "TalkSport",
  //     },
  //     author: "Connor Andrews",
  //     title:
  //       "Cristiano Ronaldo insists ‘very good’ Saudi league can rival Europe’s best but outlines areas for impro...",
  //     description:
  //       "Cristiano Ronaldo has made some bold claims for the future of the Saudi Pro League, and outlined how it can get there. Football’s all-time top scorer is coming to the end of his first season with A…",
  //     url: "https://talksport.com/football/1444308/cristiano-ronaldo-saudi-league-can-rival-europes-best/",
  //     urlToImage:
  //       "https://talksport.com/wp-content/uploads/sites/5/2023/06/crop-1444311-1.jpg?strip=all&quality=100&w=761&h=507&crop=1",
  //     publishedAt: "2023-06-02T18:17:00Z",
  //     content:
  //       "Cristiano Ronaldo has made some bold claims for the future of the Saudi Pro League, and outlined how it can get there.\r\nFootballs all-time top scorer is coming to the end of his first season with Al … [+1833 chars]",
  //   },
  //   {
  //     source: {
  //       id: "talksport",
  //       name: "TalkSport",
  //     },
  //     author: "Connor Andrews",
  //     title:
  //       "Feyenoord brutally mock crying Jose Mourinho after beating him to Champions League football...",
  //     description:
  //       "Feyenoord have posted a brutal takedown of Jose Mourinho, avenging his outburst against them in the quarter-finals. Roma beat the Dutch side on their way to Budapest, where they lost to Sevilla on …",
  //     url: "https://talksport.com/football/1444328/feyenoord-mock-crying-jose-mourinho-champions-league-football/",
  //     urlToImage:
  //       "https://talksport.com/wp-content/uploads/sites/5/2023/06/TALKSPORT-MOURINHO-FEYENOORD.png?strip=all&quality=100&w=1500&h=1000&crop=1",
  //     publishedAt: "2023-06-02T16:51:00Z",
  //     content:
  //       "Feyenoord have posted a brutal takedown of Jose Mourinho, avenging his outburst against them in the quarter-finals.\r\nRoma beat the Dutch side on their way to Budapest, where they lost to Sevilla on p… [+1792 chars]",
  //   },
  //   {
  //     source: {
  //       id: "four-four-two",
  //       name: "FourFourTwo",
  //     },
  //     author: "Ryan Dabbs, Caio Carrieri",
  //     title:
  //       "Fred reveals which Liverpool and Manchester City players he hangs out with in his spare time",
  //     description:
  //       "Despite Manchester United's rivalries, Fred finds time for some opposition players outside of football",
  //     url: "https://www.fourfourtwo.com/news/fred-reveals-which-liverpool-and-manchester-city-players-he-hangs-out-with-in-his-spare-time",
  //     urlToImage:
  //       "https://cdn.mos.cms.futurecdn.net/MjDDAjN7wXnBETcQM6Mwj5-1200-80.jpg",
  //     publishedAt: "2023-06-01T17:00:06Z",
  //     content:
  //       "Fred has revealed he spends time with players from Liverpool and Manchester City away from football, the Manchester United midfielder enjoying the company of the Brazilian contingent situated in the … [+1649 chars]",
  //   },
  //   {
  //     source: {
  //       id: "espn-cric-info",
  //       name: "ESPN Cric Info",
  //     },
  //     author: null,
  //     title:
  //       "Five famous people (and one cat) you didn't know have ESPNcricinfo profiles | ESPNcricinfo.com",
  //     description:
  //       "Why do a footballer, a Nobel laureate and a prime minister (no, not Imran Khan) find themselves in the ESPNcricinfo player database? | ESPNcricinfo.com",
  //     url: "http://www.espncricinfo.com/story/_/id/29102695/five-famous-people-one-cat-know-espncricinfo-profiles",
  //     urlToImage:
  //       "https://a.espncdn.com/i/cricket/cricinfo/1221668_1296x1296.gif",
  //     publishedAt: "2020-04-27T07:20:43Z",
  //     content:
  //       "Why do a cat, a footballer, a Nobel laureate and a prime minister find themselves in the ESPNcricinfo database? Here are six player profiles you wouldn't have expected we had.\r\nPeter the catThe only … [+5504 chars]",
  //   },
  // ];

  constructor() {
    super();
    this.state = {
      // articles: this.articles,
      articles : [],
    };
  }

  async componentDidMount(){
    let url = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=49b19e5967df4a00828b1c058f6946bd";
    let data = await fetch(url);
    let jsonParsedData = await data.json();
    this.setState({articles:jsonParsedData.articles})
  }

  render() {
    return (
      <div className="container my-3">
        <h2>NewsMonkey - Top Headlines</h2>
        <div className="row my-3">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4 my-1" key={element.url}>
                <NewsItems
                  title={element.title ? element.title.slice(0,40) : ""}
                  description={element.description ? element.description.slice(0,74) : ""}
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
