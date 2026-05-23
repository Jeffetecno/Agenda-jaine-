const form = document.getElementById("formAgendamento");

const dateInput = document.getElementById("date");
const timeSelect = document.getElementById("time");

// ============================
// 🗓️ CALENDÁRIO PROFISSIONAL
// ============================
flatpickr("#date", {
    dateFormat: "d/m/Y",
    minDate: "today",

    disable: [
        function(date) {
            // domingo = 0 | segunda = 1
            return (date.getDay() === 0 || date.getDay() === 1);
        }
    ],

    locale: {
        firstDayOfWeek: 1
    }
});

// ============================
// ⏰ HORÁRIOS PROFISSIONAIS
// ============================
const horarios = [];

for (let h = 9; h <= 19; h++) {

    const hora = h.toString().padStart(2, "0");

    horarios.push(`${hora}:00`);

    if (h !== 19) {
        horarios.push(`${hora}:30`);
    }
}

// Preenche select de horários
horarios.forEach(h => {
    timeSelect.innerHTML += `<option value="${h}">${h}</option>`;
});

// ============================
// 🚫 ENVIO PARA WHATSAPP
// ============================
form.addEventListener("submit", function(e) {

    e.preventDefault();

    const nome = document.getElementById("name").value;

    const service =
        document.getElementById("service")
        .options[
            document.getElementById("service").selectedIndex
        ].text;

    const date = dateInput.value;
    const time = timeSelect.value;

    if (!date || !time) {
        alert("Preencha todos os campos.");
        return;
    }

    const mensagem = `Olá Jaine! Meu nome é ${nome}.

Gostaria de agendar um horário:

📌 Serviço: ${service}
📅 Data: ${date}
⏰ Horário: ${time}`;

    const phone = "555499562683";

    const url = `https://wa.me/${phone}?text=${encodeURIComponent(mensagem)}`;

    window.location.href = url;
});
