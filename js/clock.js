

let al = prompt("Lütfen Adınızı Giriniz");
let isim = document.querySelector(".text-center>strong>#myName")
function zamanF(){
	let zaman = document.querySelector("#zaman")
	const tarih=new Date();
	let gun=tarih.getDay();
	let gunler= ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];
	let saat=tarih.getHours();
	let dakika=tarih.getMinutes();
	let saniye=tarih.getSeconds();
	let goster = `${saat}:${dakika}:${saniye} ${gunler[gun]}`
	zaman.innerHTML = `${goster}`
	setInterval(zamanF, 1000);
	

}

if (al.length > 0){
    zamanF();

    isim.innerHTML = `${al}`
    
    

}
else
console.log("BOŞ GEÇİLEMEZ")