import styled from "styled-components";

const StyledText = styled.Text`
  color: white;
`;

const StyledButton = styled.Button`
padding: 80px;
margin: 100px;
`;


const ButtonTest = () => {
    return (<>
    <StyledText>Test</StyledText>
    <StyledButton title="button1">Button</StyledButton>
    </>
    )
}

export default ButtonTest;