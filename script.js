const addBtn = document.querySelector("#addbtn");
let main = document.querySelector("#main");


addBtn.addEventListener("click",()=>{
    addNote();
})

const addNote = ()=>{
    let note = document.createElement("div");
    note.classList.add("note");
    note.innerHTML = `
              <div class="toolbox">
                <h2>Notes</h2>
                <i class="fa-solid fa-floppy-disk"></i>
                <i class="delete fa-solid fa-trash"></i>
              </div>
              <textarea></textarea>
    `;
  
    note.querySelector(".delete").addEventListener("click",()=>{
      note.remove();
    })

    main.appendChild(note);

} 
addNote();
