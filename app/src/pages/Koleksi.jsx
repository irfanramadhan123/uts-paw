import { useState } from 'react'
import useKoleksi from '../hooks/useKoleksi.js'
import KotakPencarian from '../components/KotakPencarian.jsx'
import KartuItem from '../components/KartuItem.jsx'
import PesanKosong from '../components/TampilPesanKosong.jsx'   
import FilterKategori from '../components/FilterKategori.jsx'

export default function Koleksi() {
  const { items, loading, error } = useKoleksi()
  const [cari, setCari] = useState('')
  const [kategori, setKategori] = useState('Semua')

  if (loading) return <p>Memuat data...</p>
  if (error) return <p role="alert">Gagal memuat: {error}</p>

  const daftarKategori = ['Semua', ...new Set(items.map((item) => item.kategori))]
  const tampil = items.filter(
    (item) =>
      item.judul.toLowerCase().includes(cari.toLowerCase()) &&
      (kategori === 'Semua' || item.kategori === kategori),
  )

  return (
    <section>
      <h1>Koleksi</h1>
      <div className="alat-koleksi">
        <KotakPencarian nilai={cari} onUbah={setCari} />
        <FilterKategori daftar={daftarKategori} nilai={kategori} onUbah={setKategori} />
      </div>
      {tampil.length === 0 ? (
        <PesanKosong/>
      ) : (
        <div className="daftar-kartu">
          {tampil.map((item) => (
            <KartuItem key={item.id} item={item} />
          ))}
        </div>
      )}
    </section>
  )
}