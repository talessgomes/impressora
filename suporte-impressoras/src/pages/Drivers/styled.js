import styled, {keyframes} from "styled-components";

export const DriversGrid = styled.div `
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap:  15px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`

export const DriverImpression = styled.a`
  text-decoration: none;
  color: rgb(0, 0, 0); 
  display: inline-block;
  transition: transform 0.2s ease, color 0.2s ease;
  &:hover{
    transform: scale(1.05);
    color: #0066cc;
  }
`
const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Img = styled.img `
    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.3);
    animation: ${fadeInUp} 0.5s ease-out forwards;
    transition: transform 0.2s ease;
    &:hover{
    transform: scale(1.05);

  }
`

