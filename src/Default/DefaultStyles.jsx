import styled from "styled-components";

export const MainStyled = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 600px;
  min-heigth: 400px;
  padding: 1.5rem 0;
  background-color: var(--containerBGC);
  gap: 1.25rem;
  border-radius: 15px;
  box-shadow: rgba(0, 0, 0, 0.304) 0px 0px 7px 1px;
  @media (max-width: 620px) {
    width: 95%;
  }
`;

export const TitleTasks = styled.h1`
  font-family: var(--fontNormal);
  color: var(--colorFontLight);
  padding-top: 0.25rem;
  cursor: default;
`;

export const FormStyled = styled.form`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  gap: 0.75rem;
  @media (max-width: 620px) {
    flex-direction: column;
  }
`;
export const ContainerList = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  transition: 150ms ease-in-out all;
  gap:1rem;
  & > div {
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    gap: 1.2rem;
    transition: 150ms ease-in-out all;
  }
`;

export const NullTasks = styled.p`
  color: #f84e50;
  cursor: default;
  text-shadow: black 1px 1px;
  font-family: var(--fontNormal);
  font-size: 1.15rem;
  font-weight: 600;
  letter-spacing: 1px;
  align-self: center;
  text-align: center;
`;
