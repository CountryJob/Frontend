import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import BellIcon from '../../../assets/icons/bell-icon.svg';

export default function NotificationButton({
  onPress, 
  hasNotification = false
}) {
  return (
    <TouchableOpacity style={styles.button}
                      onPress={onPress}>
      <BellIcon width={24} height={24} color='#BDC2D0'/>
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
    right: 4,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#EF4452',
  }
});