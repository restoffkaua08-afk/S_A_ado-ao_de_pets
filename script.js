let animais = [
    { id: 1, nome: "Rex", especie: "cão", idade: 3, porte: "médio", historicoSaude: "Vacinado, saudável", status: "disponivel", imagem: "data:image/jpeg;base64,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", emoji: "🐕" },
    { id: 2, nome: "Mimi", especie: "gato", idade: 2, porte: "pequeno", historicoSaude: "Castrada, saudável", status: "disponivel", imagem: "https://chemitec.com.br/wp-content/uploads/2025/04/como-cuidar-de-gatos-filhotes.jpg", emoji: "🐈" },
    { id: 3, nome: "Thor", especie: "cão", idade: 5, porte: "grande", historicoSaude: "Necessita cuidados especiais", status: "disponivel", imagem: "https://www.agrosete.com.br/wp-content/uploads/2017/09/rottweiler_1-2-800x450.jpg", emoji: "🐕‍🦺" },
    { id: 4, nome: "Luna", especie: "gato", idade: 1, porte: "pequeno", historicoSaude: "Saudável", status: "disponivel", imagem: "https://blog.matsudapet.com.br/wp-content/uploads/2024/04/maiores-cuidados-gato-filhote.jpg", emoji: "🐱" }
];

let usuarios = [
    { id: 1, nome: "João Silva", cpf: "12345678900", email: "joao@email.com", senha: "123", dataNascimento: "1990-05-10", perfil: "usuario", adocoesAno: 0, ultimaAdocao: null },
    { id: 2, nome: "Admin", cpf: "00000000000", email: "admin@adote.com", senha: "admin123", dataNascimento: "1985-01-01", perfil: "admin", adocoesAno: 0 }
];

let solicitacoes = [];


let usuarioLogado = null;


// helpers
function calcularIdade(dataNasc) {
    const hoje = new Date();
    const nasc = new Date(dataNasc);
    let idade = hoje.getFullYear() - nasc.getFullYear();
    const m = hoje.getMonth() - nasc.getMonth();
    if (m < 0 || (m === 0 && hoje.getDate() < nasc.getDate())) idade--;
    return idade;
}


function contarAdocoesNoAno(usuarioId) {
    const anoAtual = new Date().getFullYear();
    const aprovadas = solicitacoes.filter(s => s.usuarioId === usuarioId && s.status === "aprovada" && new Date(s.data).getFullYear() === anoAtual);
    return aprovadas.length;
}


function notificarUsuario(email, assunto, mensagem) {
    alert(`📧 NOTIFICAÇÃO para ${email}\nAssunto: ${assunto}\nMensagem: ${mensagem}`);
}


function gerarRelatorioMensal() {
    const mesAtual = new Date().toLocaleString('default', { month: 'long' });
    const aprovadas = solicitacoes.filter(s => s.status === "aprovada");
    let total = aprovadas.length;
    alert(`📊 RELATÓRIO DE ADOÇÕES - ${mesAtual}\nTotal de adoções realizadas: ${total}\nDetalhes: ${aprovadas.map(a => `ID solicitação ${a.id}`).join(', ') || 'Nenhuma adoção no período.'}`);
}


function podeAdotar(usuario) {
    let idade = calcularIdade(usuario.dataNascimento);
    if (idade < 18) return { ok: false, motivo: "Idade mínima é 18 anos." };
    let adocoesAno = contarAdocoesNoAno(usuario.id);
    if (adocoesAno >= 3) return { ok: false, motivo: "Limite de 3 adoções por ano atingido." };
    return { ok: true };
}


// renderizar animais com imagens
function renderAnimais() {
    let lista = animais.filter(a => a.status === "disponivel");
    const especie = document.getElementById("filterEspecie").value;
    const porte = document.getElementById("filterPorte").value;
    const nomeBusca = document.getElementById("searchNome").value.toLowerCase();
    if (especie) lista = lista.filter(a => a.especie === especie);
    if (porte) lista = lista.filter(a => a.porte === porte);
    if (nomeBusca) lista = lista.filter(a => a.nome.toLowerCase().includes(nomeBusca));
    const container = document.getElementById("animaisContainer");
    if (lista.length === 0) {
        container.innerHTML = "<p style='text-align:center;'>Nenhum animal encontrado 🐾</p>";
        return;
    }
    container.innerHTML = lista.map(animal => {
        // Se tiver imagem, mostra imagem, senão mostra emoji
        const imagemHtml = animal.imagem && animal.imagem.trim() !== ""
            ? `<img src="${animal.imagem}" alt="${animal.nome}">`
            : `<div class="emoji-placeholder">${animal.emoji || '🐾'}</div>`;
       
        return `
        <div class="card">
            <div class="card-img">
                ${imagemHtml}
            </div>
            <div class="card-content">
                <h3>${animal.nome}</h3>
                <p>${animal.especie === 'cão' ? '🐕 Cão' : '🐈 Gato'} • ${animal.idade} anos • Porte ${animal.porte}</p>
                <p>Saúde: ${animal.historicoSaude}</p>
                ${usuarioLogado && usuarioLogado.perfil === 'usuario' ? `<button class="adopt-btn" data-id="${animal.id}">🐾 Solicitar adoção</button>` : (usuarioLogado ? '' : '<button disabled style="background:#ccc">Faça login para adotar</button>')}
            </div>
        </div>
    `}).join('');
   
    document.querySelectorAll('.adopt-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const animalId = parseInt(btn.getAttribute('data-id'));
            solicitarAdocao(animalId);
        });
    });
}


function solicitarAdocao(animalId) {
    if (!usuarioLogado || usuarioLogado.perfil !== 'usuario') {
        alert("Você precisa estar logado como usuário para solicitar adoção.");
        return;
    }
    const animal = animais.find(a => a.id === animalId);
    if (!animal || animal.status !== 'disponivel') {
        alert("Animal não está mais disponível.");
        return;
    }
    const pode = podeAdotar(usuarioLogado);
    if (!pode.ok) {
        alert(`Regra de negócio bloqueou: ${pode.motivo}`);
        return;
    }
    const pendente = solicitacoes.find(s => s.animalId === animalId && s.status === 'pendente');
    if (pendente) {
        alert("Já existe uma solicitação pendente para este animal.");
        return;
    }
    const novaId = solicitacoes.length + 1;
    const nova = {
        id: novaId,
        usuarioId: usuarioLogado.id,
        animalId: animal.id,
        data: new Date().toISOString(),
        status: "pendente",
        justificativa: null
    };
    solicitacoes.push(nova);
    alert("Solicitação de adoção enviada! Aguarde aprovação do administrador.");
    if (usuarioLogado.perfil === 'admin') {
        renderAdminPanel();
    }
    renderHistorico();
    renderAdminPanel();
}


function renderHistorico() {
    if (!usuarioLogado) return;
    const minhas = solicitacoes.filter(s => s.usuarioId === usuarioLogado.id);
    const div = document.getElementById("historicoLista");
    if (minhas.length === 0) {
        div.innerHTML = "<p>Nenhuma solicitação ainda.</p>";
        return;
    }
    div.innerHTML = minhas.map(sol => {
        const animal = animais.find(a => a.id === sol.animalId);
        return `<div class="solicitacao-item">
                    <strong>${animal?.nome || 'Animal'}</strong><br>
                    Data: ${new Date(sol.data).toLocaleDateString()}<br>
                    Status: ${sol.status} ${sol.justificativa ? `- Motivo: ${sol.justificativa}` : ''}
                    ${sol.status === 'pendente' ? `<div class="flex-btns"><button class="small-btn" data-id="${sol.id}">Cancelar</button></div>` : ''}
                </div>`;
    }).join('');
    document.querySelectorAll('.small-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            let id = parseInt(btn.getAttribute('data-id'));
            cancelarSolicitacao(id);
        });
    });
}


function cancelarSolicitacao(solicId) {
    const solicitacao = solicitacoes.find(s => s.id === solicId);
    if (!solicitacao) return;
    if (solicitacao.usuarioId !== usuarioLogado.id) return;
    const dataCriacao = new Date(solicitacao.data);
    const agora = new Date();
    const diffHoras = (agora - dataCriacao) / (1000 * 60 * 60);
    if (diffHoras > 24) {
        alert("Prazo de 24h expirado. Não é mais possível cancelar.");
        return;
    }
    solicitacao.status = "cancelada";
    alert("Solicitação cancelada com sucesso.");
    renderHistorico();
    renderAdminPanel();
}


function renderAdminPanel() {
    const adminDiv = document.getElementById("adminPanel");
    if (!usuarioLogado || usuarioLogado.perfil !== 'admin') {
        adminDiv.style.display = "none";
        return;
    }
    adminDiv.style.display = "block";
    const pendentes = solicitacoes.filter(s => s.status === "pendente");
    const container = document.getElementById("solicitacoesPendentes");
    if (pendentes.length === 0) {
        container.innerHTML = "<p>Nenhuma solicitação pendente.</p>";
    } else {
        container.innerHTML = pendentes.map(sol => {
            const usuario = usuarios.find(u => u.id === sol.usuarioId);
            const animal = animais.find(a => a.id === sol.animalId);
            return `<div class="solicitacao-item">
                        <strong>Solicitação #${sol.id}</strong><br>
                        Usuário: ${usuario?.nome} (${usuario?.email})<br>
                        Animal: ${animal?.nome} (${animal?.especie})<br>
                        Data: ${new Date(sol.data).toLocaleDateString()}
                        <div class="flex-btns">
                            <button class="small-btn aprovar" data-id="${sol.id}">✅ Aprovar</button>
                            <button class="small-btn recusar" data-id="${sol.id}">❌ Recusar</button>
                        </div>
                    </div>`;
        }).join('');
        document.querySelectorAll('.aprovar').forEach(btn => {
            btn.addEventListener('click', (e) => {
                let id = parseInt(btn.getAttribute('data-id'));
                aprovarSolicitacao(id);
            });
        });
        document.querySelectorAll('.recusar').forEach(btn => {
            btn.addEventListener('click', (e) => {
                let id = parseInt(btn.getAttribute('data-id'));
                let just = prompt("Justificativa para recusa:");
                if (just && just.trim() !== "") recusarSolicitacao(id, just);
                else alert("Justificativa obrigatória!");
            });
        });
    }
}


function aprovarSolicitacao(solicId) {
    const sol = solicitacoes.find(s => s.id === solicId);
    if (!sol || sol.status !== 'pendente') return;
    const animal = animais.find(a => a.id === sol.animalId);
    if (animal.status !== 'disponivel') {
        alert("Animal já foi adotado por outra solicitação.");
        return;
    }
    sol.status = "aprovada";
    animal.status = "indisponivel";
    const user = usuarios.find(u => u.id === sol.usuarioId);
    if (user) {
        notificarUsuario(user.email, "Adoção aprovada!", `Parabéns! Sua adoção do pet ${animal.nome} foi aprovada.`);
    }
    renderAnimais();
    renderAdminPanel();
    renderHistorico();
}


function recusarSolicitacao(solicId, justificativa) {
    const sol = solicitacoes.find(s => s.id === solicId);
    if (!sol || sol.status !== 'pendente') return;
    sol.status = "recusada";
    sol.justificativa = justificativa;
    const user = usuarios.find(u => u.id === sol.usuarioId);
    if (user) {
        notificarUsuario(user.email, "Adoção recusada", `Sua solicitação foi recusada. Motivo: ${justificativa}`);
    }
    renderAdminPanel();
    renderHistorico();
}


function cadastrarAnimal() {
    if (!usuarioLogado || usuarioLogado.perfil !== 'admin') return;
    const nome = document.getElementById("novoAnimalNome").value;
    const especie = document.getElementById("novoAnimalEspecie").value;
    const idade = parseInt(document.getElementById("novoAnimalIdade").value);
    const porte = document.getElementById("novoAnimalPorte").value;
    const saude = document.getElementById("novoAnimalSaude").value;
    const imagem = document.getElementById("novoAnimalImagem").value;
    if (!nome || !idade) { alert("Nome e idade obrigatórios"); return; }
    const novoId = animais.length + 1;
    animais.push({
        id: novoId,
        nome,
        especie,
        idade,
        porte,
        historicoSaude: saude || "Sem informações",
        status: "disponivel",
        imagem: imagem || "",
        emoji: especie === "cão" ? "🐕" : "🐱"
    });
    //Viadage da porra
    alert("Animal cadastrado com sucesso!");
    renderAnimais();
    document.getElementById("novoAnimalNome").value = "";
    document.getElementById("novoAnimalIdade").value = "";
    document.getElementById("novoAnimalSaude").value = "";
    document.getElementById("novoAnimalImagem").value = "";
}


function login(email, senha) {
    const user = usuarios.find(u => u.email === email && u.senha === senha);
    if (!user) { alert("Credenciais inválidas"); return false; }
    usuarioLogado = user;
    document.getElementById("userStatusDisplay").innerHTML = `👤 ${user.nome} (${user.perfil})`;
    document.getElementById("authPanel").style.display = "none";
    document.getElementById("historicoPanel").style.display = "block";
    if (user.perfil === 'admin') {
        document.getElementById("adminPanel").style.display = "block";
        renderAdminPanel();
    } else {
        document.getElementById("adminPanel").style.display = "none";
    }
    renderHistorico();
    renderAnimais();
    return true;
}


function logout() {
    usuarioLogado = null;
    document.getElementById("userStatusDisplay").innerHTML = "🔒 Não autenticado";
    document.getElementById("authPanel").style.display = "block";
    document.getElementById("historicoPanel").style.display = "none";
    document.getElementById("adminPanel").style.display = "none";
    renderAnimais();
}


function cadastrarNovoUsuario() {
    let email = prompt("E-mail:");
    let nome = prompt("Nome completo:");
    let cpf = prompt("CPF:");
    let senha = prompt("Senha:");
    let dataNasc = prompt("Data de nascimento (AAAA-MM-DD):");
    if (!email || !nome || !cpf || !senha || !dataNasc) { alert("Todos os campos obrigatórios"); return; }
    if (usuarios.find(u => u.cpf === cpf)) { alert("CPF já cadastrado"); return; }
    const novoId = usuarios.length + 1;
    const novoUser = { id: novoId, nome, cpf, email, senha, dataNascimento: dataNasc, perfil: "usuario", adocoesAno: 0 };
    usuarios.push(novoUser);
    alert("Cadastro realizado! Agora faça login.");
}


window.onload = () => {
    renderAnimais();
    document.getElementById("btnLogin").onclick = () => login(document.getElementById("loginEmail").value, document.getElementById("loginSenha").value);
    document.getElementById("btnCadastroUsuario").onclick = () => cadastrarNovoUsuario();
    document.getElementById("btnSair").onclick = () => logout();
    document.getElementById("btnBuscar").onclick = () => renderAnimais();
    document.getElementById("btnCadastrarAnimal").onclick = () => cadastrarAnimal();
    document.getElementById("btnRelatorio").onclick = () => gerarRelatorioMensal();
   
    setInterval(() => {
        let agora = new Date();
        solicitacoes.forEach(s => {
            if (s.status === 'pendente') {
                let dataCriacao = new Date(s.data);
                let diffDias = (agora - dataCriacao) / (1000 * 60 * 60 * 24);
                if (diffDias >= 15) {
                    s.status = "cancelada";
                    if(usuarioLogado && usuarioLogado.perfil === 'admin') renderAdminPanel();
                    if(usuarioLogado) renderHistorico();
                }
            }
        });
    }, 60000);
};