function atualizarQuantidade(){
    document.getElementById('numeros').innerHTML = buscar().length; 
}
function listarTarefas() {
    let conteudo = buscar().sort().map(function(tar){
        return `<div> <input type="checkbox"> ${tar.titulo}
        <span class="badge ${tar.prioridade === 'Baixa' && 'bg-primary'} ${tar.prioridade === 'Media' && 'bg-warning'} ${tar.prioridade === 'Alta' && 'bg-danger'} ">
        ${tar.prioridade}
        </span>
        </div>`;
    })
    document.getElementById('tarefas').innerHTML = conteudo.sort().join('');
}

function addTarefa () {
    event.preventDefault()
    let titulo = document.getElementById('input_nova_tarefa').value;

    if (titulo.trim() === '') { 
        alert('Tarefa invalida');
        return;
    }

    let titulos = buscar().map((tarefa) => {
        return tarefa ? tarefa.titulo : "";
    });

    let existe = false;
    titulos.forEach((t) => {
        if (true === t.includes(titulo)) {
            existe = true;
            return;
        }
    });
    
    if(existe == false){
        salvar(titulo, input_prioridade.value);
    }else{
        alert('Tarefa já existe');
    }

    document.getElementById('input_nova_tarefa').value = '';
    // salvar(tarefa, input_prioridade.value);
    listarTarefas();
    atualizarQuantidade();
}
// vai acontecer assim que o usuario entrar na pagina
listarTarefas();
atualizarQuantidade();