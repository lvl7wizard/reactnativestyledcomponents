import styled from 'styled-components';
import BasicComponents from './src/components/BasicComponents';
import { NavigationContainer } from '@react-navigation/native';
import MyStack from './src/components/NavbarTest';

export default function App() {
  return <MyStack />;
}

const Container = styled.View`
  flex: 1;
  background-color: purple;
  color: white;
  align-items: center;
  justify-content: center;
`;
