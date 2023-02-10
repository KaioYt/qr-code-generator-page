function gerarQrCode(){
    var imputUsuario = document.querySelector('textarea').value;
    var GoogleChartApi = 'https://chart.googleapis.com/chart?cht=qr&chs=300x300&chl=';
    var conteudoQrCode = GoogleChartApi + imputUsuario;
    document.querySelector('#QrCode-img').src = conteudoQrCode;
}