let lista_tarefas = [];
function salvar(tarefas, prioridade){
    let dados = buscar();
    dados.push({
        titulo: tarefas,
        prioridade: prioridade,
    })
    localStorage.setItem('tarefas', JSON.stringify(dados));
}
function buscar(){
    return JSON.parse(localStorage.getItem('tarefas') || '[]');
}