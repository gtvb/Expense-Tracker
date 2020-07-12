import styled from "styled-components";

interface IProps {
  type: string;
}

export const Container = styled.div`
  background: #f0f0f5;
`

export const BalanceArea = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-evenly;
  flex-direction: column;

  padding: 25px;
  margin: 16px 0;

  width: 100%;
`

export const BalanceValue = styled.div`
 width: 100%;
 text-align: left;
 margin-bottom: 16px;
`

export const BalanceTable = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;
   height: 100%;

   background: #FFF;
   color: #000;
   padding: 16px;
   border: none;
   border-radius: 8px;
   box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.2);

   width: 100%;

   hr {
     color: #eee;
     height: 75px;
   }
`

export const IncomeSide = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  
  > h1 {
    color: #00ff7f;
    padding-top: 8px;
  }
`

export const ExpenseSide = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  > h1 {
    color: #f13030;
    padding-top: 8px;
  }

  flex-direction: column;
  width: 100%;
`

export const ExpensesList = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;

  width: 100%;
  padding: 25px;

  hr {
    width: 100%;
    margin: 8px 0;
  }
`
export const ExpenseItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.2);

  width: 100%;
  height: 50px;
  padding: 10px;
 
  border: 1px solid #eee;
  border-radius: 4px;
  border-right: 8px solid springgreen;
  border-right-color: ${(props: IProps) => props.type === 'expense' ? '#f13030' : '#00ff7f'};

  background: #fff;

  margin: 10px 0;

  font-size: 16px;
  font-weight: bold;
`

export const DeleteBtn = styled.button`
  background: #fff;
  color: #f13030;
  border: none;
  font-weight: bold;
  font-size: 20px;
  cursor: pointer;
  
  &:focus {
    border: none;
  }
`