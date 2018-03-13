// import firebase from "firebase";

// openFileDialog = () => document.getElementById("image").click();

// uploadFile = input => {
//   const ref = firebase.storage().ref();

//   const file = input.target.files[0];
//   const name = `${+new Date()}-${file.name}`;
//   const metadata = {
//     contentType: file.type
//   };
//   const task = ref.child(name).put(file, metadata);
//   task
//     .then(snapshot => {
//       const url = snapshot.downloadURL;
//       // set the url in the redux storage
//       // this.props.updateImageField(url);
//       console.log(url);
//       // let the user proceed to the Next step
//       // this.props.toggleImageSelected(false);
//     })
//     .catch(error => error.message);
// };

// <RaisedButton
//   label={"Select an Image"}
//   onClick={this.openFileDialog}
//   style={{ marginRight: 12 }}
// >
//   <View className="inputfield">
//     <input
//       type="file"
//       accept="image/*"
//       onChange={this.uploadFile}
//       hidden
//       id="image"
//     />
//   </View>
// </RaisedButton>;
