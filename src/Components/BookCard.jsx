import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import tag from "../assets/icons/tag.png";

export default function BookCard(props) {
  function handleDownload() {
    const ebookPath = `/books/${props.data.value}.epub`;
    window.open(ebookPath, "_blank");
  }
  return (
    <div className="card">
      <img src={props.data.img} alt="" className="card--image" />
      <div>
        <p className="card--title">{props.data.title}</p>
        <p className="card--author">{props.data.author}</p>
        <p className="card--genre">
          <img src={tag} alt="" className="tag--icon" />
          {props.data.genre}
        </p>
      </div>

      <div className="card--actions">
        {/* Tombol Download tetap sama */}
        <button className="card--btn" onClick={handleDownload}>
          Download
        </button>

        {/* UBAH BAGIAN INI: Hapus <button> di dalam <Link> */}
        <Link to={`/read/${props.data.value}.epub`} className="card--btn read--btn">
           Baca Online
        </Link>
      </div>

    </div>
  );
}

BookCard.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number,
    value: PropTypes.string,
    img: PropTypes.string,
    title: PropTypes.string,
    author: PropTypes.string,
    genre: PropTypes.string,
    pages: PropTypes.number,
  }),
};