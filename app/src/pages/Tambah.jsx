import { useNavigate } from 'react-router-dom'

export default function Tambah() {
  const navigate = useNavigate()
  return (
    <button type="button" onClick={() => navigate('/koleksi')}>
      Kembali
    </button>
  )
}