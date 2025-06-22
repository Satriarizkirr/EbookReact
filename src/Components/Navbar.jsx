import Navigation from "./Navigation";
import Lottie from "lottie-react";
import books from "../assets/books.json";

export default function Navbar() {
  return (
    <div className="hero">
      <Navigation />
      <div className="homepage--texts">
      <h1 className="nav--text">A WORLD IN PAGES</h1>
      <p className="nav--para">
        Embark on a literary adventure where every click opens a new chapter, and every story is waiting to be explored by its readers.
Welcome to the world of ebooks, where dreams come true on every page.
      </p>
      <p className="nav--subpara">Developed by Satria Rizki R</p>
      </div>
      <div className="lottie--container">
        <Lottie animationData={books} />
      </div>
    </div>
  );
}
