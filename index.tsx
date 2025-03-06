import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from "react-native";
import { useRouter } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";

export default function DashboardScreen() {
  const router = useRouter();

  return (
    <ImageBackground 
    source={require("../assets/images/bb.webp")}
      // OR use an online image
      // source={{ uri: "https://source.unsplash.com/1600x900/?banana,leaves" }}
      style={styles.background}
      resizeMode="cover" // ✅ Ensures image covers the screen
    >
      <LinearGradient
        colors={["rgba(0,0,0,0.7)", "transparent"]} // ✅ Dark overlay for readability
        style={styles.overlay}
      >
        <View style={styles.container}>
          <Text style={styles.title}>🍌SCANANA</Text>
          <Text style={styles.subtitle}>
            Scan your banana leaf  and fruit to check for possible diseases.
          </Text>

          <TouchableOpacity 
            style={styles.button} 
            onPress={() => router.push("/ScannerScreen")}
          >
            <Text style={styles.buttonText}>📸 Scan Banana</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",  // ✅ Ensures full width
    height: "100%", // ✅ Ensures full height
  },
  overlay: {
    ...StyleSheet.absoluteFillObject, // ✅ Makes overlay cover the whole screen
  },
  container: {
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "#fff",
    textAlign: "center",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#FFD700", // 🟡 Gold color for contrast
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    elevation: 5,  // ✅ Shadow effect
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  
  },
});
