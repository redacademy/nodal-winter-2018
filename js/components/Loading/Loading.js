import React, { Component } from "react";
import { View, Image } from "react-native";

import styles from "./styles";
import dot from "../../assets/icons/pagination/active.png";
export default class Loading extends Component {
  constructor() {
    super();
    this.state = {
      stage: 5
    };
    this.opacities = [0.25, 0.4, 0.55, 0.7, 0.85, 1];
    this.mounted = false;
  }

  componentDidMount() {
    this.mounted = true;
    const animate = setInterval(() => {
      if (this.mounted) {
        this.setState({
          stage: this.state.stage - 1 < 0 ? 5 : this.state.stage - 1
        });
      } else {
        clearInterval(animate);
      }
    }, 80);
  }
  componentWillUnmount() {
    this.mounted = false;
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.wrapper}>
          {this.opacities.map((v, i) => (
            <Image
              key={i.toString()}
              source={dot}
              style={[
                styles.dot,
                styles[`dot${i}`],
                {
                  opacity: this.opacities[
                    i + this.state.stage > 5
                      ? i + this.state.stage - 6
                      : i + this.state.stage
                  ]
                }
              ]}
            />
          ))}
        </View>
      </View>
    );
  }
}
