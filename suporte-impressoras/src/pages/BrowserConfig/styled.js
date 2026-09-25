import styled from 'styled-components';



export const Img = styled.img `
    max-width: 100%;
    border-radius: 4px;
    margin-bottom: 15px;
    margin: 15px 0;
    border-radius: 8px;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    &:hover {

        transform: scale(1.02);
        box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.3);
        cursor: pointer;
    }
`

