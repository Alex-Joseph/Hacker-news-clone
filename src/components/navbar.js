import React from 'react';
import Hacker from '../images/hacker-news.png';

const Navbar = () => {
  return (
    <div className="hn-navbar align-middle row no-gutters">
      <div className="icon" style={{width: "112px"}}>
        <a className="navbar-links" href="/">
          <img src={Hacker} height="24px" alt="hacker news"/>
        </a>
        <a className="align-middle navbar-links" href="/">
          <strong>Hacker News</strong>{" "}
        </a>
      </div>
      <div className=" align-middle col-10 col-md-9">
        <a className="navbar-links" href="https://news.ycombinator.com/newest">new</a>{" "}|{" "}
        <a className="navbar-links" href="https://news.ycombinator.com/newcomments">comments</a>{" "}|{" "}
        <a className="navbar-links" href="https://news.ycombinator.com/show">show</a>{" "}|{" "}
        <a className="navbar-links" href="https://news.ycombinator.com/ask">ask</a>{" "}|{" "}
        <a className="navbar-links" href="https://news.ycombinator.com/jobs">jobs</a>{" "}|{" "}
        <a className="navbar-links" href="https://news.ycombinator.com/submit">submit</a>
      </div>
      <div className="col">
        <a
          href="https://news.ycombinator.com/login?goto=newest"
          className="navbar-links float-right mt-1 mr-1">
          login
        </a>
      </div>
    </div>
  )
}

export default Navbar;
