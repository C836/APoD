/*copyright/ data / explanation / hdurl / title/ url*/
window.onload = function pegar(){
    $.ajax({url:"https://api.nasa.gov/planetary/apod?api_key=Gu0MZYR5dc4VHP5VISzp9eQINX6AibiJsP8BR9Ai",
        success: function(param) {
            $('#imagem').attr('src', param.hdurl);
            $('#background').attr('src', param.url);
            $('#nome').text(param.title);
            $('#explanation').text(param.explanation);
            $('#copyName').text(param.copyright);
        }})}

$(function() {
    $("#data").datepicker("setDate", new Date());
});

