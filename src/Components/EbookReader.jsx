import React, { useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import ePub from 'epubjs';
import './EbookReader.css'; // File styling

const EbookReader = () => {
  // Mengambil nama file dari URL, contoh: /read/sapiens.epub -> bookName = "sapiens.epub"
  const { bookName } = useParams();
  const viewerRef = useRef(null);
  const renditionRef = useRef(null);

  useEffect(() => {
    if (viewerRef.current) {
      const bookUrl = `/books/${bookName}`; // Path ke buku di folder public
      const book = ePub(bookUrl);
      const rendition = book.renderTo(viewerRef.current, {
        width: '100%',
        height: '100%',
        spread: 'auto'
      });

      rendition.display();
      renditionRef.current = rendition;

      // Hapus buku dari memori saat komponen dibongkar
      return () => {
        book.destroy();
      };
    }
  }, [bookName]); // Jalankan ulang jika nama buku di URL berubah

  // Fungsi navigasi halaman
  const nextPage = () => renditionRef.current?.next();
  const prevPage = () => renditionRef.current?.prev();

  return (
    <div className="reader-container">
      <div id="prev" className="arrow" onClick={prevPage}>‹</div>
      <div className="viewer-wrapper" ref={viewerRef}></div>
      <div id="next" className="arrow" onClick={nextPage}>›</div>
    </div>
  );
};

export default EbookReader;