import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import "./EmojiResultRow.css";

export default class EmojiResultsRow extends PureComponent {
  static propTypes = {
    title: PropTypes.string,
    image: PropTypes.string
  };

  render() {
    const src = `images/${this.props.image}`;
    return (
      <div
        className="component-emoji-result-row copy-to-clipboard"
        data-clipboard-text={this.props.title}
      >
        <img alt={this.props.title} src={src} />
        <span className="title">{this.props.title}</span>
      </div>
    );
  }
}
