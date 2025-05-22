// Array de objetos para armazenar as perguntas do quiz
const questions = [
  {
    question: "Qual é a capital do Brasil?",
    options: ["Rio de Janeiro", "São Paulo", "Brasília", "Salvador"],
    correctAnswer: "Brasília",
    type: "radio", // Tipo de input: 'radio' para seleção única
  },
  {
    question:
      "Quais destes são estados da região Nordeste do Brasil? (Selecione um ou mais)",
    options: ["Minas Gerais", "Bahia", "Ceará", "Paraná", "Pernambuco"],
    correctAnswer: ["Bahia", "Ceará", "Pernambuco"], // Array para múltiplas respostas corretas
    type: "checkbox", // Tipo de input: 'checkbox' para seleção múltipla
  },
  {
    question: "Quem pintou a Mona Lisa?",
    options: [
      "Vincent van Gogh",
      "Leonardo da Vinci",
      "Pablo Picasso",
      "Claude Monet",
    ],
    correctAnswer: "Leonardo da Vinci",
    type: "radio",
  },
  {
    question: "Qual o maior oceano do mundo?",
    options: [
      "Oceano Atlântico",
      "Oceano Índico",
      "Oceano Antártico",
      "Oceano Pacífico",
    ],
    correctAnswer: "Oceano Pacífico",
    type: "radio",
  },
];

// Variáveis de estado do quiz
let currentQuestionIndex = 0; // Índice da pergunta atual
const userAnswers = {}; // Objeto para armazenar as respostas do usuário { questionIndex: [resposta(s)] }
let quizChart = null; // Variável para armazenar a instância do gráfico Chart.js

// Referências aos elementos do DOM
const quizContainer = document.getElementById("quiz-container");
const questionsArea = document.getElementById("questions-area");
const prevButton = document.getElementById("prev-button");
const nextButton = document.getElementById("next-button");
const finishButton = document.getElementById("finish-button");
const reportContainer = document.getElementById("report-container");
const scoreDisplay = document.getElementById("score-display");
const resultsChartCanvas = document.getElementById("resultsChart");
const detailedAnswersList = document.getElementById("detailed-answers");
const restartButton = document.getElementById("restart-button");
const messageBox = document.getElementById("message-box");

// Função para exibir mensagens de alerta/erro
function showMessage(message, type = "error") {
  messageBox.textContent = message;
  messageBox.style.display = "block";
  // Adiciona classes CSS para diferentes tipos de mensagens (sucesso, aviso)
  if (type === "error") {
    messageBox.className = "message-box bg-red-100"; // Usa a classe definida no CSS
  } else if (type === "success") {
    messageBox.className = "message-box bg-green-100"; // Usa a classe definida no CSS
  }
  setTimeout(() => {
    messageBox.style.display = "none";
  }, 3000); // Esconde a mensagem após 3 segundos
}

// Função para renderizar a pergunta atual na tela
function renderQuestion() {
  // Limpa a área de perguntas
  questionsArea.innerHTML = "";
  messageBox.style.display = "none"; // Esconde qualquer mensagem de alerta

  const questionData = questions[currentQuestionIndex];
  if (!questionData) {
    console.error(
      "Dados da pergunta não encontrados para o índice:",
      currentQuestionIndex
    );
    return;
  }

  // Cria o elemento do slide da pergunta
  const slideDiv = document.createElement("div");
  slideDiv.className = "question-slide";
  slideDiv.style.display = "block"; // Mostra o slide atual

  // Título da pergunta
  const questionTitle = document.createElement("h2");
  questionTitle.textContent = `${currentQuestionIndex + 1}. ${
    questionData.question
  }`;
  slideDiv.appendChild(questionTitle);

  // Contêiner para as opções de resposta
  const optionsDiv = document.createElement("div");
  optionsDiv.className = "options-container";

  // Cria as opções de resposta (radio ou checkbox)
  questionData.options.forEach((option, index) => {
    const label = document.createElement("label");
    label.className = "option-label";

    const input = document.createElement("input");
    input.type = questionData.type;
    input.name = `question-${currentQuestionIndex}`; // Nome único para cada grupo de rádio
    input.value = option;
    input.id = `q${currentQuestionIndex}-option${index}`; // ID único para o input

    // Adiciona um listener para marcar a opção como selecionada visualmente
    input.addEventListener("change", () => {
      if (questionData.type === "radio") {
        // Remove a classe 'selected' de todas as outras opções da mesma pergunta
        document
          .querySelectorAll(`input[name="question-${currentQuestionIndex}"]`)
          .forEach((otherInput) => {
            otherInput.closest(".option-label").classList.remove("selected");
          });
      }
      // Adiciona a classe 'selected' à opção clicada
      label.classList.toggle("selected", input.checked);
    });

    const span = document.createElement("span");
    span.textContent = option;

    label.appendChild(input);
    label.appendChild(span);
    optionsDiv.appendChild(label);

    // Se o usuário já respondeu a esta pergunta, pré-seleciona as respostas
    if (userAnswers[currentQuestionIndex]) {
      const savedAnswers = Array.isArray(userAnswers[currentQuestionIndex])
        ? userAnswers[currentQuestionIndex]
        : [userAnswers[currentQuestionIndex]];
      if (savedAnswers.includes(option)) {
        input.checked = true;
        label.classList.add("selected");
      }
    }
  });

  slideDiv.appendChild(optionsDiv);
  questionsArea.appendChild(slideDiv);

  // Atualiza a visibilidade dos botões de navegação
  prevButton.style.display = currentQuestionIndex > 0 ? "inline-block" : "none";
  nextButton.style.display =
    currentQuestionIndex < questions.length - 1 ? "inline-block" : "none";
  finishButton.style.display =
    currentQuestionIndex === questions.length - 1 ? "inline-block" : "none";
}

// Função para salvar a resposta do usuário para a pergunta atual
function saveUserAnswer() {
  const questionData = questions[currentQuestionIndex];
  let selectedOptions = [];

  if (questionData.type === "radio") {
    const selectedRadio = document.querySelector(
      `input[name="question-${currentQuestionIndex}"]:checked`
    );
    if (selectedRadio) {
      selectedOptions.push(selectedRadio.value);
    }
  } else if (questionData.type === "checkbox") {
    document
      .querySelectorAll(
        `input[name="question-${currentQuestionIndex}"]:checked`
      )
      .forEach((checkbox) => {
        selectedOptions.push(checkbox.value);
      });
  }

  if (selectedOptions.length === 0) {
    showMessage(
      "Por favor, selecione uma resposta antes de continuar.",
      "error"
    );
    return false; // Indica que nenhuma resposta foi selecionada
  }

  // Armazena a resposta (ou array de respostas)
  userAnswers[currentQuestionIndex] =
    questionData.type === "radio" ? selectedOptions[0] : selectedOptions;
  return true; // Indica que a resposta foi salva com sucesso
}

// Função para avançar para a próxima pergunta
function nextQuestion() {
  if (saveUserAnswer()) {
    // Tenta salvar a resposta antes de avançar
    if (currentQuestionIndex < questions.length - 1) {
      currentQuestionIndex++;
      renderQuestion();
    }
  }
}

// Função para voltar para a pergunta anterior
function previousQuestion() {
  if (currentQuestionIndex > 0) {
    currentQuestionIndex--;
    renderQuestion();
  }
}

// Função para calcular a pontuação do quiz
function calculateScore() {
  let correctCount = 0;
  questions.forEach((q, index) => {
    const userAnswer = userAnswers[index];
    const correctAnswer = q.correctAnswer;

    if (q.type === "radio") {
      if (userAnswer === correctAnswer) {
        correctCount++;
      }
    } else if (q.type === "checkbox") {
      // Para checkbox, precisamos comparar arrays
      // Converte ambos para arrays e ordena para comparação justa
      const userArray = Array.isArray(userAnswer) ? userAnswer.sort() : [];
      const correctArray = Array.isArray(correctAnswer)
        ? correctAnswer.sort()
        : [];

      // Verifica se os arrays têm o mesmo tamanho e os mesmos elementos
      if (
        userArray.length === correctArray.length &&
        userArray.every((val, i) => val === correctArray[i])
      ) {
        correctCount++;
      }
    }
  });
  return correctCount;
}

// Função para gerar o relatório final
function generateReport() {
  if (!saveUserAnswer()) {
    // Tenta salvar a última resposta antes de finalizar
    return; // Não prossegue se a última resposta não foi selecionada
  }

  quizContainer.style.display = "none"; // Esconde o quiz
  reportContainer.style.display = "flex"; // Mostra o relatório

  const totalCorrect = calculateScore();
  const totalQuestions = questions.length;
  scoreDisplay.textContent = `${totalCorrect}/${totalQuestions}`;

  // Destrói o gráfico anterior se existir para evitar sobreposição
  if (quizChart) {
    quizChart.destroy();
  }

  // Dados para o gráfico (Corretas vs. Incorretas)
  const data = {
    labels: ["Respostas Corretas", "Respostas Incorretas"],
    datasets: [
      {
        data: [totalCorrect, totalQuestions - totalCorrect],
        // Correção: Usar valores hexadecimais diretos em vez de var()
        backgroundColor: ["#10b981", "#ef4444"], // Verde para corretas, vermelho para incorretas
        hoverOffset: 4,
      },
    ],
  };

  // Configurações do gráfico
  const config = {
    type: "pie", // Tipo de gráfico: pizza
    data: data,
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: "top",
          labels: {
            font: {
              family: "Inter",
            },
          },
        },
        title: {
          display: true,
          text: "Desempenho Geral do Quiz",
          font: {
            size: 18,
            family: "Inter",
          },
          color: getComputedStyle(document.documentElement).getPropertyValue(
            "--gray-700"
          ), // Obtém a cor via JS
        },
      },
    },
  };

  // Cria e renderiza o novo gráfico
  quizChart = new Chart(resultsChartCanvas, config);

  // Preenche a lista de respostas detalhadas
  detailedAnswersList.innerHTML = ""; // Limpa a lista
  questions.forEach((q, index) => {
    const userAnswer = userAnswers[index];
    const correctAnswer = q.correctAnswer;
    let isCorrect = false;

    const listItem = document.createElement("li");
    listItem.className =
      "mb-4 p-4 border rounded-lg bg-gray-50 shadow-sm"; /* Mantendo classes para aplicar estilos via CSS puro */

    const questionText = document.createElement("p");
    questionText.className = "font-semibold text-gray-800 mb-2";
    questionText.textContent = `Pergunta ${index + 1}: ${q.question}`;
    listItem.appendChild(questionText);

    const userAnswerText = document.createElement("p");
    userAnswerText.className = "text-gray-700";
    let userAnswerDisplay = "";

    if (q.type === "radio") {
      userAnswerDisplay = userAnswer || "Não respondido";
      if (userAnswer === correctAnswer) {
        isCorrect = true;
      }
    } else if (q.type === "checkbox") {
      userAnswerDisplay =
        userAnswer && userAnswer.length > 0
          ? userAnswer.join(", ")
          : "Não respondido";
      // Para checkbox, compara se as seleções do usuário correspondem exatamente às corretas
      const userArray = Array.isArray(userAnswer) ? userAnswer.sort() : [];
      const correctArray = Array.isArray(correctAnswer)
        ? correctAnswer.sort()
        : [];
      if (
        userArray.length === correctArray.length &&
        userArray.every((val, i) => val === correctArray[i])
      ) {
        isCorrect = true;
      }
    }

    userAnswerText.innerHTML = `Sua resposta: <span class="${
      isCorrect ? "user-answer correct-answer" : "user-answer incorrect-answer"
    }">${userAnswerDisplay}</span>`;
    listItem.appendChild(userAnswerText);

    const correctAnswerText = document.createElement("p");
    correctAnswerText.className = "text-gray-700";
    let correctDisplay = Array.isArray(correctAnswer)
      ? correctAnswer.join(", ")
      : correctAnswer;
    correctAnswerText.innerHTML = `Resposta Correta: <span class="correct-answer">${correctDisplay}</span>`;
    listItem.appendChild(correctAnswerText);

    detailedAnswersList.appendChild(listItem);
  });
}

// Função para reiniciar o quiz
function restartQuiz() {
  currentQuestionIndex = 0;
  // Limpa as respostas do usuário
  for (const key in userAnswers) {
    delete userAnswers[key];
  }
  quizContainer.style.display = "flex"; // Mostra o quiz
  reportContainer.style.display = "none"; // Esconde o relatório
  if (quizChart) {
    quizChart.destroy(); // Destrói a instância do gráfico
    quizChart = null;
  }
  renderQuestion(); // Renderiza a primeira pergunta novamente
}

// Adiciona listeners de evento aos botões
nextButton.addEventListener("click", nextQuestion);
prevButton.addEventListener("click", previousQuestion);
finishButton.addEventListener("click", generateReport);
restartButton.addEventListener("click", restartQuiz);

// Inicializa o quiz ao carregar a página
window.onload = renderQuestion;
