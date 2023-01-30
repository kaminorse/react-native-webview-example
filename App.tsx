import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, View } from "react-native";
import WebView from "react-native-webview";

export default function App() {
  return (
    <>
      <StatusBar />
      <SafeAreaView style={{ flex: 1 }}>

        <View style={{ flex: 1, width: "100%" }}>
          <WebView
            pullToRefreshEnabled={true}
            allowsBackForwardNavigationGestures={false}
            source={{ uri: "https://kaminorse.github.io/next-pwa-example/" }}
          />
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
