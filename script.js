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
        buttonQuestion.setAttribute('aria-controls',`answer${index}`);
        buttonQuestion.setAttribute('aria-label', `Toggle answer to question ${index + 1} of ${data.length}`)

        buttonQuestion.innerHTML = `
        <h2>${element.question}</h2>
        <div class="icon-container" aria-hidden="true" ></div>
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
    const buttons = document.querySelectorAll('.button-question');
    buttons.forEach((element,index)=>{
        element.addEventListener('click', e => toggle(e))
        element.addEventListener('keydown', (e) => keyDown(e,index,buttons))
    })
}
function toggle(e){
    const divFaqs = e.target.closest('.faqs');
    const divAnswer =divFaqs.querySelector('.div-answer');
    const isExpanded = e.target.getAttribute('aria-expanded') === 'true'

    e.target.setAttribute('aria-expanded', !isExpanded);
    divAnswer.setAttribute('aria-hidden', isExpanded ? 'true' : 'false');
    
    divFaqs.classList.toggle('toggle');
}

function keyDown(e,index,buttons){
    switch (e.key) {
        case ' ':
            e.preventDefault();
            buttons[index].click();
            break;
        case 'ArrowUp':
            e.preventDefault();
            if (index > 0) {
                buttons[index -1].focus()
            }
            break;

        case 'ArrowDown':
            e.preventDefault();
            if (index < buttons.length -1) {
                buttons[index+1].focus()
            }
        break;
    
        default:
            break;
    }
}