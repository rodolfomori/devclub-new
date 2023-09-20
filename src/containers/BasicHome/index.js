/* eslint-disable react-native/no-color-literals */
/* eslint-disable react-native/no-inline-styles */
import React, { useRef } from 'react';
import { StatusBar, Platform } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import { TopMenu } from '../../components';
import { useHome } from '../../hooks/HomeContext';
import { Container, WebViewComponent } from './styles';

function BasicHome() {

  const isAndroid = Platform.OS === 'android';

  const {
    iFrame, setLoading, loading, iFrameKey
  } = useHome();

  const webViewRef = useRef(null);

  const goback = () => {
    webViewRef.current.goBack();
  };

  const INJECTEDJAVASCRIPT = 'const meta = document.createElement(\'meta\'); meta.setAttribute(\'content\', \'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0\'); meta.setAttribute(\'name\', \'viewport\'); document.getElementsByTagName(\'head\')[0].appendChild(meta); ';

  return (

    <Container backgroundColor={iFrame}>
      <TopMenu goBack={goback} />
      <StatusBar barStyle={isAndroid ? 'dark-content' : 'light-content'} translucent />

      <WebViewComponent
        ref={webViewRef}
        scalesPageToFit={false}
        injectedJavaScript={INJECTEDJAVASCRIPT}
        scrollEnabled
        key={iFrameKey}
        onLoad={() => setLoading(false)}
        source={{ uri: 'https://aulas.devclub.com.br/' }}
        style={{ backgroundColor: '#2B2E33', marginTop: isAndroid ? 25 : 0 }}
      />

      <Spinner visible={loading} animation="slide" overlayColor="#000000" />
    </Container>
  );
}

export default BasicHome;
