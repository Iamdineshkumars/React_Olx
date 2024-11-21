import styled from "styled-components";

const Wrapper = styled.div`
.cart_main{
 margin:70px;
 display:flex;
 margin-left:120px;
 flex-wrap:wrap;
 gap:20px;
}
 .images{
 height:300px;
 width:400px;
 }
 .cart{
   border:1px solid ;
   width:400px;
  
   text-decoration:none;
 }
   .font-style{
     margin-left:60px;
      text-decoration:none;
      font-family:Arial;
   }
     .cart:hover{
      background-color:#808080;
      box-shadow: 10px 10px 20px rgba(36, 36, 36, 0.5); 
      //transition-delay: 2s;   
       
     }
    

`
export default Wrapper