const container = document.querySelector('#faqs-container');

fetch('data.json')
.then(res => res.json())
.then(data => uploadingFaqs(data));

function uploadingFaqs(data){
    data.forEach(element => { 
        const div = document.createElement('div');
        div.classList.add('faqs')
        const buttonQuestion = document.createElement('button');
        buttonQuestion.classList.add('button-question');
        const divAnswer = document.createElement('div');
        divAnswer.classList.add('div-answer');
        buttonQuestion.innerHTML = `
        <h2>${element.question}</h2>
        <div class="icon-container"></div>
        `;
        divAnswer.innerHTML =`
        <p>${element.answer}</p>
        `;

        div.append(buttonQuestion,divAnswer);
        container.appendChild(div);
    });
    hideShow()
}
function hideShow(){
    const icon = document.querySelectorAll('.icon-container');
    icon.forEach(element=> 
        element.addEventListener('click', e =>{
            const divFaqs = e.target.closest('.faqs');
            divFaqs.classList.toggle('toggle');

        })
    )
}
