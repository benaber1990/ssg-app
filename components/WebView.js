import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { WebView } from "react-native-webview";

const urlLink = "https://login.seftonsupportgroup.org";

function WebViewComp() {
  return (
    <View
      style={{
        paddingTop: 40,
        flex: 1,
      }}
    >
      <WebView source={{ uri: urlLink }} style={styles.webview} />
    </View>
  );
}

const styles = StyleSheet.create({
  webview: {
    width: "100%",
    height: "100%",
    flex: 1,
  },
});

export default WebViewComp;
