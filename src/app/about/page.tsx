export default function About() {
  return (
    <section className="flex justify-center">
      <div className="max-w-md bg-white dark:bg-gray-800 shadow-xl rounded-2xl p-8 border border-gray-200 dark:border-gray-700 text-center">

        <img
          src="/profile.jpg"
          alt="Foto Profil"
          className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-blue-500 shadow-md"
        />

        <h2 className="text-3xl font-bold mb-6">About Me</h2>

        <p className="text-lg mb-3">
          <span className="font-semibold">Nama:</span> Adzamar Mahdum Regastian
        </p>
        <p className="text-lg mb-3">
          <span className="font-semibold">Sekolah:</span> SMK Negeri 8 Malang
        </p>
        <p className="text-lg mb-3">
          <span className="font-semibold">Jurusan:</span> Rekayasa Perangkat Lunak
        </p>       
        <p className="text-lg mb-3">
          <span className="font-semibold">Alamat:</span> Jl.Hamid Rusdi Gg 2B No.105
        </p>       
      </div>
    </section>
  );
}


