import styled from "styled-components"

const Wrapper = styled.nav`
.nav1{
background-color:green;
padding:20px;
display:flex;
justify-content:space-between;
}
.logo{
 font-size:20px;
 color:white;
 font-weight:400px;
 font-family:"Trebuchet MS", Helvetica, sans-serif;
}
.links{
 text-decoration:none;
 color:white;
 padding:10px;
}
 .nav2{
  display:flex;
  flex-direction:row
 }
  .login{
   text-decoration:none;
   color:white;
   font-size:20px;
  }
   .login:hover{
    color:orange;
   
   }
    .email{
     
    padding-right:300px;
   }}
    .welcome{
    font-size:20px;
      color:white
    }
    .route{
    
    margin-top:10px;
    }






`
export default Wrapper
