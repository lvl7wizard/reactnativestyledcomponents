import ButtonTest from './component/ButtonTest';
import styled from 'styled-components';
import { View, Text } from 'react-native';

export default function App() {
  return (
    <Container>
       <ButtonTest/>
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  background-color: green;
  color: white;
  align-items: center;
  justify-content: center;
`;