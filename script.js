
function yashesaplayıcı(yas) {
    var suan = new Date();
    var fark = (Math.floor(suan - yas));
    console.log(Math.floor(fark / 1000 / 60 / 60 / 24 / 365));
}

yashesaplayıcı(new Date('11/21/2005'));
yashesaplayıcı(new Date('1/13/1905'));

