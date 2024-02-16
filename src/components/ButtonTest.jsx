import styled from "styled-components";

const StyledText = styled.Text`
  color: black;
`;

const StyledButton = styled.Button`
padding: 80px;
margin: 100px;
`;


const ButtonTest = () => {
    return (<>
    <StyledText>Test</StyledText>
    <StyledButton title="Hello"/>
    </>
    )
}

export default ButtonTest;