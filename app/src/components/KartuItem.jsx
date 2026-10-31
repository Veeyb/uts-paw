import { Link } from 'react-router-dom'

export default function KartuItem({ item }) {
  const { id, judul, kategori, namaLatin, frekuensiSiram, kebutuhanCahaya } = item
  return (
    <article className="kartu">
      <h3>
        <Link to={`/koleksi/${id}`}>{judul}</Link>
      </h3>
      <p>
        Kategori: {kategori}
      </p>
      <p>
        Nama Latin: {namaLatin}
      </p>
      <p>
        Frekuensi Siram: {frekuensiSiram}
      </p>
      <p>
        Kebutuhan Cahaya: {kebutuhanCahaya}
      </p>
    </article>
  )
}