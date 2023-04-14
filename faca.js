function faca() {
    var ususario;
    var senha;
    var recorrente;
    
    recorrente = true;
    do {
        ususario = window.prompt('Enter a value for ususario');
        senha = window.prompt('Enter a value for senha');
        if (ususario == "Giovanna") {
            if (senha == "0902") {
                window.alert("senha e usuario OK");
                recorrente = false;
            }
        }
    } while (recorrente == true);
}
