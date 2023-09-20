import Ionicons from '@expo/vector-icons/Ionicons';
import { Platform } from 'react-native';
import { Container, ContainerItems } from './styles';
import { useHome } from '../../hooks/HomeContext';

export function TopMenu({ goBack }) {
  const { changeIframe, iFrame } = useHome();

  return (
    <Container isAndroid={Platform.OS === 'android'}>
      <ContainerItems onPress={() => goBack()} className="back">
        <Ionicons name="caret-back" size={32} color="#FFF" />
      </ContainerItems>

      <ContainerItems className="refresh">
        <Ionicons name="ios-reload-circle-sharp" size={32} color="#FFF" onPress={() => changeIframe(iFrame)} />
      </ContainerItems>
    </Container>
  );
}
