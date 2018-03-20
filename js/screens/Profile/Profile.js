/* global require */
import React from "react";
import { Text, View, Image, ScrollView } from "react-native";
import Chips from "../../components/Chips";

// Styles
import { styles } from "./styles";

const Profile = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.mainContainer}>
        <Image
          style={styles.profilePhoto}
          source={require("../../assets/images/placeholder/profile-4.jpg")}
        />
        <Text style={styles.titleText}>{"Placeholder".toUpperCase()}</Text>
        <Text style={styles.paragraphText}>Placeholder University Program</Text>
        <Text style={styles.titleText}>Workstyle</Text>
        <View style={styles.workstyleIcons}>
          <Image
            style={{ height: 80, width: 80, alignSelf: "center" }}
            source={require("../../assets/icons/workstyle/collaborative/active.png")}
          />
          <Text style={styles.workstyleText}>Collaborative</Text>
        </View>
        <Text style={styles.titleText}>{"About Me".toUpperCase()}</Text>
        <Text style={styles.paragraphText}>Description Placeholder</Text>
        <Text style={styles.titleText}>{"My Skills".toUpperCase()}</Text>
        <View>
          <Chips
            chips={["React", "Javascript", "Scss"]}
            placeholder="Add a tag..."
          />
        </View>

        <Text style={styles.titleText}>{"My Competitions".toUpperCase()}</Text>

        <Text style={styles.titleText}>
          {"Saved Competitions".toUpperCase()}
        </Text>
        <Text style={styles.paragraphText}>StuffSTuffstuff</Text>
      </View>
    </ScrollView>
  );
};

export default Profile;
