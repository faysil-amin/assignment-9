import React, { createContext, useState } from "react";
import { useLoaderData } from "react-router";
import Card from "./Card/Card";
import Container from "./Container";
import Search from "./Search/Search";
export const contextProvider = createContext();
const Home = () => {
  const game = useLoaderData();
  const [store, setStore] = useState(null);
  return (
    <contextProvider.Provider value={{ setStore }}>
      <Container>
        <Search></Search>
        <div className="grid md:grid-cols-4 gap-8 my-12">
          {store
            ? store.map((res) => <Card res={res}></Card>)
            : game.map((res) => <Card res={res}></Card>)}
        </div>
      </Container>
    </contextProvider.Provider>
  );
};

export default Home;
