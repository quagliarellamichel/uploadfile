/**
 * Created by CODEQ on 17/03/2016.
 */
$(function () {

    $("i#up_foto").click(function () {
        /*------------------------------------------------------------
         inizialize object upload
         -------------------------------------------------------------- */
        new UpLoad().upFile('foto', function (path_file) {
            console.log(path_file);
            // visualizza la foto caricata sul DOM
            $('div#a_foto').append($('<img src="'+path_file+'" class="foto"/>'));
        });
    });
    $("i#up_case").click(function () {
        new UpLoad().upFile('case', function (path_file) {
            $('div#a_foto').append($('<img src="'+path_file+'" class="foto"/>'));
        });
    });
    $("i#up_paesi").click(function () {
        new UpLoad().upFile('paesi', function (path_file) {
            $('div#a_foto').append($('<img src="'+path_file+'" class="foto"/>'));
        });
    });

});
