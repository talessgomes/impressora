import styled from"styled-components";

export const FirstSection = styled.div `
    margin-bottom: 20px;
`

export const H3Color = styled.h3 `
    color: #004080;
`
export const ImgSpooler = styled.img `
    width: 80%;
    margin: 15px 0;
    border-radius: 8px;
    margin: 0px 0px 0px 70px;
    &:hover {
        transform: scale(1.05);
        box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.3);
        cursor: pointer;
    }
`

export const SecondSection = styled.section `
 display: flex;
 flex-direction: column;
 align-items: start;
`


export const ThirdSection = styled.section `
 display: flex;
 flex-direction: column;
 align-items: start;
`

export const ImgLine = styled.img `
    width: 100%;
    margin: 15px 0;
    border-radius: 8px;

    &:hover {
        transform: scale(1.05);
        box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.3);
        cursor: pointer;
    }
`