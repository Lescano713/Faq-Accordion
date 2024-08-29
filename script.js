const container = document.querySelector('#faqs-container');

fetch('data.json')
.then(res => res.json())
.then(data => uploadingFaqs(data));

function uploadingFaqs(data){
    data.forEach(element => { 
        const div = document.createElement('div');
        div.classList.add('faqs')
        const divQuestion = document.createElement('div');
        divQuestion.classList.add('div-question');
        const divAnswer = document.createElement('div');
        divAnswer.classList.add('div-answer');
        divQuestion.innerHTML = `
        <h2>${element.question}</h2>
        <div class="icon-container"></div>
        `;
        divAnswer.innerHTML =`
        <p>${element.answer}</p>
        `;

        div.append(divQuestion,divAnswer);
        container.appendChild(div);
    });
    hideShow()
}
function hideShow(){
    const icon = document.querySelectorAll('.icon-container');
    icon.forEach(element=> element.addEventListener('click', e => element.classList.toggle('icon-minus')))
}
