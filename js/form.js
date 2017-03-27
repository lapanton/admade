$(document).ready(function() {

    var inst = $('[data-remodal-id=modal]').remodal();

    /**
     * Opens the modal window
     */


    //E-mail Ajax Send
    $("#contact_form").submit(function() { //Change
        var th = $(this);
        $.ajax({
            type: "POST",
            url: "../contact.php", //Change
            data: th.serialize()
        }).done(function() {
            inst.open();
            setTimeout(function() {
                // Done Functions
                th.trigger("reset");
            }, 1000);
        });
        return false;
    });


});