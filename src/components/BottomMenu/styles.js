import {
  TouchableOpacity, View, Text, Image,
} from 'react-native';
import styled from 'styled-components';

export const Container = styled(View)`
  position: absolute;
  bottom: ${(props) => (props.iFrame === 1 ? '86%' : '-2%')};
  background: #343434;
  width: 95%;
  height: 60px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
  margin: 0 0 18px;
  border-radius: 15px;
  margin-left: 2.5%;
`;

export const ContainerItems = styled(TouchableOpacity)`
  height: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${(props) => (props.spotlight ? '#4b4b45' : '#343434')};
  padding: 5px;
  border-radius: 5px;
`;

export const Label = styled(Text)`
    color: #f0f0f0;
    font-size: 10px;
`;

export const Img = styled(Image)`
  height: 24px;
  width: 24px;
`;
