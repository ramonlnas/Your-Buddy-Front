import { Form } from "react-router-dom";
import styled from "styled-components";
import cat from "../assets/images/black-cat.256x168.png";
import AnoterCat from "../assets/images/Cat_November_2010-1a.jpg";
import dog from "../assets/images/Captura de tela de 2023-03-30 12-39-07.png";
import parrots from "../assets/images/parrot.png";
import bunnies from "../assets/images/rabbit.png";
import hamster from "../assets/images/hamster.png";
import turtle from "../assets/images/turtle.png";
import Sidebar from "../components/Sidebar.jsx";
import { useState } from "react";

export default function Home() {
  return (
    <>
      <Sidebar />

      <Page>
        <Main>
          <Search>
            <form>
              <input placeholder="Selecione um pet para adotar"></input>
            </form>
          </Search>
          <Category>
            <CardCategory>
              <img src={cat} alt="cat1" />
              <h1>Cats</h1>
            </CardCategory>
            <CardCategory>
              <img src={dog} alt="cat" />
              <h1>Dogs</h1>
            </CardCategory>
            <CardCategory>
              <img src={parrots} alt="cat" />
              <h1>Parrots</h1>
            </CardCategory>
            <CardCategory>
              <img src={parrots} alt="cat" />
              <h1>Bunnies</h1>
            </CardCategory>
            <CardCategory>
              <img src={turtle} alt="cat" />
              <h1>Turtle</h1>
            </CardCategory>
            <CardCategory>
              <img src={hamster} alt="cat" />
              <h1>Bunnies</h1>
            </CardCategory>
          </Category>
          <CardPet>
            <img src={AnoterCat} alt="Cat1" />
            <CardDetails>
              <NamePet>
                <h1>Sola</h1>
                <ion-icon name="male-outline"></ion-icon>
              </NamePet>
              <h2>Abyssinian cat</h2>
              <h3>2 years old</h3>
              <DistanceDiv>
                <ion-icon name="location-sharp"></ion-icon>
                <span> Distance: 3.6km</span>
              </DistanceDiv>
            </CardDetails>
          </CardPet>
          <CardPet>
            <img src={AnoterCat} alt="Cat1" />
            <CardDetails>
              <NamePet>
                <h1>Sola</h1>
                <ion-icon name="male-outline"></ion-icon>
              </NamePet>
              <h2>Abyssinian cat</h2>
              <h3>2 years old</h3>
              <DistanceDiv>
                <ion-icon name="location-sharp"></ion-icon>
                <span> Distance: 3.6km</span>
              </DistanceDiv>
            </CardDetails>
          </CardPet>

          <CardPet>
            <img src={AnoterCat} alt="Cat1" />
            <CardDetails>
              <NamePet>
                <h1>Sola</h1>
                <ion-icon name="male-outline"></ion-icon>
              </NamePet>
              <h2>Abyssinian cat</h2>
              <h3>2 years old</h3>
              <DistanceDiv>
                <ion-icon name="location-sharp"></ion-icon>
                <span> Distance: 3.6km</span>
              </DistanceDiv>
            </CardDetails>
          </CardPet>

          <CardPet>
            <img src={AnoterCat} alt="Cat1" />
            <CardDetails>
              <NamePet>
                <h1>Sola</h1>
                <ion-icon name="male-outline"></ion-icon>
              </NamePet>
              <h2>Abyssinian cat</h2>
              <h3>2 years old</h3>
              <DistanceDiv>
                <ion-icon name="location-sharp"></ion-icon>
                <span> Distance: 3.6km</span>
              </DistanceDiv>
            </CardDetails>
          </CardPet>
        </Main>
      </Page>
    </>
  );
}

const Page = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  * {
    font-family: Robot;
  }
`;

const Main = styled.div`
  width: 414px;
  background-color: #f6f6f6;
  border-radius: 40px;
`;

const Search = styled.div`
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 80px;

  input {
    margin-top: 70px;
    width: 315px;
    height: 40px;
    border-radius: 10px;
    border-color: #ffffff;
    padding-left: 10px;
  }
`;

const Category = styled.div`
  display: flex;
  align-items: center;
  padding-left: 50px;
  overflow-x: scroll;

  ::-webkit-scrollbar {
    width: 0px;
  }
`;

const CardCategory = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 18;
    font-weight: 600;
    color: #a0a1a1;
    margin: 10px 0px 0px 10px;
  }

  img {
    background-color: #ffffff;
    border-radius: 10px;
    width: 50px;
    height: 50px;
    margin-right: 25px;
  }
`;

const CardPet = styled.div`
  width: 315px;
  height: 200px;
  display: flex;
  margin-left: 50px;
  border-radius: 20px;
  background-color: #ffffff;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 0px;
  }

  margin-bottom: 20px;

  img {
    width: 140px;
    height: 200px;
    border-radius: 20px;
    box-shadow: 29px 2px 0px 1px rgba(231, 231, 231, 0.13);
  }
`;

const CardDetails = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 0px 0px 25px;

  h1 {
    font-size: 28px;
    font-weight: 600;
    margin-right: 60px;
    color: #656565;
  }

  h2 {
    font-size: 15px;
    margin-top: 13px;
    color: #959595;
    font-weight: 600;
    font-style: normal;
  }

  h3 {
    font-size: 12px;
    font-weight: 400;
    margin-top: 12px;
    margin-bottom: px;
    color: #9e9ea7;
  }

  span {
    font-size: 17px;
  }
`;
const NamePet = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;

  ion-icon {
    width: 30px;
    height: 22px;
    color: #b3b3b3;
  }
`;

const DistanceDiv = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
  margin-right: 10px;

  ion-icon {
    width: 15px;
    height: 20px;
    color: #3c6363;
    margin-right: 5px;
  }
`;
