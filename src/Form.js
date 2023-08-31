import React from 'react';
import styled from 'styled-components';

const StyledForm = styled.form`
    font-family: courier;
    margin: 0 50px 25px;
    padding: 10px 25px 25px;
    text-aling: center;
    transform: scale(1);
    transition: transform 0.3s;
    &: hover {
        transform: scale(1.2);
    };
`;
const StyledButton = styled.button`
    cursor: pointer;
    padding: 5px 10px;
    border: 1px solid transparent;
    transition: 0.15s border-color;

    &:hover {
        border color: ${(props) => props.theme.color2};
    }
    &[disabled] {
        background: lightblue;
    }
`;

export function Form(props) {
    const [quantity, setQuantity] = React.useState(0);
    const { movie } = props;

    return(
        <StyledForm>
            <h3>{movie.name}</h3>
            <StyledButton type='button' onClick={() => setQuantity(quantity - 1)} disabled = {quantity <= 0}> - </StyledButton>
            {quantity}
            <StyledButton type='button' onClick={() => setQuantity(quantity + 1)} disabled = {quantity >= movie.available}> + </StyledButton>
        </StyledForm>
    );
}