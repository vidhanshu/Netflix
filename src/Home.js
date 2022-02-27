import { useState, useEffect } from "react";
import jsonData from "./api/movies.json";
import styles from "./styles/CardContainer.module.scss";
import Card from "./components/Card";
function Home() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState(jsonData);
  useEffect(() => {
    setData(["apple", "banana", "kappa", "raju", "rajan"]);
  }, []);
  const searchHandler = (evt) => {
    setSearch(evt.target.value.toLowerCase());
  };
  return (
    <div className={styles.cards_container}>
      <input
        className={styles.search_bar}
        onChange={searchHandler}
        type="text"
        placeholder="search"
      />
      <div className={styles.sub_movie_container}>
        {movies.recommendation.map((e, idx) => {
          return (
            <div className={styles.movies_container} key={idx}>
              {<h2 className={styles.recommendation}>{e.name}</h2>}
              <div className={styles.movies}>
                {e.movie
                  .filter((l) => {
                    if (
                      l.movie_name.toLowerCase().includes(search) ||
                      l.category.toLowerCase().includes(search) ||
                      l.description.toLowerCase().includes(search) ||
                      e.name.toLowerCase().includes(search) ||
                      search.trim() == ""
                    ) {
                      return true;
                    } else {
                      return false;
                    }
                  })
                  .map((k, idx) => {
                    return (
                      <Card
                        image={k.image}
                        movie_name={k.movie_name}
                        description={k.description}
                        duration={k.duration}
                        category={k.category}
                        key={idx}
                      />
                    );
                  })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
