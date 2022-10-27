import styled from 'styled-components'

export const Penis = styled.h1`
${(props) => HandleHTag(props)};
`

const HandleHTag = (props) => {

    switch (props.as) {
        case "h1":
            return`
                Color:red;
            `
            break;
        case "h2":
            return`
                Color:Yellow;
            `
            break;
        case "h3":
            return`
                Color:blue;
            `
            break;
    
        default:
            return`
            color:Green;
            `
            break;
    }

}