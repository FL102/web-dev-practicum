// Trash can icon for the delete button
const TRASH_ICON = `
    <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
        <path d="M4 7h16M10 11v6M14 11v6M6 7l1 12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2l1-12M9 7V4h6v3"
              fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`;

window.onload = function(){
    const input = document.querySelector('#newtask input');

    function addTask(){
        if(input.value.trim().length == 0){
            alert("Введите описание задачи");
            return;
        }

        const task = document.createElement('div');
        task.className = 'task';

        const name = document.createElement('span');
        name.className = 'taskname';
        // textContent keeps user input from being parsed as HTML
        name.textContent = input.value.trim();

        const del = document.createElement('button');
        del.className = 'delete';
        del.title = 'Удалить задачу';
        del.setAttribute('aria-label', 'Удалить задачу');
        del.innerHTML = TRASH_ICON;
        del.onclick = function(){
            this.parentNode.remove();
        }

        task.append(name, del);
        document.querySelector('#tasks').append(task);

        input.value = '';
        input.focus();
    }

    document.querySelector('#push').onclick = addTask;
    input.onkeydown = function(event){
        if(event.key == 'Enter'){
            addTask();
        }
    }
}
