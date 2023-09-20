/* eslint-disable react-native/no-color-literals */
/* eslint-disable react-native/no-inline-styles */
import React, { useEffect, useState } from 'react'
import { LogLevel, OneSignal } from 'react-native-onesignal'
import Constants from 'expo-constants'
import { collection, getDocs } from 'firebase/firestore'
import db from '../../services/firebase'
import FullHome from '../FullHome'
import BasicHome from '../BasicHome'
import { useKeepAwake } from 'expo-keep-awake'
// import { Platform } from 'react-native'

function App() {
  useKeepAwake()
  const [basicMode, setBasicMode] = useState(false)

  async function checkUpdates() {
    // let androidON = false
    try {
      const colRef = collection(db, 'toggle_list')

      const snapshots = await getDocs(colRef)

      const docs = snapshots.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }))[0].basicMode

      // const onlyIos = snapshots.docs.map((doc) => ({
      //   ...doc.data(),
      //   id: doc.id,
      // }))[0].onlyIos

      // if (Platform.OS === 'ios') {
      //   androidON = true
      // } else {
      //   if (onlyIos) {
      //     androidON = false
      //   } else {
      //     androidON = true
      //   }
      // }

      setBasicMode(docs)
    } catch (err) {
      setBasicMode(false)
      console.error(err)
    }
  }

  useEffect(() => {
    checkUpdates()
  }, [])

  OneSignal.Debug.setLogLevel(LogLevel.Verbose)
  OneSignal.initialize(Constants.expoConfig.extra.oneSignalAppId)

  // Also need enable notifications to complete OneSignal setup
  OneSignal.Notifications.requestPermission(true)

  // OneSignal.setAppId('1ee336fa-54a8-4c77-b6c5-8c44a658691b')

  // OneSignal.promptForPushNotificationsWithUserResponse()

  // // Method for handling notifications received while app in foreground
  // OneSignal.setNotificationWillShowInForegroundHandler(
  //   (notificationReceivedEvent) => {
  //     console.log(
  //       'OneSignal: notification will show in foreground:',
  //       notificationReceivedEvent,
  //     )
  //     const notification = notificationReceivedEvent.getNotification()
  //     console.log('notification: ', notification)
  //     const data = notification.additionalData
  //     console.log('additionalData: ', data)
  //     // Complete with null means don't show a notification.
  //     notificationReceivedEvent.complete(notification)
  //   },
  // )

  // // Method for handling notifications opened
  // OneSignal.setNotificationOpenedHandler((notification) => {
  //   console.log('OneSignal: notification opened:', notification)
  // })

  return basicMode ? <BasicHome /> : <FullHome />
}

export default App
