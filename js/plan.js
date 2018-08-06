$('[class^="question"]').on('click', function(e){
    e.preventDefault();
    var numb = this.className.replace('question', '');
    $('[id^="answer"]').hide();
    $('#answer' + numb).show();
});