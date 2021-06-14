import Art from "../components/art";
import Header from "../components/header";
import { useState, useEffect } from "react";

function Home() {
  const [unsplashData, addInfo] = useState([]);
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch(
      "https://api.unsplash.com/photos/random?count=5&client_id=WmLH-1Zu-hiJefsfGCXi4LffMXgQmCxHc5m9RbCQ5-I"
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setLoading(false);
        const unsplashInfos = [];

        for (const key in data) {
          const unsplashInfo = {
            id: key,
            ...data[key],
          };
          unsplashInfos.push(unsplashInfo);
        }
        addInfo(unsplashInfos);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <Header />
        <div className="spacer"></div>
        <p className="loading">Loading...</p>
      </section>
    );
  }

  return (
    <div>
      <Header />
      <div className="spacer"></div>
      <ul>
        {unsplashData.map((allUnsplashData) => {
          return (
            <Art
              key={allUnsplashData.id}
              author={allUnsplashData.user.name}
              image={allUnsplashData.urls.full}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default Home;
