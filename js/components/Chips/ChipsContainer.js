import React, { Component } from "react";
import PropTypes from "prop-types";
import Chips from "./Chips";

export default class ChipsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chips: [],
      text: " ",
      value: this.placeholder
    };
    this.setChips = this.setChips.bind(this);
    this.handleEditComplete = this.handleEditComplete.bind(this);
    this.setText = this.setText.bind(this);
    this.deleteChip = this.deleteChip.bind(this);
  }

  componentDidMount() {
    this.setChips(this.props.chips);
  }

  setChips(chips) {
    if (chips && chips.length) {
      this.setState({ chips: chips });
    }
  }
  handleEditComplete() {
    if (this.state.text) {
      const currentChips = this.state.chips;
      currentChips.push(this.state.text);
      this.setState({
        chips: currentChips,
        value: ""
      });
    }
  }

  deleteChip() {
    const chips = this.state.chips;
    if (!this.state.chips && chips.length) {
      this.deleteChip(chips[chips.length - 1]);
    }
  }

  setText(text) {
    this.setState({ value: text, text: text });
  }

  render() {
    const placeholder =
      this.state.chips.length < 10 ? this.props.placeholder : " ";

    return (
      <Chips
        chips={this.state.chips}
        setText={this.setText}
        deleteChip={this.deleteChip}
        handleEditComplete={this.handleEditComplete}
        placeholder={placeholder}
        value={this.state.value}
        inputRef={input => {
          this.TextInput = input;
        }}
      />
    );
  }
}
ChipsContainer.propTypes = {
  chips: PropTypes.array.isRequired,
  placeholder: PropTypes.string.isRequired
};
