i port React, { useEffect, useState } from "react";
import SearchComic from "../components/SearchComic";
import CategoryButton from "../components/CategoryButton";
import axios from "axios";
import Image from "next/image";
import logo from "../public/header.jpg";
import {
  Grid,
  Card,
  ListComics,
  Title,
  SectionCategory,
  Img,
} from "../styles/styles";

function Home() {
  const [search, setSearch] = useState("");
  const [comics, setComics] = useState([]);

  /**fecth api  */
  const getApi = async () => {
    const url =
      "https://gateway.marvel.com:443/v1/public/comics?ts=100&apikey=04f856697a744b4852f6b36fdb96ba3d&hash=9d1f23cffb317fd63f9c255f48e0310b";

    const response = await axios(url);
    setComics(response.data.data.results);
    /*       .get(url)
      .then((response) => {
        setComics(response.data.data.results);
      })
      .catch((error) => {
        console.log(error);
      }); */
  };

  /** Filter comics for title */
  const filterComics = (comicSearch) => {
    const resultsComics = comics.filter((result) => {
      if (
        result.title
          .toString()
          .toLowerCase()
          .includes(comicSearch.toLowerCase())
      ) {
        return result;
      }
    });
    setComics(resultsComics);
  };

  /** filter character */
  const filterCharacter = (category) => {
    const filterCategory = comics.filter((result) =>
      result.title.includes(category)
    );
    setComics(filterCategory);
  };

  useEffect(() => {
    getApi();
  }, []);
  /*   const res = comics;
  console.log(res); */
  return (
    <>
      <Image src={logo} alt="Marvel Banner" layout="responsive" priority />

      <SearchComic
        search={search}
        setSearch={setSearch}
        filterComics={filterComics}
      />
      <SectionCategory>
        <CategoryButton category="Marvel" filterCharacter={filterCharacter} />
        <CategoryButton category="Storm" filterCharacter={filterCharacter} />
        <CategoryButton category="Ant-Man" filterCharacter={filterCharacter} />
        <CategoryButton
          category="Gun Theory"
          filterCharacter={filterCharacter}
        />
      </SectionCategory>
      <Grid>
        {comics &&
          comics.map((comic) => (
            <Card key={comic.id}>
              <ListComics>
                <li>
                  <Img
                    src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
                    alt={comic.title}
                  />
                  <Title> {comic.title} </Title>
                </li>
              </ListComics>
            </Card>
          ))}
      </Grid>
    </>
  );
}

export default Home;
