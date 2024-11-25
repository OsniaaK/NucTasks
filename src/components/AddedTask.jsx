import styled from "styled-components"; 

const ContainerTask = styled.article`
    display:flex;
    flex-direction:row;
    width:100%;
    max-width:100%;
    justify-content:space-between;
    align-items:center;
    padding:0 1.5rem;
    position:relative;
    &::before {
    position: absolute;
    content:"";
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
    display:none;
    }

`

const TitleTask = styled.p`
    color:var(--colorFontLight);
    font-family:var(--fontNormal);
    overflow-wrap: break-word;
    word-wrap: break-word;
    max-width: 55%;
    text-align:left;
    cursor:default;
`

const ButtonDelete = styled.button`
    font-family:var(--fontNormal);
    width:75px;
    padding:.25rem .75rem;
    font-size: 1rem;
    color: white;
    cursor: pointer;
    transition: 150ms ease-in-out all;
    background-color: #f84e50;
    border-radius: 7px; 
    border: none;
    &:hover {
    transform: scale(1.1);
    transition: 150ms ease-in-out all;
    }
`

export const AddedTask = ({taskName, clase}) => {
    return (
    <ContainerTask>
    <TitleTask>{taskName}</TitleTask>
    <ButtonDelete type="button" className={clase}>Borrar</ButtonDelete>
    </ContainerTask>
    )
}

import PropTypes from 'prop-types';
AddedTask.propTypes = {
    taskName: PropTypes.string.isRequired,
    clase: PropTypes.string.isRequired,
  };
