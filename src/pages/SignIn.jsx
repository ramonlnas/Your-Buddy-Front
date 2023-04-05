import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Logo from "../assets/images/your-buddy-low-resolution-logo-color-on-transparent-background.png";
export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Corpo>
      <img src={Logo} alt="Logo"></img>

      <DivLogin>
        <form>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="E-mail"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Senha"
          />

          <button type="submit">Entrar</button>
        </form>
      </DivLogin>
      <Link to={"/sign-up"}>
        <p>Não possuí uma conta? Cadastre-se</p>
      </Link>
    </Corpo>
  );
}
const Corpo = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #755bb4;
  h1 {
    font-size: 32px;
    line-height: 50px;
    color: #ffffff;
    margin-bottom: 24px;
  }
  p {
    font-weight: 700;
    font-size: 15px;
    line-height: 18px;
    color: #ffffff;
    text-decoration: none;
  }
  img {
    width: 350px;
    height: 245px;
    margin-bottom: 20px;
  }
`;
const DivLogin = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 299px;
  input {
    height: 58px;
    width: 326px;
    border-radius: 5px;
    padding: 18px 0px 18px 14px;
    font-size: 20px;
    line-height: 23px;
    color: #000000;
    margin-bottom: 13px;
  }
  button {
    width: 326px;
    height: 46px;
    background: #BB84E8;
    border-radius: 5px;
    margin: 8px 0px 24px 0px;
    font-family: "Raleway";
    font-weight: 700;
    font-size: 20px;
    line-height: 23px;
    color: #ffffff;
    margin-bottom: 36px;
  }
`;
