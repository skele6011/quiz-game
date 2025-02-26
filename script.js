const questions = 
[
    {
        topic: 'WWI',
        question: 'What event directly triggered the start of World War I?',
        possibleAnswers: [
            'The assassination of Archduke Franz Ferdinand',
            'The invasion of Poland',
            'The sinking of the Lusitania',
            'The Russian Revolution'
        ],
        correctAnswer: 'The assassination of Archduke Franz Ferdinand'
    },
    {
        topic: 'WWI',
        question: 'In which year did World War I begin?',
        possibleAnswers: ['1913', '1914', '1915', '1916'],
        correctAnswer: '1914'
    },
    {
        topic: 'WWI',
        question: 'Which of these countries was NOT part of the Allied Powers?',
        possibleAnswers: ['Britain', 'France', 'Germany', 'Russia'],
        correctAnswer: 'Germany'
    },
    {
        topic: 'WWI',
        question: 'What was the nickname given to the Western Front trenches?',
        possibleAnswers: [
            'The Long Line',
            'No Man\'s Land',
            'The Great Divide',
            'The Death Zone'
        ],
        correctAnswer: 'No Man\'s Land'
    },
    {
        topic: 'WWI',
        question: 'Which new weapon was first used extensively in WWI?',
        possibleAnswers: [
            'Nuclear weapons',
            'Poison gas',
            'Guided missiles',
            'Laser guns'
        ],
        correctAnswer: 'Poison gas'
    },
    {
        topic: 'WWI',
        question: 'When did World War I end?',
        possibleAnswers: ['1917', '1918', '1919', '1920'],
        correctAnswer: '1918'
    },
    {
        topic: 'WWI',
        question: 'Which treaty formally ended World War I?',
        possibleAnswers: [
            'Treaty of Versailles',
            'Treaty of Paris',
            'Treaty of London',
            'Treaty of Berlin'
        ],
        correctAnswer: 'Treaty of Versailles'
    },
    {
        topic: 'WWI',
        question: 'Who was the U.S. President during most of World War I?',
        possibleAnswers: [
            'Theodore Roosevelt',
            'William Taft',
            'Woodrow Wilson',
            'Warren Harding'
        ],
        correctAnswer: 'Woodrow Wilson'
    },
    {
        topic: 'WWI',
        question: 'What was the name of the German air force in WWI?',
        possibleAnswers: [
            'Luftstreitkräfte',
            'Imperial Air Service',
            'Flying Corps',
            'Deutsche Fliegertruppen'
        ],
        correctAnswer: 'Luftstreitkräfte'
    },
    {
        topic: 'WWI',
        question: 'Which empire collapsed after WWI?',
        possibleAnswers: [
            'British Empire',
            'Ottoman Empire',
            'Roman Empire',
            'Persian Empire'
        ],
        correctAnswer: 'Ottoman Empire'
    }
]

const quizContainer = document.getElementById('quizContainer')
const quizProgress = document.getElementById('quizProgress')
const questionContainer = document.getElementById('questionContainer')
const answerContainer = document.getElementById('answerContainer')
let currentQuestionIndex = 0;
const correctAnswer = document.getElementById('correctAnswer');
const wrongAnswer = document.getElementById('wrongAnswer');
let score = 0;
const scoreContainer = document.getElementById('score');

function handleQuestion(index){
    // Refreshing
    answerContainer.innerHTML = '';
    quizProgress.innerHTML = '';

    questions.forEach(q => {
        quizProgress.innerHTML += '<span></span>';
});
    let spans = document.querySelectorAll('span');
    for (let i = 0; i <= index; i++) {
        spans[i].classList.add('seen');
    }

    questionContainer.innerHTML = 
    `<p> ${questions[index].topic} </p>
    <p> ${questions[index].question} </p>`;
    questions[index].possibleAnswers.forEach(answer => {
        answerContainer.innerHTML += 
        `<button>${answer}</button>`;
    });

    let answers = document.querySelectorAll('button');
    answers.forEach(answer => {
        answer.addEventListener('click', e => {
            // Keeping these here so they don't get overwritten for now at least
            correctAnswer.innerHTML = '';
            wrongAnswer.innerHTML = '';
            scoreContainer.innerHTML = '';

            if (e.target.textContent === questions[index].correctAnswer) {
                correctAnswer.innerHTML = `<p> Correct! </p>`;
                score++;
                scoreContainer.innerHTML += `<p> Score: ${score} </p>`;
            } else {
                wrongAnswer.innerHTML = `<p> Wrong! </p>`;
                scoreContainer.innerHTML += `<p> Score: ${score} </p>`;
            }
            if (currentQuestionIndex === questions.length - 1) {
                currentQuestionIndex = 0;
            } else {
                currentQuestionIndex++;
            } handleQuestion(currentQuestionIndex);
    });

});
} handleQuestion(currentQuestionIndex);



