function Continue() {
  let dados = { 
      usuario: document.getElementById("username").value,
      email: document.getElementById("email").value,
      senha: document.getElementById("password").value,
      confirmacaoDeSenha: document.getElementById("confirm-password").value,
      nome: document.getElementById("nome").value,
      dataDeNascimento: document.getElementById("idade").value,
      telefone: document.getElementById("telefone").value,
    };
  console.log(dados);
}
