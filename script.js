// burger menu variables
let toggle = document.getElementsByClassName("toggle_container")[0];
let items = document.getElementsByClassName("items")[0];

// to do page variables
let text = document.getElementById("txt");
let btn = document.getElementById("bton");
let paragraph = document.getElementById("out");

// Quiz page variables
let start_btn = document.getElementById("st-btn");
let next_btn = document.getElementById("nx-btn");
let q_content = document.getElementById("q-content");
let q_context = document.getElementById("q-context");
let ans_context = document.getElementById("ans-context");

let current_index, shuffled_questions;
// burger menu code
toggle.addEventListener("click", () =>{
    items.classList.toggle('active');
})

// to do page code
if(btn){
    btn.addEventListener('click' , () => {
        let par = document.createElement ('p');
        par.innerHTML = text.value;
        text.value ="";
        paragraph.appendChild(par);
        paragraph.classList.add("parset");
        par.addEventListener('click', () => {
            par.style.textDecoration ="line-through";
        });
        par.addEventListener('dblclick', () => {
            paragraph.removeChild(par);
        });
        });
}

// Quiz page code
if(start_btn){
    start_btn.addEventListener("click", start_button);
}
function first_stat()
{
    q_content.classList.add('hide');
    next_btn.classList.add('hide');
    start_btn.classList.remove('hide');
}

function start_button () {
    q_content.classList.remove('hide');
    next_btn.classList.remove('hide');
    start_btn.classList.add('hide');
    current_index = 0;
    shuffled_questions =questions.sort(()=>Math.random-0.5);
    showquestion(shuffled_questions[current_index]);
    if(next_btn){
        next_btn.addEventListener("click", next_button);
    }
    
}
function showquestion(questions) {
    q_context.innerText = questions.question;
    questions.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText=answer.text;
        button.classList.add("btn");
        ans_context.appendChild(button);
        if(answer.correct)
        {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click",chk_answer)
    });

}
function next_button () {
    
    // let q = shuffled_questions[current_index];
    // q.answers.forEach(answer=> {
    //     an
    // });
    ans_context.innerHTML='';
    current_index++;
    if(questions.length>current_index)
    {
        showquestion(shuffled_questions[current_index]);
    }
    else{
        first_stat();
    }
    
}
function chk_answer (button) {
    const target_button = button.target;
    const button_state = target_button.dataset.correct;
    
    if(button_state)
        {
            target_button.classList.add("correct");
        }
    else
        {
            target_button.classList.add("wrong");
        }
}

const questions =[
    {
        question: "what is my age?",
        answers :[
            {text: "23", correct: true},
            {text: "26", correct: false},
            {text: "22", correct: false},
            {text: "24", correct: false},
        ] 
    },
    {
        question: "what is my college?",
        answers :[
            {text: "computer engineering", correct: true},
            {text: "computer science", correct: false},
            {text: "Art", correct: false},
            {text: "Medicine", correct: false},
        ] 
    },
    {
        question: "what is my country",
        answers :[
            {text: "Egypt", correct: true},
            {text: "Norway", correct: false},
            {text: "Indonesia", correct: false},
            {text: "Turkey", correct: false},
        ] 
    }
]

    