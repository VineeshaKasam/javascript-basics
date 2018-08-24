$('#addInfo').click(function(){
        var info = $('#infoDetail').val();
        console.log(info);
        $('ul').append('<li>' + info + '</li>');
    });