import React from 'react';
import styled from 'styled-components';

const Category = () => {
  return (
    <StCategory>
      <StCategoryWrap
        onClick={() => {
          window.open('https://ko.reactjs.org/');
        }}
      >
        #React
      </StCategoryWrap>
      <StCategoryWrap
        onClick={() => {
          window.open('https://javascript.info/');
        }}
      >
        #Javascript
      </StCategoryWrap>
      <StCategoryWrap
        onClick={() => {
          window.open('https://www.typescriptlang.org/');
        }}
      >
        #Typescript
      </StCategoryWrap>
      <StCategoryWrap
        onClick={() => {
          window.open('https://v3.ko.vuejs.org/guide/introduction.html');
        }}
      >
        #Vue
      </StCategoryWrap>
      <StCategoryWrap
        onClick={() => {
          window.open(
            'https://docs.spring.io/spring-framework/docs/current/reference/html/'
          );
        }}
      >
        #Spring
      </StCategoryWrap>
      <StCategoryWrap
        onClick={() => {
          window.open(
            'https://docs.oracle.com/javase/8/docs/api/org/w3c/dom/Document.html'
          );
        }}
      >
        #Java
      </StCategoryWrap>
      <StCategoryWrap
        onClick={() => {
          window.open('https://nodejs.org/ko/docs/');
        }}
      >
        #Node
      </StCategoryWrap>
      <StCategoryWrap
        onClick={() => {
          window.open('https://docs.python.org/ko/3/');
        }}
      >
        #Python
      </StCategoryWrap>
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

const StCategoryWrap = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 22px;
  font-weight: 400;

  width: 140px;
  height: 40px;

  border: 0px;
  border-radius: 25px;
  background-color: #576f72;
  :hover {
    cursor: pointer;
    background-color: #f7931d;
  }
`;
