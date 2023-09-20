import { SafeAreaView } from 'react-native';
import { WebView } from 'react-native-webview';
import styled from 'styled-components';

export const Container = styled(SafeAreaView)`
  background-color: ${(props) => (props.backgroundColor === 1 ? '#2B2E33' : '#121212')};
  flex: 1;
`;

export const WebViewComponent = styled(WebView)``;
