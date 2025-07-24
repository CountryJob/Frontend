import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function NotificationButton({onPress, hasNotification}) {
  return (
    <TouchableOpacity style={styles.button}
                      onPress={onPress}>
      <Text>🔔</Text>
      {hasNotification && <View style={styles.badge} />}
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    padding: 8,
    borderRadius: 20,
    backgroundColor: 'transparent',
    position: 'relative',
  },
  badge: {
    position: 'absolute',
    top: 6,
    right: 6,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#EF4452',
  }
});