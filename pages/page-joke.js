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

  return (
    <div className="container" style={{ padding: "20px" }}>
      <Link href="/">
        <button className="btn">Kembali</button>
      </Link>

      <h1>Hiburan</h1>
      <p>Satu joke buat kamu. semoga bisa bikin ketawa!</p>

      {isLoading ? (
        <p className="loading">Loading...</p>
      ) : (
        <div className="card">
          <p>
            <strong>{joke.setup}</strong>
          </p>
          <p>{joke.punchline}</p>
        </div>
      )}
    </div>
  );
}
