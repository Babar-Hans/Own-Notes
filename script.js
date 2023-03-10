const addBtn = document.querySelector("#addbtn");
let main = document.querySelector("#main");

addBtn.addEventListener("click", function(){
    addNote();
})

const addNote = ()=>{
    let note = document.createElement("div");
    note.classList.add("note");
    note.innerHTML = `
              <div class="toolbox">
                <h2>Notes</h2>
                <i class="fa-solid fa-floppy-disk"></i>
                <i class="fa-solid fa-trash"></i>
              </div>
              <textarea></textarea>
    `;
    main.appendChild(note);
} 