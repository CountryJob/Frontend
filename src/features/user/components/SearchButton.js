import React from "react";
import { StyleSheet, Text, TouchableOpacity} from "react-native";
export default function SearchButton({onPress}) {
  return(
    <TouchableOpacity
      style={styles.button}
      onPress={onPress}>
        <Text>🔎</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    padding: 8,
    borderRadius: 20,
    backgroundColor: 'transparent',
  },
});