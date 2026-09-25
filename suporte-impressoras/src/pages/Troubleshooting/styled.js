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
    transition: opacity 0.3s ease, filter 0.3s ease, transform 0.3s ease;
    &:hover {
        opacity: 1;
        filter: brightness(1.05);
        transform: scale(1.02);
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
    transition: opacity 0.3s ease, filter 0.3s ease, transform 0.3s ease;
    &:hover {
        opacity: 1;
        filter: brightness(1.05);
        transform: scale(1.02);
        box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.3);
        cursor: pointer;
    }
`

export const ImgMacro = styled.img`
  width: 50%;
  margin: 15px 0;
  border-radius: 10px;
  opacity: 0.9;
  filter: brightness(0.95);
  transition: opacity 0.3s ease, filter 0.3s ease, transform 0.3s ease;

  &:hover {
    opacity: 1;
    filter: brightness(1.05);
    transform: scale(1.02);
    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.3);
    cursor: pointer;
  }
`