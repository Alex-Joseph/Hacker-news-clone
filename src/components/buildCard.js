import React, { Component } from 'react';
import Moment from "moment";

export default class BuildCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      storyProps: {}
    };
  }

  componentDidMount() {
    let {id} = this.props
    fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({ storyProps: result });
        },
        (error) => {
          this.setState({ error });
        }
      )
  }
  shrinkUrl = (url) => {
    if (!url) return null;
    let short = url.split("/");
    return short[2];
  }
  render() {
    const { error, storyProps } = this.state;
    const {id} = this.props;
    const {title, score, by, time, descendants, url} = storyProps;
    const {rank} = this.props;
    const smallUrl = this.shrinkUrl(storyProps.url);
    if (error) {
      return <div>Error: {error.message}</div>;
    } else {
      return (
        <div className="story row no-gutters">
          <div className="rank">
            {rank}.{" "}
            <a className="short-url story-link" href={`https://news.ycombinator.com/vote?id=${id}&how=up&goto=news`}>
              <i className="fas fa-caret-up fa-lg"></i>
            </a>
          </div>
          <div className="col">
            <a className="title" href={url}>{title}</a>{" "}
            <span>
              <a
                className="short-url story-link"
                href={`https://news.ycombinator.com/from?site=${smallUrl}`}>
                ({smallUrl})
              </a>
            </span>
            <div className="w-100"></div>
            <div className="small-text">
              {score} points by{" "}
              <a className="short-url story-link" href={`https://news.ycombinator.com/user?id=${by}`}>{by}{" "}</a>
              <a className="short-url story-link" href={`https://news.ycombinator.com/item?id=${id}`}>{Moment.unix(time).fromNow()}{" "}</a>
              <a className="short-url story-link" href={`https://news.ycombinator.com/hide?id=${id}&goto=news`}>| hide |{" "}</a>
              <a className="short-url story-link" href={`https://news.ycombinator.com/item?id=${id}`}>{descendants} comments</a>
            </div>
          </div>
        </div>
      );
    }
  }
}
