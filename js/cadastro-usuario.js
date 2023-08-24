const teste = document.querySelector("#teste");
    const form = document.getElementById("formulario-usuario");
    form.addEventListener("submit", async (evento) => {
      evento.preventDefault();

      const nome = document.querySelector("#nome").value;
      const email = document.querySelector("#email").value;
      const senha = document.querySelector("#senha").value;

      console.log(nome, email, senha);

     const response = await axios.post("https://api-recados-7pfq.onrender.com/criar-usuario", {
        nome: nome,
       email: email,
        senha: senha
      });
      if (response.status === 200) {
        console.log(`Usuário criado com sucesso!`);
        console.log(`Nome do Usuário: ${response.data.nome}, Email: ${response.data.email}, ID do Usuário: ${response.data.id}`);
        teste.innerHTML = `Usuário criado com sucesso! <br>
        Nome do Usuário: ${response.data.nome}<br>Email: ${response.data.email}<br>ID do Usuário: ${response.data.id}`;
      } else if (response.status === 400) {
        console.log(`Erro: Usuário já existe`);
        teste.innerHTML = `Erro: Usuário já existe`;
      } else {
        console.log(`Ocorreu um erro na criação do usuário`);
        teste.innerHTML = `Ocorreu um erro na criação do usuário`;
      }
    });