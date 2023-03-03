import { useState } from 'react';
import styled from 'styled-components';

export default function PaymentInPerson(props) {
  const { setWithOrWithoutHotel } = props;
  return (
    <>
      <PaymentContainer>
        <p>Ótimo! Agora escolha sua modalidade de hospedagem</p>
        <Methods>
          <InPersonMethod onClick={() => setWithOrWithoutHotel(true)}>
            <p>Sem Hotel</p>
            <p>R$ 0</p>
          </InPersonMethod>
          <OnlineMethod onClick={() => setWithOrWithoutHotel(true)}>
            <p>Com hotel</p>
            <p>+ R$ 350</p>
          </OnlineMethod>
        </Methods>
      </PaymentContainer>
    </>
  );
}

const PaymentContainer = styled.div`
  h1 {
    font-size: 34px;
    margin-bottom: 37px;
  }
  p {
    color: #8e8e8e;
    margin-bottom: 17px;
  }
  margin-bottom: 43px;
`;

const InPersonMethod = styled.div`
  width: 145px;
  height: 145px;
  border-radius: 10px;
  border: 1px solid #cecece;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 24px;

  p:nth-child(1) {
    color: #454545;
  }

  :hover {
    background-color: #ccc;
  }

  cursor: pointer;
`;

const OnlineMethod = styled.div`
  width: 145px;
  height: 145px;
  border-radius: 10px;
  border: 1px solid #cecece;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p:nth-child(1) {
    color: #454545;
  }

  :hover {
    background-color: #ccc;
  }

  cursor: pointer;
`;

const Methods = styled.div`
  display: flex;
`;
