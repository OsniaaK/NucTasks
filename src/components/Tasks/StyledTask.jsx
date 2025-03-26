import styled from "styled-components";

export const ContainerTask = styled.article`
  display: flex;
  flex-direction: row;
  width: 100%;
  max-width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 0 1.5rem;
  position: relative;
  &::before {
    position: absolute;
    content: "";
    width: 70%;
    height: 2px;
    border-radius: 10px;
    background-color: #cccccc;
    bottom: -11px;
    left: 0;
    right: 0;
    margin: auto;
  }
  &:last-child::before {
    display: none;
  }
`;

export const TitleTask = styled.p`
  color: var(--colorFontLight);
  font-family: var(--fontNormal);
  overflow-wrap: break-word;
  word-wrap: break-word;
  max-width: 55%;
  text-align: left;
  cursor: default;
`;

export const ButtonDelete = styled.button`
  font-family: var(--fontNormal);
  font-size: 1rem;
  color: white;
  cursor: pointer;
  transition: 150ms ease-in-out all;
  background-color: #f84e50;
  border-radius: 5px;
  border: none;
  min-width: 0.9in;
  min-height: 0.35in;
  z-index: 10;
  &:hover {
    transform: scale(1.1);
    transition: 150ms ease-in-out all;
  }
`;

