const input=document.querySelector(".user_input")
const add_btn=document.querySelector(".add_btn")
const todobox=document.querySelector(".todobox")


add_btn.addEventListener("click",function(e){
    e.preventDefault();
    const task=input.value;
    if(!task){
        alert("Please Write Something To Add In Task List")
        return;
    }
    else{
        add_task(input.value)
        input.value="";
    }
    
})

const add_task=(content)=>{
    const listItem=document.createElement("li")
    listItem.classList.add("list-group-item","mt-2","bg-dark", "text-white","border-danger")
    listItem.innerHTML=`<p class="text_para p-1 m-1 border-dark ">${content}</p><span class="float-end " >
    <i class="edit fa fa-edit me-2 " style="font-size: 25px"></i>
    <i class="delete fa fa-trash-o me-1" style="font-size: 25px"></i>
   </span>`;
  let pos=todobox.firstElementChild;
  if (pos==null){
      todobox.appendChild(listItem)
  }
  else{
    todobox.insertBefore(listItem,pos)
  }
  
listItem.querySelector(".delete").addEventListener("click",function(){
    listItem.remove();
    })
    
const edit_icon=listItem.querySelector(".edit")
edit_icon.addEventListener("click",(e)=>{
     const text_para=listItem.querySelector(".text_para")

    if(edit_icon.classList.contains("fa-edit")){
        edit_icon.classList.remove("fa-edit")
        edit_icon.classList.add("fa-save")
        text_para.contentEditable=true
        text_para.focus(e);
        text_para.style.backgroundColor="black"

        
    }
    else{
        edit_icon.classList.remove("fa-save")
        edit_icon.classList.add("fa-edit")
        text_para.style.backgroundColor=""
        text_para.contentEditable=false
    }
     
    
})

}