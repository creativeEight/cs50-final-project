

const getCourseDB = () => {
  axios
    .get("https://express-app-av98.onrender.com/class")
    .then((response) => {
      console.log(response.data);
      let courses = response.data;
      courses.forEach((course) => {
        createCourseCard(course);
      });
    })
    .catch((error) => console.error(error));
};

const createCourseCard = (course) => {
    let parent = document.getElementsByClassName("myclass")[0];
    // Create a card
    let card = document.createElement("div");
    card.className = "card me-2 mb-2";
    card.style.width = "max(18rem,20%)";
    parent.appendChild(card);

    //Create card image header
    let image_path = "";
    if(course.courseID.includes("PY")){
        image_path = "../assets/class/python.png";
    }
    else if(course.courseID.includes("LEG")){
        image_path = "../assets/class/lego.png";
    }
    else if(course.courseID.includes("ARD")){
        image_path = "../assets/class/arduino.png";
    }
    else{
        image_path = "../assets/class/web.png";
    }
    let img = document.createElement("img");
    img.className = "card-img-top";
    img.alt = course.courseID;
    img.src = image_path;
    card.appendChild(img);

    //Create card body
    let card_body = document.createElement("div");
    card_body.className = "card-body";
    card.appendChild(card_body);

    //Create card title
    let card_title = document.createElement("h5");
    card_title.className = "card-title";
    card_title.innerHTML = course.name;
    card_body.appendChild(card_title);

    //Create card text
    let card_text = document.createElement("p");
    card_text.className = "card-text";
    card_text.innerHTML = course.desc;
    card_body.appendChild(card_text);


    //Create card sink 
    let card_sink = document.createElement("ul");
    card_sink.className = "list-group list-group-flush";
    card.appendChild(card_sink);

    //Create card sink item 1: Calendar
    let item_calendar = document.createElement("li");
    item_calendar.className = "list-group-item";
    item_calendar.innerHTML = "<i class=\"fa-regular fa-calendar me-2\"></i> Every +"+course.day+"+ (Ongoing)";
    card_sink.appendChild(item_calendar);

    //Create card sink item 2: Time
    let item_time = document.createElement("li");
    item_time.className = "list-group-item";
    item_time.innerHTML = "<i class=\"fa-regular fa-clock me-2\"></i>" + course.time;
    card_sink.appendChild(item_time);

    //Create card sink item 3: Tutor
    let item_tutor = document.createElement("li");
    item_tutor.className = "list-group-item";
    item_tutor.innerHTML = "<i class=\"fa-solid fa-chalkboard-user me-2\"></i>"+ course.tutor;
    card_sink.appendChild(item_tutor);


    //Create card body II
    let card_body2 = document.createElement("div");
    card_body2.className = "card-body";
    card.appendChild(card_body2);

    //Create a redirect link 
    let button = document.createElement("a");
    button.className = "btn btn-primary d-block";
    button.innerHTML = "Register Now";
    button.href = "/cs50-final-project/home";
    card_body2.appendChild(button);
}

getCourseDB();
