import { css, Global } from "@emotion/react";
import styled from "@emotion/styled";

export const globalStyles = (
  <Global
    styles={css`
      @import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap");
      html,
      body {
        padding: 0;
        margin: 0;
        background: #fff;
        font-family: "Quicksand";
        font-size: 10px;
      }
    `}
  />
);

export const SectionSearch = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 4rem;
  @media (max-width: 690px) {
    margin-top: 2.5rem;
  }
`;

export const SectionCategory = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
`;

export const Label = styled.label`
  font-size: 3rem;
`;

export const Input = styled.input`
  border-radius: 5px;
  font-size: 2rem;
  padding: 1rem;
  margin: 1rem 0;
  width: 40%;
  @media (max-width: 690px) {
    width: 75%;
  }
`;
export const Button = styled.button`
  border-radius: 8px;
  border: 1px solid red;
  margin: 2rem 1.5rem 1rem;
  padding: 1.5rem;
  display: inline-block;
  color: red;
  background-color: #1f1a1a;
  font-size: 2rem;
  width: 15%;
  cursor: pointer;
  @media (max-width: 690px) {
    width: 45%;
  }
`;

/** List */

export const Grid = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, 30rem);
  grid-template-rows: repeat(auto-fill, 50rem);
  justify-content: center;
  grid-gap: 4rem;
  width: 100vw;
`;

export const ListComics = styled.ul`
  list-style: none;
  padding: 2rem 1rem;
  margin: 2rem 0;
`;

export const Card = styled.div`
  width: 320px;
  height: 460px;
  box-shadow: 5px 10px 15px rgb(0 0 0 / 10%);
  cursor: pointer;
  object-fit: cover;
  margin-top: 3rem;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.p`
  color: black;
  font-size: 2.5rem;
  padding: -10rem 0;
  text-align: center;
`;

export const Img = styled.img`
  height: 320px;
  width: 240px;
  object-fit: fill;
`;
