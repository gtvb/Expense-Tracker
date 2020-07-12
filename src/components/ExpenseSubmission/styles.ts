import styled from "styled-components";

export const Container = styled.div`
   width: 100%;

   display: flex;
   align-items: center;
   justify-content: center;
   flex-direction: column;

   margin: 5px;
`

export const Form = styled.div`
   width: 100%;

   display: flex;
   align-items: center;
   justify-content: space-evenly;
   flex-direction: column;

   margin-left: 8px;
   margin-right: 8px;

   > h4 {
     align-self: flex-start;
     padding: 16px;
   }

   > h3 {
     font-size: 24px;
     padding: 16px;
   }

`


export const InputElement = styled.input`
  width: 90%;
  height: 45px;
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-top: 16px;
  margin-bottom: 16px;
  
  &::placeholder {
     color: #555;
     font-size: 16px;
  }
`
   

export const AddBtn = styled.button`
  width: 90%;
  padding: 10px 0;
  border: none;
  border-radius: 4px;
  background: #5762D5;
  margin-top: 24px;

  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 24px;
`