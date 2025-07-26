import Link from "next/link";

export default function Home() {
  return (
    <div className="container" style={{ padding: "20px" }}>
      <h1>About Us</h1>
      <p>
        Halo! Saya Rifqi Mualwan. Saat ini saya sedang fokus mengembangkan
        aplikasi Aggregator (DIMAS) di TMA.
      </p>
      <h2>Harapan Terhadap TMA</h2>
      <p>
        Harapan saya terhadap TMA adalah bisa mendapatkan banyak ilmu dan
        pengalaman terbaik di TMA serta bisa membangun bersama TMA ke arah yang
        lebih baik untuk kedepannya. Dan untuk TMA kedepannya semoga lebih
        berkembang lagi dan bisa dikenal luas sampai luar negeri.
      </p>
      <h2>Hiburan</h2>
      <p>Aku punya joke seru nih, semoga bisa bikin kamu ketawa ya</p>
      <Link href="/page-joke">
        <button className="btn">Bisa diklik disini</button>
      </Link>
    </div>
  );
}
