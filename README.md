# uploadfile
upload file jQuery object
<br>
Vantaggio:
<br>
l'oggetto contiene in memoria un form action
che serve ad inviare il file e la posizione del folder che deve ospitare i file
alla pagina php (ajax_file)
il form action non è scritto nel DOM
ma caricati in memoria ogni volta che l'oggetto viene inizializzato.
<br>
Scopo:
<br>
Non scrivere il form action sul DOM ed effettuare l'upload di file su diverse
cartelle e da diversi bottoni in un unica pagina HTML
senza dover riscrivere il form action
<br>
PS.
ricordatevi di impostare i permessi di scrittura sulle cartelle di destinazione
img/case
img/foto
img/paesi
