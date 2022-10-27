import React from 'react';
import styled from 'styled-components';

const Layout = ({ children }) => {
  return <StLayout>{children}</StLayout>;
};

export default Layout;

const StLayout = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  max-width: 1440px;
  margin: auto;
`;
