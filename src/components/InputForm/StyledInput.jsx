import styled from 'styled-components';

export const InputTaskInput = styled.input`
  border: 1px solid #ccc;
  border-radius: 5px;
  padding:.5rem 0;
  color: var(--colorFontLight);
  width:435px;
  font-family:var(--fontNormal);
  background-color:var(--backgroundInput);
  border:1px solid var(--colorFontDark);
  font-size:1rem;
  text-align:start;
  outline:none;
  padding-left:1rem;
  transition:focus 100ms ease-in-out;
  &::placeholder {
  color: var(--colorFontLight);
  text-align:start;
  }
  &:focus {
  border:1px solid var(--buttonPrimary);
  transition:focus 100ms ease-in-out;
  }
  @media (max-width: 620px) {
  width:95%;
  text-align:center;
  padding-left:0;
  &::placeholder {
    text-align:center;
  }
  }
  @media (max-width: 285px) {
  font-size:.75rem;
  }
`;

export const InputTaskButton = styled.button`
  padding: .55rem 1.25rem;
  font-family:var(--fontNormal);
  border:1px solid var(--buttonPrimary);
  border-radius: 5px;
  background-color: var(--buttonPrimary);
  color: var(--colorFontDark);
  text-shadow:1px 1px black;
  font-size:1rem;
  cursor: pointer;
  text-align:center;
  transition: all 25ms ease-in-out;
  &:hover {
  transform:scale(1.05);
  transition: all 25ms ease-in-out;
  }
  &:active {
  transform:scale(.9);
  transition: all 25ms ease-in-out;
  }
  @media (max-width: 620px) {
  width:95%;
  }
`;