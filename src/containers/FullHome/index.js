/* eslint-disable react-native/no-color-literals */
/* eslint-disable react-native/no-inline-styles */
import React, { useRef, useEffect, useState } from 'react'
import { Keyboard, StatusBar, Platform } from 'react-native'
import Spinner from 'react-native-loading-spinner-overlay'
import { BottomMenu, TopMenu } from '../../components'
import { useHome } from '../../hooks/HomeContext'
import { Container, WebViewComponent } from './styles'

function FullHome() {
  const isAndroid = Platform.OS === 'android'

  const { iFrame, setLoading, loading, iFrameKey } = useHome()
  const [isKeyboardVisible, setKeyboardVisible] = useState(false)

  const webViewRef = useRef(null)

  const goback = () => {
    webViewRef.current.goBack()
  }

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setKeyboardVisible(true) // or some other action
      },
    )
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardVisible(false) // or some other action
      },
    )

    return () => {
      keyboardDidHideListener.remove()
      keyboardDidShowListener.remove()
    }
  }, [])

  const INJECTEDJAVASCRIPT =
    "const meta = document.createElement('meta'); meta.setAttribute('content', 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0'); meta.setAttribute('name', 'viewport'); document.getElementsByTagName('head')[0].appendChild(meta); "

  return (
    <Container backgroundColor={iFrame}>
      <TopMenu goBack={goback} />
      <StatusBar
        barStyle={isAndroid ? 'dark-content' : 'light-content'}
        translucent
      />

      {iFrame === 0 && (
        <WebViewComponent
          allowsFullscreenVideo={true}
          ref={webViewRef}
          scalesPageToFit={false}
          injectedJavaScript={INJECTEDJAVASCRIPT}
          scrollEnabled
          key={iFrameKey}
          onLoad={() => setLoading(false)}
          source={{ uri: 'https://app.devclub.com.br' }}
          style={{ backgroundColor: '#2B2E33', marginTop: isAndroid ? 25 : 0 }}
        />
      )}

      {iFrame === 1 && (
        <WebViewComponent
          allowsFullscreenVideo={true}
          ref={webViewRef}
          scalesPageToFit={false}
          injectedJavaScript={INJECTEDJAVASCRIPT}
          scrollEnabled
          key={iFrameKey}
          onLoad={() => setLoading(false)}
          source={{ uri: 'https://aulas.devclub.com.br/' }}
          style={{ backgroundColor: '#2B2E33', marginTop: isAndroid ? 25 : 0 }}
        />
      )}
      {iFrame === 2 && (
        <WebViewComponent
          allowsFullscreenVideo={true}
          ref={webViewRef}
          scalesPageToFit={false}
          injectedJavaScript={INJECTEDJAVASCRIPT}
          scrollEnabled
          key={iFrameKey}
          onLoad={() => setLoading(false)}
          source={{ uri: 'https://comunidade.devclub.com.br/' }}
          style={{
            backgroundColor: '#2B2E33',
            marginBottom: 70,
            marginTop: isAndroid ? 25 : 0,
          }}
        />
      )}
      {iFrame === 3 && (
        <WebViewComponent
          allowsFullscreenVideo={true}
          ref={webViewRef}
          scalesPageToFit={false}
          injectedJavaScript={INJECTEDJAVASCRIPT}
          scrollEnabled
          key={iFrameKey}
          onLoad={() => setLoading(false)}
          source={{ uri: 'https://loja.devclub.com.br/' }}
          style={{
            backgroundColor: '#2B2E33',
            marginBottom: 80,
            marginTop: isAndroid ? 25 : 0,
          }}
        />
      )}
      {iFrame === 4 && (
        <WebViewComponent
          allowsFullscreenVideo={true}
          ref={webViewRef}
          scalesPageToFit={false}
          injectedJavaScript={INJECTEDJAVASCRIPT}
          scrollEnabled
          key={iFrameKey}
          onLoad={() => setLoading(false)}
          source={{
            uri:
              'https://www.youtube.com/playlist?list=PLsFVybaG4mOAa9gF5q7dJfJigxAyN0SyJ',
          }}
          style={{
            backgroundColor: '#fff',
            marginBottom: 80,
            marginTop: isAndroid ? 25 : 0,
          }}
        />
      )}
      {!isKeyboardVisible && !loading && <BottomMenu />}
      <Spinner visible={loading} animation="slide" overlayColor="#000000" />
    </Container>
  )
}

export default FullHome
