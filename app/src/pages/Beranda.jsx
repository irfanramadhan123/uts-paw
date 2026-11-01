import { Link } from 'react-router-dom'
import useKoleksi from '../hooks/useKoleksi.js'
import mahasiswa from '../../mahasiswa.json'
import './Beranda.css'

export default function Beranda() {
  const { items, loading } = useKoleksi()
  const jumlahKategori = new Set(items.map((item) => item.kategori)).size

  return (
    <section className="beranda">
      <h1 className="judul">Portofolio Proyek</h1>
      <p className="tema">Tema: {mahasiswa.tema}</p>
      {loading ? (
        <p>Memuat ringkasan...</p>
      ) : (
        <p className="ringkasan">
          Ada {items.length} Portofolio dalam {jumlahKategori} kategori.
        </p>
      )}
      <Link to="/koleksi" className="link">
        Lihat semua portofolio
      </Link>
    </section>
  )
}