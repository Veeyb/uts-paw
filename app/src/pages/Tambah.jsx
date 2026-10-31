import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useKoleksi from '../hooks/useKoleksi.js'
import './Tambah.css'

const AWAL = { judul: '', kategori: '', namaLatin: '', frekuensiSiram: '' , kebutuhanCahaya: ''}

export default function Tambah() {
  const { tambah } = useKoleksi()
  const navigate = useNavigate()
  const [form, setForm] = useState(AWAL)
  const [galat, setGalat] = useState('')

  const ubah = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const simpan = (e) => {
    e.preventDefault()
    if (form.judul.trim().length < 3) {
      setGalat('Judul wajib diisi, minimal 3 karakter.')
      return
    }
    tambah({ ...form, judul: form.judul.trim() })
    navigate('/koleksi')
  }

  return (
    <form className="formulir" onSubmit={simpan} noValidate>
      <h1>Tambah Tanaman</h1>

      <label htmlFor="judul">Judul</label>
      <input id="judul" name="judul" value={form.judul} onChange={ubah} placeholder="Nama Tanaman"/>
      {galat && <p role="alert">{galat}</p>}

      <label htmlFor="kategori">Kategori</label>
      <select id="kategori" name="Tanaman Hias" value={form.kategori} onChange={ubah}>
        <option>Tanaman Hias Daun</option>
        <option>Tanaman Hias Bunga</option>
        <option>Tanaman Hias Merambat</option>
        <option>Tanaman Hias Semak</option>
        <option>Tanaman Hias Kaktus</option>
        <option>Tanaman Hias Bonsai</option>
      </select>

      <label htmlFor="namaLatin">Nama Latin</label>
      <input id="namaLatin" name="Nama Latin" value={form.namaLatin} onChange={ubah} placeholder="Masukkan Nama Latin Tanaman"/>

      <label htmlFor="frekuensiSiram">Frekuensi Siram</label>
      <input id="frekuensiSiram" name="Frekuensi Siram" value={form.frekuensiSiram} onChange={ubah} placeholder="Contoh: 1 Kali Seminggu"/>

      <label htmlFor="kebutuhanCahaya">Kebutuhan Cahaya</label>
      <select id="kebutuhanCahaya" name="Kebutuhan Cahaya" value={form.kebutuhanCahaya} onChange={ubah}>
        <option value="rendah">Rendah</option>
        <option value="sedang">Sedang</option>
        <option value="tinggi">Tinggi</option>
      </select>

      <button type="submit">Simpan</button>
    </form>
  )
}