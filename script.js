// Predefined essential courses
const courses = [
    { id: 1, name: "Data Structures and Algorithms (DSA)" },
    { id: 2, name: "Database Management Systems (DBMS)" },
    { id: 3, name: "Object-Oriented Programming (OOP)" },
    { id: 4, name: "Computer Networks" },
    { id: 5, name: "Artificial Intelligence (AI)" },
  ];
 
  // Registered courses array
  let registeredCourses = [];
 
  // Render available courses
  function renderCourses() {
    const courseList = document.getElementById("courseList");
    courseList.innerHTML = ""; // Clear the course list
 
    courses.forEach((course) => {
      const courseItem = document.createElement("li");
      courseItem.className = "course-item";
 
      const courseName = document.createElement("span");
      courseName.textContent = course.name;
 
      const registerButton = document.createElement("button");
      registerButton.textContent = "Register";
      registerButton.onclick = () => registerCourse(course);
 
      courseItem.appendChild(courseName);
      courseItem.appendChild(registerButton);
      courseList.appendChild(courseItem);
    });
  }
 
  // Register a course
  function registerCourse(course) {
    // Check if already registered
    if (registeredCourses.some((c) => c.id === course.id)) {
      alert("You have already registered for this course.");
      return;
    }
 
    registeredCourses.push(course);
    displayRegisteredCourses();
  }
 
  // Unregister a course
  function unregisterCourse(courseId) {
    registeredCourses = registeredCourses.filter((course) => course.id !== courseId);
    displayRegisteredCourses();
  }
 
  // Display registered courses
  function displayRegisteredCourses() {
    const registeredCoursesDiv = document.getElementById("registeredCourses");
    registeredCoursesDiv.innerHTML = ""; // Clear existing courses
 
    if (registeredCourses.length === 0) {
      registeredCoursesDiv.innerHTML = "<p>No courses registered yet.</p>";
      return;
    }
 
    registeredCourses.forEach((course) => {
      const courseDiv = document.createElement("div");
      courseDiv.className = "registered-course";
 
      const courseName = document.createElement("span");
      courseName.textContent = course.name;
 
      const unregisterButton = document.createElement("button");
      unregisterButton.textContent = "Unregister";
      unregisterButton.onclick = () => unregisterCourse(course.id);
 
      courseDiv.appendChild(courseName);
      courseDiv.appendChild(unregisterButton);
      registeredCoursesDiv.appendChild(courseDiv);
    });
  }
 
  // Initialize the app
  renderCourses();
 
