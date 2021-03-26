$(function() {
    let content, contentMsg, msgArray, startBtn;
    content = $('#content');
    contentMsg = $('.content___msg');
    msgArray = [$('#msg1'), $('#msg2'), $('#msg3')]
    startBtn = $('#start-btn');


    //affiche #msg1
    startBtn.on('click', function() {
        content.fadeIn("fast", function() {
            msgArray[0].css('display', 'block');
        });
    });

    //#msg1 affiche #msg2
    msgArray[0].on('click', function() {
        msgArray[1].fadeIn('fast', function() {
            msgArray[1].css('display', 'block');
        });
    })

    //#msg2 affiche #msg3
    msgArray[1].on('click', function() {
        msgArray[2].fadeIn('fast', function() {
            msgArray[2].css('display', 'block');
        });
    })

    //#msg3 change style et regarge la page
    msgArray[2].on('click', function() {
        contentMsg.css('display', 'none');

        content.replaceWith("<h2>test</h2>");
        // location.reload();
    });


});


/*
$(function() {
    
    var $list, $newItemForm;
    $list = $('ul');
    $newItemForm = $('#newItemForm');

    $newItemForm.on('submit', function(e) {
        e.preventDefault();
        var text = $('input:text').val();
        $list.append('<li>' + text + '</li>');
        $('input:text').val('');
    });

    $list.on('click', 'li', function() {
        var $this = $(this);
        $this.remove();
    });

});


*/