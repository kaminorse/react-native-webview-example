import { StatusBar } from "expo-status-bar";
import { Alert, SafeAreaView, StyleSheet, View } from "react-native";
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
            onMessage={(event) => {
              const data = JSON.parse(event.nativeEvent.data);
              if (data.type === "@@test/message") {
                Alert.alert("WebViewメッセージ", data.payload.message);
              }
            }}
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
