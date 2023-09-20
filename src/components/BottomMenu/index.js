import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Fontisto from '@expo/vector-icons/Fontisto';
import {
  Container, ContainerItems, Label, Img
} from './styles';
import Logo from '../../../assets/img/logo-devclub.png';
import { useHome } from '../../hooks/HomeContext';

export function BottomMenu() {
  const { changeIframe, iFrame } = useHome();

  return (
    <Container iFrame={iFrame}>
      <ContainerItems onPress={() => changeIframe(0)} spotlight={iFrame === 0}>
        <FontAwesome5 name="home" size={24} color="#FFF" />
        <Label>Home</Label>
      </ContainerItems>

      <ContainerItems onPress={() => changeIframe(1)} spotlight={iFrame === 1}>
        <Img source={Logo} alt="devclub-logo" />
        <Label>DevClub</Label>
      </ContainerItems>

      <ContainerItems onPress={() => changeIframe(2)} spotlight={iFrame === 2}>
        <FontAwesome5 name="people-carry" size={24} color="#FFF" />
        <Label>Comunidade</Label>
      </ContainerItems>

      <ContainerItems onPress={() => changeIframe(3)} spotlight={iFrame === 3}>
        <Fontisto name="shopping-store" size={24} color="#FFF" />
        <Label>Loja</Label>
      </ContainerItems>

      <ContainerItems onPress={() => changeIframe(4)} spotlight={iFrame === 4}>
        <MaterialIcons name="live-tv" size={24} color="#FFF" />
        <Label>Lives do Canal</Label>
      </ContainerItems>
    </Container>
  );
}
