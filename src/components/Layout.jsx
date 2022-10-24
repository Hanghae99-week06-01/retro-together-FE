import React from 'react';
import styled from 'styled-components';

const Layout = ({ children }) => {
  return <StLayout>{children}</StLayout>;
};

export default Layout;

const StLayout = styled.div`
  padding: 0;
  margin: auto;
  display: block;

  width: 100%;
  height: 100%;
  max-width: 1800px;
`;
