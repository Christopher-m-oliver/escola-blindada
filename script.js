function mostrarTela(tela) {
  document.querySelectorAll('.tela').forEach(t => {
    t.classList.remove('ativa');
  });

  switch(tela) {
    case 'relato':
      document.getElementById('tela-relato').classList.add('ativa');
      break;
    case 'conflito':
      document.getElementById('tela-conflito').classList.add('ativa');
      break;
    case 'ajuda':
      const telaAjuda = document.getElementById('tela-ajuda');
      telaAjuda.classList.add('ativa');
      break;
    default:
      document.getElementById('tela-inicial').classList.add('ativa');
  }
}

function enviarRelato() {
  const texto = document.getElementById('relatoTexto').value;
  if (texto.trim() === "") {
    Swal.fire({
      icon: 'warning',
      title: 'Campo vazio',
      text: 'Por favor, escreva algo antes de enviar.'
    });
    return;
  }

  Swal.fire({
    icon: 'success',
    title: 'Enviado!',
    text: 'Relato enviado com sucesso.'
  });

  document.getElementById('relatoTexto').value = "";
  mostrarTela('inicial');
}

function enviarConflito() {
  const selecionado = document.querySelector('input[name="tipo"]:checked');
  if (!selecionado) {
    Swal.fire({
      icon: 'info',
      title: 'Atenção',
      text: 'Selecione um tipo de conflito.'
    });
    return;
  }

  Swal.fire({
    icon: 'success',
    title: 'Registrado',
    text: `Conflito registrado: ${selecionado.value}`
  });

  document.getElementById('formConflito').reset();
  mostrarTela('inicial');
}