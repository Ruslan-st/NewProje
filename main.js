function dayToIndex(day) {
  switch (day) {
    case "Monday":
      return 0;
    case "Tuesday":
      return 1;
    case "Wednesday":
      return 2;
    case "Thursday":
      return 3;
    case "Friday":
      return 4;
    default:
      throw new Error("Invalid day: " + day);
  }
}

function hourToIndex(hour) {
  switch (hour) {
    case "8:30":
      return 0;
    case "9:30":
      return 1;
    case "10:30":
      return 2;
    case "11:30":
      return 3;
    case "12:30":
      return 4;
    case "13:30":
      return 5;
    case "14:30":
      return 6;
    case "15:30":
      return 7;
    case "16:30":
      return 8;
  }
}

function yearToIndex(year) {
  return year - 1;
}

class Classroom {
  constructor(id, capacity) {
    this.id = id;
    this.capacity = capacity;
    this.arr = [
      [
        { time: "8:30", busy: false },
        { time: "9:30", busy: false },
        { time: "10:30", busy: false },
        { time: "11:30", busy: false },
        { time: "12:30", busy: false },
        { time: "13:30", busy: false },
        { time: "14:30", busy: false },
        { time: "15:30", busy: false },
        { time: "16:30", busy: false },
      ],
      [
        { time: "8:30", busy: false },
        { time: "9:30", busy: false },
        { time: "10:30", busy: false },
        { time: "11:30", busy: false },
        { time: "12:30", busy: false },
        { time: "13:30", busy: false },
        { time: "14:30", busy: false },
        { time: "15:30", busy: false },
        { time: "16:30", busy: false },
      ],
      [
        { time: "8:30", busy: false },
        { time: "9:30", busy: false },
        { time: "10:30", busy: false },
        { time: "11:30", busy: false },
        { time: "12:30", busy: false },
        { time: "13:30", busy: false },
        { time: "14:30", busy: false },
        { time: "15:30", busy: false },
        { time: "16:30", busy: false },
      ],
      [
        { time: "8:30", busy: false },
        { time: "9:30", busy: false },
        { time: "10:30", busy: false },
        { time: "11:30", busy: false },
        { time: "12:30", busy: false },
        { time: "13:30", busy: false },
        { time: "14:30", busy: false },
        { time: "15:30", busy: false },
        { time: "16:30", busy: false },
      ],
      [
        { time: "8:30", busy: false },
        { time: "9:30", busy: false },
        { time: "10:30", busy: false },
        { time: "11:30", busy: false },
        { time: "12:30", busy: false },
        { time: "13:30", busy: false },
        { time: "14:30", busy: false },
        { time: "15:30", busy: false },
        { time: "16:30", busy: false },
      ],
    ];
  }

  makeBusy(day, hour) {
    this.arr[dayToIndex(day)].find(
      (element) => element.time === hour
    ).busy = true;
  }

  makeFree(day, hour) {
    this.arr[dayToIndex(day)].find(
      (element) => element.time === hour
    ).busy = false;
  }

  isBusy(day, hour) {
    return this.arr[dayToIndex(day)].find((element) => element.time === hour)
      .busy;
  }
}

class Instructor {
  constructor(name) {
    this.name = name;
    this.busyHours = [[], [], [], [], []];
  }

  addBusyHour(day, hour) {
    this.busyHours[dayToIndex(day)].push(hour);
  }

  isBusy(day, hour) {
    return this.busyHours[dayToIndex(day)].includes(hour);
  }

  isAvailable(day, hour) {
    return !this.busyHours[dayToIndex(day)].includes(hour);
  }
}

class Course {
  constructor(
    code,
    name,
    year,
    credit,
    compulsoryOrElective,
    departmentOrService,
    numberOfStudents,
    instructor,
    hoursPreference
  ) {
    this.code = code;
    this.name = name;
    this.year = year;
    this.credit = credit;
    this.compulsoryOrElective = compulsoryOrElective;
    this.departmentOrService = departmentOrService;
    this.numberOfStudents = numberOfStudents;
    this.instructor = instructor;
    this.hoursPreference = hoursPreference;
  }

  isService() {
    return this.departmentOrService === "S";
  }
}

// Schedule for each year (i.e. 1st year, 2nd year, ...)
class SubSchedule {
  constructor() {
    this.arr = [
      [
        { time: "8:30", courseCode: " ", classroomName: " " },
        { time: "9:30", courseCode: " ", classroomName: " " },
        { time: "10:30", courseCode: " ", classroomName: " " },
        { time: "11:30", courseCode: " ", classroomName: " " },
        { time: "12:30", courseCode: " ", classroomName: " " },
        { time: "13:30", courseCode: " ", classroomName: " " },
        { time: "14:30", courseCode: " ", classroomName: " " },
        { time: "15:30", courseCode: " ", classroomName: " " },
        { time: "16:30", courseCode: " ", classroomName: " " },
      ],
      [
        { time: "8:30", courseCode: " ", classroomName: " " },
        { time: "9:30", courseCode: " ", classroomName: " " },
        { time: "10:30", courseCode: " ", classroomName: " " },
        { time: "11:30", courseCode: " ", classroomName: " " },
        { time: "12:30", courseCode: " ", classroomName: " " },
        { time: "13:30", courseCode: " ", classroomName: " " },
        { time: "14:30", courseCode: " ", classroomName: " " },
        { time: "15:30", courseCode: " ", classroomName: " " },
        { time: "16:30", courseCode: " ", classroomName: " " },
      ],
      [
        { time: "8:30", courseCode: " ", classroomName: " " },
        { time: "9:30", courseCode: " ", classroomName: " " },
        { time: "10:30", courseCode: " ", classroomName: " " },
        { time: "11:30", courseCode: " ", classroomName: " " },
        { time: "12:30", courseCode: " ", classroomName: " " },
        { time: "13:30", courseCode: " ", classroomName: " " },
        { time: "14:30", courseCode: " ", classroomName: " " },
        { time: "15:30", courseCode: " ", classroomName: " " },
        { time: "16:30", courseCode: " ", classroomName: " " },
      ],
      [
        { time: "8:30", courseCode: " ", classroomName: " " },
        { time: "9:30", courseCode: " ", classroomName: " " },
        { time: "10:30", courseCode: " ", classroomName: " " },
        { time: "11:30", courseCode: " ", classroomName: " " },
        { time: "12:30", courseCode: " ", classroomName: " " },
        { time: "13:30", courseCode: " ", classroomName: " " },
        { time: "14:30", courseCode: " ", classroomName: " " },
        { time: "15:30", courseCode: " ", classroomName: " " },
        { time: "16:30", courseCode: " ", classroomName: " " },
      ],
      [
        { time: "8:30", courseCode: " ", classroomName: " " },
        { time: "9:30", courseCode: " ", classroomName: " " },
        { time: "10:30", courseCode: " ", classroomName: " " },
        { time: "11:30", courseCode: " ", classroomName: " " },
        { time: "12:30", courseCode: " ", classroomName: " " },
        { time: "13:30", courseCode: " ", classroomName: " " },
        { time: "14:30", courseCode: " ", classroomName: " " },
        { time: "15:30", courseCode: " ", classroomName: " " },
        { time: "16:30", courseCode: " ", classroomName: " " },
      ],
    ];
  }

  hasAssignedCourse(day, hour) {
    const element = this.arr[dayToIndex(day)][hourToIndex(hour)];
    return !(element.courseCode === " " && element.classroomName === " ");
  }
}

let serviceCoursesData;

class Schedule {
  constructor() {
    this.subSchedules = [
      new SubSchedule(), // 1st year
      new SubSchedule(), // 2nd year
      new SubSchedule(), // 3rd year
      new SubSchedule(), // 4th year
    ];
  }

  findAppropriateClassroom(course, day, hours) {
    return classrooms.find((classroom) => {
      return (
        classroom.capacity >= course.numberOfStudents &&
        hours.every((hour) => !classroom.isBusy(day, hour)) &&
        hours.every(
          (hour) =>
            !this.subSchedules[yearToIndex(course.year)].hasAssignedCourse(
              day,
              hour
            )
        )
      );
    });
  }

  assignServiceCourse(courseCode, day, hours) {
    const courseToAdd = courses.find((course) => courseCode === course.code);
    const appropriateClassroom = this.findAppropriateClassroom(
      courseToAdd,
      day,
      hours
    );
    if (appropriateClassroom === undefined) {
      // TODO: display error msg with alert()
      /*
          schedule.resetSchedule();
          alert('Could not add course ' + courseToAdd.code + ' into the schedule!' +
              ' Please make sure that there is enough number of available classrooms in classrooms.csv!\n');
         */
      console.log(
        "Could not add course " +
          courseToAdd.code +
          " into the schedule!" +
          " Please make sure that there is enough number of available classrooms in classrooms.csv!\n"
      );
      return;
    }

    const subSchedule = this.subSchedules[yearToIndex(courseToAdd.year)];
    const subList = subSchedule.arr[dayToIndex(day)];

    for (let hour of hours) {
      const index = hourToIndex(hour);
      subList[index].courseCode = courseToAdd.code;
      subList[index].classroomName = appropriateClassroom.id;
      appropriateClassroom.makeBusy(day, hour);
    }
  }

  assignAllServiceCourses() {
    const lines = serviceCoursesData.split("\n");
    lines.forEach((line) => {
      const [courseCode, day] = line.split(",");
      const hoursString = line.substring(
        line.indexOf('"') + 1,
        line.lastIndexOf('"')
      );
      const [...hours] = hoursString.split(",");
      this.assignServiceCourse(courseCode, day, hours);
    });
  }

  // method to find classroom for DEPARTMENT courses
  assignDepartmentCourse(courseToAdd, courseDuration) {
    const instructor = courseToAdd.instructor;
    const subSchedule = this.subSchedules[yearToIndex(courseToAdd.year)];

    for (let i = 0; i < daysOfWeek.length; i++) {
      // will iterate 5 times
      const subList = subSchedule.arr[i];
      for (let j = 0; j < hoursInSchedule.length - (courseDuration - 1); j++) {
        // will iterate 7 times, when hoursPref = 3
        const hoursSlice = hoursInSchedule.slice(j, j + courseDuration);
        // If the instructor is available in this slice, find the appropriate classroom and assign the course.
        if (
          hoursSlice.every((hour) =>
            instructor.isAvailable(daysOfWeek[i], hour)
          )
        ) {
          const appropriateClassroom = this.findAppropriateClassroom(
            courseToAdd,
            daysOfWeek[i],
            hoursSlice
          );

          // If the instructor is available, but appropriate class not found for this slice,
          // continue to search appropriate classroom for other hour slices.
          if (appropriateClassroom === undefined) {
            continue;
          }

          hoursSlice.forEach((hour) => {
            const index = hourToIndex(hour);
            subList[index].courseCode = courseToAdd.code;
            subList[index].classroomName = appropriateClassroom.id;
            appropriateClassroom.makeBusy(daysOfWeek[i], hour);
          });

          //console.log(`Course ${courseToAdd.code} (${courseToAdd.numberOfStudents}) is assigned to ${appropriateClassroom.id} (${appropriateClassroom.capacity}) for ${daysOfWeek[i]} ${hoursSlice}\n`)
          //console.log('Course ' + courseToAdd.code + ' ' + ` ${courseToAdd.numberOfStudents}` +' assigned to | ' + daysOfWeek[i] + ' | ' + hoursSlice + ' | ' + appropriateClassroom.id + ' | ' + appropriateClassroom.capacity + '\n');
          return; // Terminate this method if the course is assigned successfully.
        }
      }
    }
    console.log(
      "Could not add course " +
        courseToAdd.code +
        " into the schedule!" +
        " Please make sure that there is enough number of available classrooms in classrooms.csv!\n"
    );
  }

  resetSchedule() {
    classrooms = [];
    courses = [];
    instructors = [];
    classrooms.forEach((classroom) => {
      for (let day of daysOfWeek) {
        for (let hour of hoursInSchedule) {
          classroom.makeFree(day, hour);
        }
      }
    });

    for (let subSchedule of this.subSchedules) {
      for (let day of daysOfWeek) {
        for (let hour of hoursInSchedule) {
          subSchedule.arr[dayToIndex(day)][hourToIndex(hour)].courseCode = " ";
          subSchedule.arr[dayToIndex(day)][hourToIndex(hour)].classroomName =
            " ";
        }
      }
    }

    tableCreator();
  }

  // TODO: eğer ilk 2 saat için yer bulabiliyor, ancak +1 için bulamıyorsa error msg'tan sonra 2 saatlik kısmı unassign et.
  assignRemainingHour(courseToAdd) {
    let dayOfFirstSession = undefined;
    for (let day of daysOfWeek) {
      const subList =
        this.subSchedules[yearToIndex(courseToAdd.year)].arr[dayToIndex(day)];
      for (let hour of hoursInSchedule) {
        if (subList[hourToIndex(hour)].courseCode === courseToAdd.code) {
          dayOfFirstSession = day;
          break;
        }
      }
    }

    for (let otherDay of daysOfWeek) {
      if (otherDay === dayOfFirstSession) {
        continue;
      }

      const subList =
        this.subSchedules[yearToIndex(courseToAdd.year)].arr[
          dayToIndex(otherDay)
        ];
      for (let hour of hoursInSchedule) {
        const appropriateClassroom = this.findAppropriateClassroom(
          courseToAdd,
          otherDay,
          [hour]
        );

        if (appropriateClassroom === undefined) {
          continue;
        }

        const index = hourToIndex(hour);
        subList[index].courseCode = courseToAdd.code;
        subList[index].classroomName = appropriateClassroom.id;
        appropriateClassroom.makeBusy(otherDay, hour);
        return;
      }
    }
  }

  assignAllDepartmentCourses() {
    courses
      .filter((course) => !course.isService())
      .forEach((course) => {
        const hoursPref = course.hoursPreference;
        if (hoursPref.indexOf("+") === -1) {
          this.assignDepartmentCourse(course, parseInt(hoursPref));
        } else {
          this.assignDepartmentCourse(
            course,
            parseInt(hoursPref.substring(0, hoursPref.indexOf("+")))
          );
          this.assignRemainingHour(course);
        }
      });
  }

  addNewCourse(
    code,
    name,
    year,
    credit,
    c_or_e,
    d_or_s,
    numberOfStudents,
    instructorName,
    hoursPreference
  ) {
    const instructor = instructors.find((i) => i.name === instructorName);

    if (instructor) {
      courses.push(
        new Course(
          code,
          name,
          year,
          credit,
          c_or_e,
          d_or_s,
          parseInt(numberOfStudents),
          instructor,
          hoursPreference
        )
      );
    } else {
      // create newInstructor if he/she does not exist in the instructors array.
      const newInstructor = new Instructor(instructorName);
      courses.push(
        new Course(
          code,
          name,
          year,
          credit,
          c_or_e,
          d_or_s,
          parseInt(numberOfStudents),
          newInstructor,
          hoursPreference
        )
      );
      instructors.push(newInstructor);
    }
    const course = courses[courses.length - 1];
    // TODO: bu course için uygun bir classroom bulunamazsa ne gibi bir error handling yapılması gerektiğini düşün.
    if (hoursPreference === "3") {
      this.assignDepartmentCourse(course, 3);
    } else {
      this.assignDepartmentCourse(course, 2);
      this.assignRemainingHour(course);
    }
    tableCreator();
  }

  // new added
  unassignExistingCourse(courseToUnassign) {
    const subSchedule = this.subSchedules[yearToIndex(courseToUnassign.year)];
    for (let day of daysOfWeek) {
      for (let hour of hoursInSchedule) {
        let currentElement =
          subSchedule.arr[dayToIndex(day)][hourToIndex(hour)];
        if (currentElement.courseCode === courseToUnassign.code) {
          const classroom = classrooms.find(
            (cRoom) => cRoom.id === currentElement.classroomName
          );
          classroom.makeFree(day, hour);
          currentElement.courseCode = " ";
          currentElement.classroomName = " ";
        }
      }
    }
  }

  // new added
  updateExistingCourseInformation(
    courseToUpdated,
    year,
    numberOfStudents,
    hoursPreference
  ) {
    this.unassignExistingCourse(courseToUpdated);
    courseToUpdated.year = year;
    courseToUpdated.numberOfStudents = parseInt(numberOfStudents);
    courseToUpdated.hoursPreference = hoursPreference;
    if (hoursPreference === "3") {
      this.assignDepartmentCourse(courseToUpdated, 3);
    } else {
      this.assignDepartmentCourse(courseToUpdated, 2);
      this.assignRemainingHour(courseToUpdated);
    }
    tableCreator();
  }

  // new added
  updateExistingClassroomCapacity(existingClassroom, newCapacity) {
    existingClassroom.capacity = newCapacity;
  }

  // new added
  addNewClassroom(id, capacity) {
    classrooms.push(new Classroom(id, capacity));
  }

  display(year, day) {
    console.table(this.subSchedules[yearToIndex(year)].arr[dayToIndex(day)]);
  }

  displayByYear(year) {
    console.log(`${year}st year schedule`);
    for (let day of daysOfWeek) {
      console.log(day);
      this.display(year, day);
    }
  }

  displayByDay(day) {
    for (let year of [1, 2, 3, 4]) {
      console.log(this.subSchedules[yearToIndex(year)].arr[dayToIndex(day)]);
    }
  }

  displayAll() {
    for (let year of [1, 2, 3, 4]) {
      this.displayByYear(year);
    }
  }
}

const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
const hoursInSchedule = [
  "8:30",
  "9:30",
  "10:30",
  "11:30",
  "12:30",
  "13:30",
  "14:30",
  "15:30",
  "16:30",
];
let coursesData;
let classroomsData;
let busyHoursData;

let classrooms = [];
let courses = [];
let instructors = [];
const schedule = new Schedule();

// Function to read the contents of the uploaded CSV file
function readCourses() {
  console.log("readCourses() çalışıyor.");
  const fileInput = document.getElementById("coursesFile");
  const file = fileInput.files[0];
  const fileReader = new FileReader();
  // Event listener for when the file is loaded
  fileReader.onload = function (e) {
    // Store the contents of the CSV file in the coursesData
    coursesData = e.target.result;
    //console.log(coursesData);
  };
  if (file) {
    // Read the file as text
    fileReader.readAsText(file);
  } else {
    alert("No file selected.");
  }
}

function readClassrooms() {
  console.log("readClassrooms() çalışıyor.");
  const fileInput = document.getElementById("classroomFile");
  const file = fileInput.files[0];
  const fileReader = new FileReader();
  fileReader.onload = function (e) {
    classroomsData = e.target.result;
  };
  if (file) {
    fileReader.readAsText(file);
  } else {
    alert("No file selected.");
  }
}

function readServiceCourses() {
  console.log("readServiceCourses() çalışıyor.");
  //const fileInput = document.querySelector('#serviceFile'); -> also ok
  const fileInput = document.getElementById("serviceFile");
  const file = fileInput.files[0];
  const fileReader = new FileReader();
  fileReader.onload = function (e) {
    serviceCoursesData = e.target.result;
  };
  if (file) {
    fileReader.readAsText(file);
  } else {
    alert("No file selected.");
  }
}

function readBusyHours() {
  console.log("readBusyHours() çalışıyor.");
  const fileInput = document.getElementById("busyFile");
  const file = fileInput.files[0];
  const fileReader = new FileReader();
  fileReader.onload = function (e) {
    busyHoursData = e.target.result;
  };
  if (file) {
    fileReader.readAsText(file);
  } else {
    alert("No file selected.");
  }
}

function parseClassrooms() {
  const lines = classroomsData.split("\n");
  lines.forEach((line) => {
    const [id, capacity] = line.split(";");
    classrooms.push(new Classroom(id, parseInt(capacity)));
  });
  classrooms.sort((c1, c2) => c1.capacity - c2.capacity);
}

function parseCourses() {
  const lines = coursesData.split("\n");
  lines.forEach((line) => {
    const [
      code,
      name,
      year,
      credit,
      c_or_e,
      d_or_s,
      numberOfStudents,
      instructorName,
      hoursPreference,
    ] = line.split(",");
    const existingInstructor = instructors.find(
      (instructor) => instructor.name === instructorName
    );
    // If the specified instructor exists in the instructors array, push the course into the courses array.
    if (existingInstructor) {
      courses.push(
        new Course(
          code,
          name,
          year,
          credit,
          c_or_e,
          d_or_s,
          parseInt(numberOfStudents),
          existingInstructor,
          hoursPreference
        )
      );
    }
    // If specified instructor is not found in the instructors array, add into the instructors array.
    else {
      const newInstructor = new Instructor(instructorName);
      courses.push(
        new Course(
          code,
          name,
          year,
          credit,
          c_or_e,
          d_or_s,
          parseInt(numberOfStudents),
          newInstructor,
          hoursPreference
        )
      );
      instructors.push(newInstructor);
    }
  });
}

function parseBusyHours() {
  const lines = busyHoursData.split("\n");
  lines.forEach((line) => {
    const [instructorName, day] = line.split(",");
    const hoursString = line.substring(
      line.indexOf('"') + 1,
      line.lastIndexOf('"')
    );
    const [...hours] = hoursString.split(",");
    let instructor = instructors.find(
      (instructor) => instructor.name === instructorName
    );
    // If specified instructor is not found in the instructors array, add into the instructors array.
    if (!instructor) {
      const newInstructor = new Instructor(instructorName);
      instructors.push(newInstructor);
      instructor = newInstructor;
    }
    for (let hour of hours) {
      instructor.addBusyHour(day, hour);
    }
  });
}

//OOOOOOOOOONNNNNNNNNUUUUUUUUURRRRRRRRRRRR
//Tablo eklemeye yarayan func
function tableCreator() {
  let tableHtml = "<table>";

  tableHtml += "<tr>";
  tableHtml += "<th></th>"; // Boş hücre ekleyin
  for (let year of [0, 1, 2, 3, 4]) {
    if (year === 0) tableHtml += "<th>" + "</th>";
    else tableHtml += "<th>" + year + "st Years" + "</th>";
  }
  tableHtml += "</tr>";

  for (let day of daysOfWeek) {
    tableHtml += "<tr>";
    tableHtml += "<td>" + day + "</td>"; // Günün adını yazın
    for (let year of [0, 1, 2, 3, 4]) {
      tableHtml += "<td>";
      if (year === 0) {
        for (let hour of hoursInSchedule) {
          tableHtml += hour + "<br>";
        }
      } else {
        let cellContent = "";
        for (let hour of hoursInSchedule) {
          const courseCode =
            schedule.subSchedules[yearToIndex(year)].arr[dayToIndex(day)][
              hourToIndex(hour)
            ].courseCode;
          const classroomName =
            schedule.subSchedules[yearToIndex(year)].arr[dayToIndex(day)][
              hourToIndex(hour)
            ].classroomName;
          cellContent += courseCode + " - " + classroomName + "<br>";
        }
        tableHtml += cellContent || "&nbsp;";
      }
      tableHtml += "</td>";
    }
    tableHtml += "</tr>";
  }

  tableHtml += "</table>";
  document.getElementById("scheduleTable").innerHTML = tableHtml;
}

function toggleElementVisibility(elementId) {
  const fieldToHide = document.getElementById(elementId);
  if (fieldToHide.style.display === "none") {
    fieldToHide.style.display = "inline-block";
  } else {
    fieldToHide.style.display = "none";
  }
}

//OOOOOOOOOONNNNNNNNUUUUUUUUURRRRRRRRRRR

function processAllDatas() {
  parseClassrooms();
  parseCourses();
  parseBusyHours();
  schedule.assignAllServiceCourses();
  schedule.assignAllDepartmentCourses();
  //schedule.displayAll();
}

function resetArrays() {
  classrooms = [];
  courses = [];
  instructors = [];
}
function changeColor() {
  var randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.backgroundColor = randomColor;
}

setInterval(changeColor, 3000);

tableCreator();
