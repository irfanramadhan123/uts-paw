export default function FilterKategori(props) {
  const ubahPilihan = (event) => {
    props.onUbah(event.target.value)
  }

  const pilihan = props.daftar.map((nama) => (
    <option key={nama} value={nama}>
      {nama}
    </option>
  ))

  return (
    <select aria-label="Kategori" value={props.nilai} onChange={ubahPilihan}>
      {pilihan}
    </select>
  )
}