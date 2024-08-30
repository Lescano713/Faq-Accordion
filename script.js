const container = document.querySelector('#faqs-container');

fetch('data.json')
.then(res => res.json())
.then(data => uploadingFaqs(data));

function uploadingFaqs(data){
    data.forEach((element, index) => { 
        const article = document.createElement('article');
        article.classList.add('faqs')
        const buttonQuestion = document.createElement('button');
        buttonQuestion.classList.add('button-question');
        buttonQuestion.type = 'button';
        buttonQuestion.setAttribute('aria-expanded', 'false');
        buttonQuestion.setAttribute('aria-controls',`answer-id${index}`)

        buttonQuestion.innerHTML = `
        <h2>${element.question}</h2>
        <div class="icon-container"></div>
        `;

        const divAnswer = document.createElement('div');
        divAnswer.classList.add('div-answer');
        divAnswer.setAttribute('id', `answer${index}`)
        divAnswer.setAttribute('aria-hidden', 'true');

        divAnswer.innerHTML =`
        <p>${element.answer}</p>
        `;

        article.append(buttonQuestion,divAnswer);
        container.appendChild(article);
    });
    hideShow()
}
function hideShow(){
    const icon = document.querySelectorAll('.icon-container');
    icon.forEach(element=> 
        element.addEventListener('click', e =>{
            const divFaqs = e.target.closest('.faqs');
            const divAnswer =divFaqs.querySelector('.div-answer');
            const button = divFaqs.querySelector('button');
            const isExpanded = button.getAttribute('aria-expanded') === 'true'

            button.setAttribute('aria-expanded', !isExpanded);
            divAnswer.setAttribute('aria-hidden', isExpanded ? 'true' : 'false');
            
            divFaqs.classList.toggle('toggle');

        })
    )
}
