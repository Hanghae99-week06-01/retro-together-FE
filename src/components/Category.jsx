import React from 'react';
import styled from 'styled-components';

const Category = () => {
  return (
    <StCategory>
      <StCategoryWrap>#React</StCategoryWrap>
      <StCategoryWrap>#Javascript</StCategoryWrap>
      <StCategoryWrap>#Typescript</StCategoryWrap>
      <StCategoryWrap>#Vue</StCategoryWrap>
      <StCategoryWrap>#Spring</StCategoryWrap>
      <StCategoryWrap>#Java</StCategoryWrap>
      <StCategoryWrap>#Node</StCategoryWrap>
      <StCategoryWrap>#Python</StCategoryWrap>
    </StCategory>
  );
};

export default Category;

const StCategory = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 50px 0;
  gap: 25px;
`;

const StCategoryWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #576f72;
  font-size: 22px;
  font-weight: 400;
  width: 140px;
  height: 40px;
  border-radius: 25px;
  :hover {
    cursor: pointer;
    background-color: #f7931d;
  }
`;
