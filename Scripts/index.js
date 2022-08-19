// We Use Const State Object so that we can change anything we want to
const state = {
  taskList: [],
};

const taskContents = document.querySelector(".task__contents");
const taskModals = document.querySelector(".task__modal__body");

const htmlTaskContent=({
  id,
  title,
  description,
  type,
  url,

}) => `
 <div class="col-md-6 col-lg-4 mt-3">
 </div>
`



  
