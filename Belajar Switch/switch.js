var item = prompt('masukkan nama makanan / minuman : \n (cth: nasi, daging, susu, harburger, softdrink)');

switch( item ) {
    case 'nasi' :
    case 'daging' :
    case 'susu' :
        alert('makanan / minuman SEHAT!');
        break;
    case 'hamburger' :
    case 'softdrink' :
        alert('makanan / minuman TIDAK SEHAT!');
        break;
    default :
        alert('anda memasukkan nama makanan / minuman yang tidak ada!');
        break;
}