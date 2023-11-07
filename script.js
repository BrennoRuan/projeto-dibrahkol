document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('verOfertas').addEventListener('click', function() {
        document.getElementById('ofertasModal').style.display = 'block';
    });

    var ofertas = document.getElementsByClassName('oferta');
    for (var i = 0; i < ofertas.length; i++) {
        ofertas[i].addEventListener('click', function() {
            var imagemExpandida = this.src;
            document.getElementById('imagemExpandida').src = imagemExpandida;
            document.getElementById('imagemModal').style.display = 'block';
        });
    }

    var fechar = document.getElementsByClassName('fechar');
    for (var j = 0; j < fechar.length; j++) {
        fechar[j].addEventListener('click', function() {
            document.getElementById('ofertasModal').style.display = 'none';
            document.getElementById('imagemModal').style.display = 'none';
        });
    }
});
// Apenas adicione esta parte ao script.js
document.getElementById('imagemExpandida').addEventListener('click', function() {
    this.classList.toggle('expandida');
});


let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');

addBtn.addEventListener('click', addTask);
taskList.addEventListener('click', deleteTask);



function addTask() {
    const task = taskInput.value.trim();
    if (task) {
        tasks.push({ task, done: false });
        saveTasks();
        loadTasks();
        taskInput.value = "";
    }
}


function deleteTask(e) {
    if (e.target.classList.contains('delete')) {
        const li = e.target.parentElement;
        const index = li.id; // Obtém o ID do item clicado
        tasks.splice(index, 1); // Remove o item com o ID correspondente
        saveTasks();
        loadTasks();
    }
}


function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function loadTasks() {
    taskList.innerHTML = '';
    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.textContent = task.task;
        li.setAttribute('id', index); // Atribuição do ID com base no índice
        li.setAttribute('class', task.done ? 'done' : '');
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'X';
        deleteBtn.setAttribute('class', 'delete');
        li.appendChild(deleteBtn);
        taskList.appendChild(li);
    });
}


loadTasks();


document.addEventListener('DOMContentLoaded', function() {
    const verReceitaBtn = document.getElementById('verReceitaBtn');
    const modal = document.getElementById('modal');
    const fecharModal = document.getElementById('fecharModal');

    verReceitaBtn.addEventListener('click', function() {
        modal.style.display = 'block';
    });

    fecharModal.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});
