import React, { Component } from "react";

import Header from "./header.js";
import Article from "./article.js";
import Footer from "./footer.js";

import "../styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedArticle: "Jitlada 5ever",
      articles: [
        "Jitlada 5ever",
        "India's best grill",
        "Friday heaven",
        "Out of plates",
        "Tu tacos pls",
        "Coffee connection"
      ],
      issueTitle: "01. Salve"
    };
  }
  render() {
    const { selectedArticle, articles, issueTitle } = this.state;

    return (
      <div className="viewport">
        <Header className="header" />
        <Article className="article" />
        <Footer
          className="footer"
          selectedArticle={selectedArticle}
          articles={articles}
          issueTitle={issueTitle}
        />
      </div>
    );
  }
}

export default App;
