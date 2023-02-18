//Simple Auth
function checkAdmin() {
  let hiddenKey = prompt("What is the hidden key?");
  if (hiddenKey !== "1234") {
    window.location.href = "/home";
  }
}

const getStudentDB = () => {
    axios
    .get("https://express-app-av98.onrender.com/student")
    .then((response) => {
      const students = response.data;
      students.forEach((student,index) => {
        createStudentCell(index,student);
      });
    })
    .catch((error) => console.error(error));
};

const createStudentCell = (index, data) => {
  let parent = document.getElementsByClassName("studentDB-body")[0];
  let tr = document.createElement("tr");
  parent.appendChild(tr);

  //Create Index Cell
  let index_cell = document.createElement("td");
  index_cell.innerHTML = index+1;
  tr.appendChild(index_cell);

  //Create Name Cell
  let name_cell = document.createElement("td");
  name_cell.innerHTML = data.name;
  tr.appendChild(name_cell);

  //Create Phone Cell
  let phone_cell = document.createElement("td");
  phone_cell.innerHTML = data.phone;
  phone_cell.className = "d-md-cell";
  tr.appendChild(phone_cell);

  //Create Course Cell
  let course_cell = document.createElement("td");
  course_cell.innerHTML = data.class[0];
  tr.appendChild(course_cell);

  //Create Action Cell
  let action_cell = document.createElement("td");
  action_cell.className = "d-md-cell";
  //Create View Button
  let view_button = document.createElement("button");
  view_button.className = "btn btn-primary mx-1";
  view_button.innerHTML = "<i class=\"fa-solid fa-eye\"></i>"
  action_cell.appendChild(view_button);
  // Create Edit Button
  let edit_button = document.createElement("button");
  edit_button.className = "btn btn-primary mx-1";
  edit_button.innerHTML = "<i class=\"fa-solid fa-pen-to-square\"></i>"
  action_cell.appendChild(edit_button);
  // Create Delete Button
  let delete_button = document.createElement("button");
  delete_button.className = "btn btn-danger mx-1";
  delete_button.innerHTML = "<i class=\"fa-solid fa-trash\"></i>"
  action_cell.appendChild(delete_button);

  tr.appendChild(action_cell);
};

const getCourseDB = () => {
    axios
    .get("https://express-app-av98.onrender.com/class")
    .then((response) => {
      console.log(response.data);
      let courses = response.data;
      courses.forEach((course)=> {
        createCourseCell(course);
      })
    })
    .catch((error) => console.error(error));
};

const createCourseCell = (data) => {
    let parent = document.getElementsByClassName("classDB-body")[0];
    let tr = document.createElement("tr");
    parent.appendChild(tr);
  
    //Create Index Cell
    let index_cell = document.createElement("td");
    index_cell.innerHTML = data.courseID;
    tr.appendChild(index_cell);
  
    //Create Name Cell
    let name_cell = document.createElement("td");
    name_cell.innerHTML = data.name;
    tr.appendChild(name_cell);
  
    //Create day Cell
    let day_cell = document.createElement("td");
    day_cell.innerHTML = data.day;
    day_cell.className = "d-md-cell";
    tr.appendChild(day_cell);
  
    //Create Time Cell
    let time_cell = document.createElement("td");
    time_cell.innerHTML = data.time;
    tr.appendChild(time_cell);

     //Create Tutor Cell
     let tutor_cell = document.createElement("td");
     tutor_cell.innerHTML = data.tutor;
     tr.appendChild(tutor_cell);

     //Create Student Count Cell
     let count_cell = document.createElement("td");
     count_cell.innerHTML = data.count + " student(s)";
     tr.appendChild(count_cell);
  
    //Create Action Cell
    let action_cell = document.createElement("td");
    action_cell.className = "d-md-cell";
    //Create View Button
    let view_button = document.createElement("button");
    view_button.className = "btn btn-primary mx-1";
    view_button.innerHTML = "<i class=\"fa-solid fa-eye\"></i>"
    action_cell.appendChild(view_button);
    // Create Edit Button
    let edit_button = document.createElement("button");
    edit_button.className = "btn btn-primary mx-1";
    edit_button.innerHTML = "<i class=\"fa-solid fa-pen-to-square\"></i>"
    action_cell.appendChild(edit_button);
    // Create Delete Button
    let delete_button = document.createElement("button");
    delete_button.className = "btn btn-danger mx-1";
    delete_button.innerHTML = "<i class=\"fa-solid fa-trash\"></i>"
    action_cell.appendChild(delete_button);
  
    tr.appendChild(action_cell);
  };


checkAdmin();
getStudentDB();
getCourseDB();