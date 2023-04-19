import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';
import phones from '../images/phones.jpg';
export const GlobalStyle = createGlobalStyle`

body{
background-image: url('${phones}');
background-repeat: no-repeat;
background-size: cover;
color: #1f2868;
font-size:20px;}

ul{
list-style: none;
padding-left: 0;
}


input{
width: 400px;
height: 35px;
display:block;
padding:5px}

p{
margin: 0;}

h1,h2, h3{
margin: 0}
a{text-decoration:none;color:inherit;
}`;
