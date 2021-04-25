import { createGlobalStyle } from 'styled-components';

const ResetStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    outline: 0 !important;
  }
  html,
  body,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  div,
  p,
  blockquote,
  pre,
  code,
  address,
  ul,
  ol,
  li,
  menu,
  nav,
  section,
  article,
  aside,
  dl,
  dt,
  dd,
  table,
  thead,
  tbody,
  tfoot,
  label,
  caption,
  th,
  td,
  form,
  fieldset,
  legend,
  hr,
  input,
  button,
  textarea,
  object,
  figure,
  figcaption {
    margin: 0;
    padding: 0;
  }
  html,
  body {
    width: 100%;
  }

  body {
    width: 100%;
    min-width: 320px;
    word-wrap: break-word;
    word-break: break-all;
  }

  body,
  input,
  select,
  textarea,
  button {
    border: none;
    font-size: 1rem;
  }

  ul,
  ol,
  li {
    list-style: none;
  }
  table {
    width: 100%;
    border-spacing: 0;
    border-collapse: collapse;
  }
  img,
  fieldset {
    border: 0;
  }
  address,
  cite,
  code,
  em {
    font-style: normal;
    font-weight: normal;
  }
  label,
  img,
  input,
  select,
  textarea,
  button {
    vertical-align: middle;
  }

  hr {
    display: none;
  }
  main,
  header,
  section,
  nav,
  footer,
  aside,
  article,
  figure {
    display: block;
  }
  a {
    color: #000;
    text-decoration: none;
  }

  /* Form */
  textarea {
    border: 1px solid #dbdbdb;
  }

  select {
    height: 32px;
    font-size: 13px;
    color: black;
    border: 1px solid black;
    border-radius: 5px;
  }

  input[type='tel'],
  input[type='time'],
  input[type='text'],
  input[type='password'],
  input[type='search'],
  input[type='email'],
  input[type='file'],
  input[type='url'],
  input[type='number'],
  input[type='date'],
  textarea {
    width: 100%;
    height: 30px;
    font-size: 1rem;
    color: black;
    border: 1px solid black;
    text-indent: 20px;
    border-radius: 5px;
    transition: all 0.5s;
    vertical-align: middle;
  }

  select:focus,
  textarea:focus,
  input:focus {
    border: 1px solid black;
  }

  input[type='tel'][readonly],
  input[type='text'][readonly],
  input[type='password'][readonly],
  input[type='email'][readonly],
  input[type='search'][readonly],
  input[type='tel'][disabled],
  input[type='text'][disabled],
  input[type='password'][disabled],
  input[type='search'][disabled],
  input[type='email'][disabled] {
    background: #eaeaea;
    border-color: #c0c0c0;
    font-size: 1rem;
  }
`;

export default ResetStyle;
