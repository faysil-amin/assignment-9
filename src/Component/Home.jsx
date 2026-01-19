import React from "react";
import { useLoaderData } from "react-router";
import Card from "./Card/Card";
import Container from "./Container";

const Home = () => {
  const game = useLoaderData();
  return (
    <Container>
      <div className="grid md:grid-cols-4 gap-8 my-12">
        {game.map((res) => (
          <Card res={res}></Card>
        ))}
      </div>
    </Container>
  );
};

export default Home;
