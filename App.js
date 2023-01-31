import { StatusBar, StyleSheet, View } from "react-native";

import UploadScreen from "./src/UploadScreen";

const App = () => {
  return (
    <View style={estilos.container}>
      <StatusBar />
      <UploadScreen />
    </View>
  );
};

export default App;

const estilos = StyleSheet.create({
  container: {
    flex: 1,
  },
});
