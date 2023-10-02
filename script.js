//Agregar tarea
function agregarTarea(){
    const nuevaTareaInput = document.getElementById("nuevaTarea");
    const listaTareas = document.getElementById("listaTareas");
    const tarea = nuevaTareaInput.value.trim();

    if(tarea !== "") {
        const nuevaTarea = document.createElement("li");
        nuevaTarea.textContent = tarea;

        const botonEliminar = document.createElement("button");
        botonEliminar.textContent = "Eliminar";
        botonEliminar.className = "delete";
        botonEliminar.onclick = function(){
            listaTareas.removeChild(nuevaTarea);
        };
        nuevaTarea.appendChild(botonEliminar);
        listaTareas.appendChild(nuevaTarea);
        nuevaTareaInput.value = "";
    }
};

function marcarHecha(tarea){
    tarea.classList.toggle("completed");
};
document.getElementById("listaTareas").addEventListener("click", function(event){
    if(event.target.tagName === "LI"){
        marcarHecha(event.target);
    }
}) 

document.getElementById("agregar").addEventListener("click", agregarTarea) 

//mostrar las completas

function mostrarCompletas(){
    const tareas = document.querySelectorAll("li");
    tareas.forEach(tarea => {
        if(tarea.classList.contains("completed")){
            tarea.style.display = "flex";
        }else{
            tarea.style.display = "none";
        }
    });
}

//mostrar pendientes

function mostrarPendientes(){
    const tareas = document.querySelectorAll("li");
    tareas.forEach(tarea => {
        if(!tarea.classList.contains("completed")){
            tarea.style.display = "flex";
        }else{
            tarea.style.display = "none";
        }
    });
}

//mostrar todas
function mostrarTodas(){
    const tareas = document.querySelectorAll("li");
    tareas.forEach(tarea => {
        tarea.style.display = "flex";
    });
}

document.getElementById("mostrarCompletadas").addEventListener("click", mostrarCompletas);

document.getElementById("mostrarPendientes").addEventListener("click", mostrarPendientes);

document.getElementById("mostrarTodas").addEventListener("click", mostrarTodas);