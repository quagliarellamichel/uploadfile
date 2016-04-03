/**
 * Created by CODEQ on 03/04/2016.
 */
/*------------------------------------------------------------
 Vantaggio:
 l'oggetto contiene in memoria un form action
 che serve ad inviare il file e la posizione del folder che deve ospitare i file
 alla pagina php (ajax_file)
 il form action non è scritto nel DOM
 ma caricati in memoria ogni volta che l'oggetto viene inizializzato.
 Scopo:
 Non scrivere il form action sul DOM ed effettuare l'upload di file su diverse
 cartelle e da diversi bottoni in un unica pagina HTML
 senza dover riscrivere il form action

 PS.
 ricordatevi di impostare i permessi di scrittura sulle cartelle di destinazione
 img/case
 img/foto
 img/paesi
 -------------------------------------------------------------- */
function UpLoad() {
    /*------------------------------------------------------------
     private metod
     -------------------------------------------------------------- */
    // form action
    var form = $('<form method="post" enctype="multipart/form-data">');
    // input file
    var file = $('<input type="file" name="file" accept="image/*"/>');
    // cartella di setinazione
    var path = $('<input type="text" name="path"/>');
    // invio
    var sub = $('<input type="submit"/>');
    // procedura fine upload
    var fun = null;
    /*------------------------------------------------------------
    private function
     -------------------------------------------------------------- */
    file.change(function () {
        if (this.value != '') sub.submit();
    });
    form.submit(function (e) {
        console.log(new FormData(this));
        e.preventDefault();
        $.ajax({
            url: "ajax_file.php", // pagina upload immagini
            type: "POST",
            data: new FormData(form),
            contentType: false,
            cache: false,
            processData: false,
            success: fun // funzione fine upload
        });
    });
    var creaForm = function () {
        form.append(path).append(file).append(sub);
    };
    /*------------------------------------------------------------
     public function
     -------------------------------------------------------------- */
    this.upFile = function (folder, f) {
        creaForm(); // crea form virtuale
        path.val(folder); // set cartella destinazione
        fun = f; // imposta la funzione fine upload
        file.trigger('click'); // avvia selezione file
    };
}