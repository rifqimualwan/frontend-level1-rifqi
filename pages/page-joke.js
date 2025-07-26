import { useEffect, useState } from "react";
import Link from "next/link";

export default function JokePage() {
  const [joke, setJoke] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://official-joke-api.appspot.com/random_joke")
      .then((res) => res.json())
      .then((data) => {
        setJoke(data);
        setIsLoading(false);
      });
  }, []);

  function JokeCard({ isLoading, joke }) {
    if (isLoading) {
      return <p className="loading">Loading...</p>;
    }

    return (
      <div className="card">
        <p>
          <strong>{joke.setup}</strong>
        </p>
        <p>{joke.punchline}</p>
      </div>
    );
  }

  return (
    <div className="container" style={{ padding: "20px" }}>
      <Link href="/">
        <button className="btn">Kembali</button>
      </Link>

      <h1>Hiburan</h1>
      <p>Satu joke buat kamu. Semoga bisa bikin ketawa!</p>

      <JokeCard isLoading={isLoading} joke={joke} />
    </div>
  );
}
