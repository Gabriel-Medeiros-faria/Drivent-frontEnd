import styled from 'styled-components';

export default function WithoutPay() {
  return (
    <WhithouPayContainer>
      <h1>Escolha de hotel e quarto</h1>
      <MessageWithouPay>
        <p>Você precisa ter confirmado pagamento antes de fazer a escolha de hospedagem</p>
      </MessageWithouPay>
    </WhithouPayContainer>
  );
}

const WhithouPayContainer = styled.div`
  font-size: 34px;
  height: 95%;
`;

const MessageWithouPay = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    font-size: 20px;
    color: #8e8e8e;
  }
`;
