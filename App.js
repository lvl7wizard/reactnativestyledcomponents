import styled from 'styled-components';
import BasicComponents from './src/components/BasicComponents';

export default function App() {
  return (
       <BasicComponents/>
  );
}

const Container = styled.View`
  flex: 1;
  background-color: purple;
  color: white;
  align-items: center;
  justify-content: center;
`;