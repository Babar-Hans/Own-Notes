const addBtn = document.querySelector("#addbtn");
let main = document.querySelector("#main");


const savenote = ()=>{
  const notes = document.querySelectorAll(".note textarea")
  console.log(notes)
  const data = [];
  notes.forEach(
  (note)=>{
    data.push(note.value);
  }
  )
  console.log(data);

}


addBtn.addEventListener("click",()=>{
    addNote();
})
const addNote = ()=>{
    let note = document.createElement("div");
    note.classList.add("note");
    note.innerHTML = `
              <div class="toolbox">
                <h2>Notes</h2>
                <i class="save fa-solid fa-floppy-disk"></i>
                <i class="delete fa-solid fa-trash"></i>
              </div>
              <textarea></textarea>
    `;
   //delete event
    note.querySelector(".delete").addEventListener("click",()=>{
      note.remove();
    })

  //save event
    note.querySelector(".save").addEventListener("click",
    ()=>{
      savenote()
    })


    main.appendChild(note);

} 
addNote();
