import styled from "styled-components"

export const Button = styled.button`

border-radius: 8px;
color: ${(props) => (props.color ? props.color : "red")};
border-color:blue;
transition: 500ms ease-in-out;

&:Hover{
    transform:scale(1.1);
}
`