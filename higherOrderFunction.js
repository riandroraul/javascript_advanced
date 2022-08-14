// function kerjakanTugas(matakuliah, selesai){
//     console.log(`mulai mengerjakan tugas ${matakuliah} ...`);
//     selesai();
// }

// function selesai(){
//     alert('selesai mengerjakan tugas');
// }

// kerjakanTugas('pemrograman web', selesai);

const matkul = [
    'matematika',
    'fisika',
    'pemrograman web',
    'B.inggris'
];

const kerjakanTugas = (matkul, selesai) => {
    console.log(`mulai mengerakan tugas ${matkul.forEach(mk => mk)} ...`);
    selesai();
}

function selesai(){
    alert(`selesai mengerjakan tugas ${matkul.map(mk => mk).join(' ')}`);
}

kerjakanTugas(matkul, selesai);
