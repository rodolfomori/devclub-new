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

function App() {
  useKeepAwake()
  const [basicMode, setBasicMode] = useState(false)

  async function checkUpdates() {
    try {
      const colRef = collection(db, 'toggle_list')

      const snapshots = await getDocs(colRef)

      const docs = snapshots.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }))[0].basicMode

      setBasicMode(docs)
    } catch (err) {
      setBasicMode(false)
      console.error(err)
    }
  }

  useEffect(() => {
    checkUpdates()
  }, [])

  //notifications
  OneSignal.Debug.setLogLevel(LogLevel.Verbose)
  OneSignal.initialize(Constants.expoConfig.extra.oneSignalAppId)
  OneSignal.Notifications.requestPermission(true)

  return basicMode ? <BasicHome /> : <FullHome />
}

export default App
