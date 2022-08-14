// ambil semua elemen video
const videos = Array.from(document.querySelectorAll('[data-duration]'));



// pilih yang hanya "JAVASCRIPT LANJUTAN"
let jslanjut = videos.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN'))


// ambil durasi masing-masing video
.map(item => item.dataset.duration)


// ubah durasi menjadi float, ubah menit menjadi detik
.map(waktu => {
    // 10:30 -> [10, 30] split
    const parts = waktu.split(':').map(part => parseFloat(part));
    return (parts[0] * 60) + parts[1];
})

// jumlahkan semua detik
.reduce((total, detik) => total + detik);

// ubah formatnya jadi jam menit detik
const jam = Math.floor(jslanjut / 3600);

jslanjut = jslanjut - jam * 3600;
const menit = Math.floor(jslanjut / 60);
const detik = jslanjut - menit * 60;

const pDurasi = document.querySelector('.total-durasi');
pDurasi.textContent = `${jam} jam, ${menit} menit, ${detik} detik`;

const jmlVideo = videos.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN')).length;

const pJmlVid = document.querySelector('.jumlah-video');
pJmlVid.textContent = `${jmlVideo} Video`;

// siapin di DOM

// console.log(detik);