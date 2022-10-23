import React from 'react';
import styled from 'styled-components';

const Modal = ({ children }) => {
  return (
    <StModal>
      <StModalOverlay></StModalOverlay>
      <StModalContnent>{children}</StModalContnent>
    </StModal>
  );
};

export default Modal;

const StModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StModalOverlay = styled.div`
  background-color: rgba(0, 0, 0, 0.6);
  width: 100%;
  height: 100%;
  position: absolute;
`;

const StModalContnent = styled.div`
  background-color: white;
  padding: 50px 100px;
  text-align: center;
  position: relative;
  border-radius: 10px;
  width: 50%;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
`;
