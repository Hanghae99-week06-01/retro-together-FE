import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url(//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSansNeo.css);

  * {
    background-color: #121212;
    color: #f5f5f5
  }

  body {
    font-weight: 300;
    font-size: 22px;
    font-family: 'Spoqa Han Sans Neo', 'sans-serif';
    line-height: 1.5;
    word-break: keep-all;
  }
  
  a {
    text-decoration: none;
  }
`;

export default GlobalStyle;

{
  /* <StBtn
  onClick={() => {
    navigate('/Mypage');
  }}
>
  마이페이지
</StBtn>; */
}
