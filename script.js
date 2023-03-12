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

  if(data.length === 0){
   localStorage.removeItem("notes")
  }
 else{
   localStorage.setItem("notes",JSON.stringify(data))
}

}



addBtn.addEventListener("click",()=>{
    addNote();
})
const addNote = (text = "")=>{
    let note = document.createElement("div");
    note.classList.add("note");
    note.innerHTML = `
              <div class="toolbox">
                <h2>Notes</h2>
                <i class="save fa-solid fa-floppy-disk"></i>
                <i class="delete fa-solid fa-trash"></i>
              </div>
              <textarea>${text}</textarea>
    `;
   //delete event
    note.querySelector(".delete").addEventListener("click",()=>{
      note.remove();
      savenote()
    })

  //save event
    note.querySelector(".save").addEventListener("click",
    ()=>{
      savenote()
      
    })
    note.querySelector("textarea").addEventListener("focusout",()=>{
      savenote()
    })
    main.appendChild(note);
    savenote()

} 
(
  function(){
    const lsnotes = JSON.parse(localStorage.getItem("notes"));

    if(lsnotes === null ){
      addNote();
    }
    else{
      lsnotes.forEach(
        (lsnotes)=>{
          addNote(lsnotes);
        }
      )
    }


    // else{
    //   lsnotes.forEach(
    //     (lsnotes)=>{
    //           addNote(lsnotes)
    //     }
    //     )
    // }
  }
)()
