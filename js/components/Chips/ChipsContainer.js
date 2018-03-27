import React, { Component } from "react";
import PropTypes from "prop-types";
import Chips from "./Chips";

export default class ChipsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: " ",
      value: this.placeholder
    };
  }

  handleEditComplete = () => {
    if (this.state.text) {
      const currentChips = this.props.chips;
      currentChips.push(this.state.text);
      this.setState({
        value: ""
      });
      this.props.setChips(currentChips);
    }
  };

  setText = text => {
    this.setState({ value: text, text: text });
  };

  render() {
    const placeholder =
      this.props.chips.length < 10 ? this.props.placeholder : " ";

    return (
      <Chips
        chips={this.props.chips}
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
  chips: PropTypes.array,
  placeholder: PropTypes.string.isRequired,
  setChips: PropTypes.func
};
