const questions = [{
        question: `What is the output of the following C code snippet?<br>
<pre>
#include &lt;stdio.h&gt;
int main() {
    int a = 5;
    int b = 2;
    printf("%d\\n", a++ + ++b);
    return 0;
}
</pre>`,
        answers: [
            { text: "7", correct: false },
            { text: "8", correct: true },
            { text: "9", correct: false },
            { text: "10", correct: false },
        ]
    },
    {
        question: `What will be the output of the following C code snippet?<br>
<pre>
#include &lt;stdio.h&gt;
int main() {
    char str[] = "Hello, World!";
    printf("%c\\n", *(&str[6]));
    return 0;
}
</pre>`,
        answers: [
            { text: "H", correct: false },
            { text: "W", correct: true },
            { text: "o", correct: false },
            { text: ",", correct: false },
        ]
    },
    {
        question: "Which of the following is not a valid storage class in C?",
        answers: [
            { text: "auto", correct: false },
            { text: "register", correct: false },
            { text: "static", correct: false },
            { text: "public", correct: true },
        ]
    },
    {
        question: `What is the correct way to declare a function in C that does not take any arguments and returns an integer?`,
        answers: [
            { text: "int func();", correct: false },
            { text: "int func(void);", correct: true },
            { text: "void func(int);", correct: false },
            { text: "func() int;", correct: false },
        ]
    },
    {
        question: `What is the size of a float in a standard C implementation on a 32-bit system?`,
        answers: [
            { text: "2 bytes", correct: false },
            { text: "4 bytes", correct: true },
            { text: "8 bytes", correct: false },
            { text: "Depends on the system", correct: false },
        ]
    },
    {
        question: `Which operator is used to access the value stored in a pointer variable?`,
        answers: [
            { text: "*", correct: true },
            { text: "&", correct: false },
            { text: "->", correct: false },
            { text: ".", correct: false },
        ]
    },
    {
        question: `What will be the output of the following C code snippet?<br>
<pre>
#include &lt;stdio.h&gt;
int main() {
    int arr[] = {1, 2, 3, 4, 5};
    int *ptr = arr;
    printf("%d\\n", *(ptr + 3));
    return 0;
}
</pre>`,
        answers: [
            { text: "1", correct: false },
            { text: "2", correct: false },
            { text: "4", correct: true },
            { text: "5", correct: false },
        ]
    },
    {
        question: "Which of the following statements about arrays in C is incorrect?",
        answers: [
            { text: "The array index starts from 0.", correct: false },
            { text: "The size of the array must be a constant expression.", correct: false },
            { text: "Arrays can be initialized at the time of declaration.", correct: false },
            { text: "The size of an array can be changed after its declaration.", correct: true },
        ]
    },
    {
        question: `What is the output of the following code?<br>
<pre>
#include &lt;stdio.h&gt;
int main() {
    int a = 10;
    int b = 20;
    int c;
    c = a, b;
    printf("%d\\n", c);
    return 0;
}
</pre>`,
        answers: [
            { text: "10", correct: true },
            { text: "20", correct: false },
            { text: "0", correct: false },
            { text: "Compiler error", correct: false },
        ]
    },
    {
        question: `What will be the output of the following C code snippet?<br>
<pre>
#include &lt;stdio.h&gt;
void func() {
    static int num = 5;
    printf("%d ", num);
    num++;
}
int main() {
    func();
    func();
    func();
    return 0;
}
</pre>`,
        answers: [
            { text: "5 5 5", correct: false },
            { text: "5 6 7", correct: true },
            { text: "6 7 8", correct: false },
            { text: "5 6 6", correct: false },
        ]
    },
    {
        question: "Which library function is used to find the last occurrence of a character in a string in C?",
        answers: [
            { text: "strchr()", correct: false },
            { text: "strrchr()", correct: true },
            { text: "strstr()", correct: false },
            { text: "strnstr()", correct: false },
        ]
    },
    {
        question: `What will be the output of the following C code snippet?<br>
<pre>
#include &lt;stdio.h&gt;
int main() {
    int x = 5;
    printf("%d %d %d\\n", x, x++, ++x);
    return 0;
}
</pre>`,
        answers: [
            { text: "5 6 6", correct: false },
            { text: "5 5 6", correct: false },
            { text: "Undefined behavior", correct: true },
            { text: "Compiler error", correct: false },
        ]
    },
    {
        question: "Which of the following is used to define a macro in C?",
        answers: [
            { text: "#macro", correct: false },
            { text: "#define", correct: true },
            { text: "#include", correct: false },
            { text: "#ifndef", correct: false },
        ]
    },
    {
        question: "What is the purpose of the `volatile` keyword in C?",
        answers: [
            { text: "It indicates that the variable is read-only.", correct: false },
            { text: "It indicates that the variable can be modified in ways not explicitly specified by the program.", correct: true },
            { text: "It indicates that the variable should be optimized by the compiler.", correct: false },
            { text: "It indicates that the variable is constant.", correct: false },
        ]
    },
    {
        question: `What will be the output of the following C code snippet?<br>
<pre>
#include &lt;stdio.h&gt;
int main() {
    int a = 3, b = 4, c = 5;
    printf("%d\\n", a + b * c / a);
    return 0;
}
</pre>`,
        answers: [
            { text: "7", correct: false },
            { text: "10", correct: false },
            { text: "11", correct: true },
            { text: "12", correct: false },
        ]
    },
    {
        question: `What is the output of the following C code snippet?<br>
<pre>
#include &lt;stdio.h&gt;
int main() {
    int x = 5;
    printf("%d %d %d\\n", x, x++, ++x);
    return 0;
}
</pre>`,
        answers: [
            { text: "5 6 6", correct: false },
            { text: "5 5 6", correct: false },
            { text: "Undefined behavior", correct: true },
            { text: "Compiler error", correct: false },
        ]
    },
    {
        question: `Which of the following is used to define a macro in C?<br>
<pre>
#include &lt;stdio.h&gt;
int main() {
    int a = 10;
    int b = 20;
    int c;
    c = a, b;
    printf("%d\\n", c);
    return 0;
}
</pre>`,
        answers: [
            { text: "#macro", correct: false },
            { text: "#define", correct: true },
            { text: "#include", correct: false },
            { text: "#ifndef", correct: false },
        ]
    },
    {
        question: "What is the purpose of the `volatile` keyword in C?",
        answers: [
            { text: "It indicates that the variable is read-only.", correct: false },
            { text: "It indicates that the variable can be modified in ways not explicitly specified by the program.", correct: true },
            { text: "It indicates that the variable should be optimized by the compiler.", correct: false },
            { text: "It indicates that the variable is constant.", correct: false },
        ]
    },
    {
        question: `What will be the output of the following C code snippet?<br>
<pre>
#include &lt;stdio.h&gt;
int main() {
    int a = 3, b = 4, c = 5;
    printf("%d\\n", a + b * c / a);
    return 0;
}
</pre>`,
        answers: [
            { text: "7", correct: false },
            { text: "10", correct: false },
            { text: "11", correct: true },
            { text: "12", correct: false },
        ]
    },
];

const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    nextButton.style.display = "none";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerText = answer.text;
        button.classList.add("btn");
        button.addEventListener("click", () => selectAnswer(button, answer.correct));
        answerButtonsElement.appendChild(button);
    });
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

function selectAnswer(button, correct) {
    const selectedButton = button;
    if (correct) {
        score++;
        selectedButton.classList.add("correct");
    } else {
        selectedButton.classList.add("incorrect");
    }

    Array.from(answerButtonsElement.children).forEach(button => {
        button.disabled = true;
        if (button.innerText === questions[currentQuestionIndex].answers.find(a => a.correct).text) {
            button.classList.add("correct");
        }
    });

    nextButton.style.display = "block";
}

function showNextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Restart";
    nextButton.style.display = "block";
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        showNextQuestion();
    } else {
        startQuiz();
    }
});

startQuiz();