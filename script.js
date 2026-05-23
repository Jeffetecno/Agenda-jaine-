const form = document.getElementById("formAgendamento");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  const nome = document.getElementById("name").value;

  const service =
    document.getElementById("service")
    .options[document.getElementById("service").selectedIndex].text;

  const date = document.getElementById("date").value;
  const time = document.getElementById("time").value;

  // Corrige problema do fuso horário
  const [ano, mes, dia] = date.split("-");
  const dataFormatada = `${dia}/${mes}/${ano}`;

  const mensagem = `Olá Jaine! Meu nome é ${nome}.

Gostaria de agendar um horário:

📌 Serviço: ${service}
📅 Data: ${dataFormatada}
⏰ Horário: ${time}`;

  const phone = "555499562683";

  const url = `https://wa.me/${phone}?text=${encodeURIComponent(mensagem)}`;

  window.location.href = url;
});