const nilaiTugas = (tugas1, tugas2, tugas3) => {
	let result = ((tugas1+tugas2+tugas3)/3 )*0.2;
	return result;
}

console.log(nilaiTugas(70,70,70));