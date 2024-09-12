import React, { useState } from 'react';
import "./StudentForm.css";

const courses = [
  { value: 'Computer Science', subjects: ['Programming', 'Data Structures', 'Algorithms'] },
  { value: 'Mechanical Engineering', subjects: ['Thermodynamics', 'Mechanics', 'Materials Science'] },
  // Add more courses and their subjects as needed
];

const StudentForm = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [course, setCourse] = useState('');
  const [subjects, setSubjects] = useState([]);
  const [isActive, setIsActive] = useState(false);
  const [inActive, setInActive] = useState(false);

  const handleCourseChange = (event) => {
    const selectedCourse = courses.find((course) => course.value === event.target.value);
    setCourse(selectedCourse.value);
    setSubjects(selectedCourse.subjects);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here (e.g., send data to a server)
    console.log('Form submitted:', { name, age, mobile, email, course, subjects });
  };

  const handleDelete = () => {
    // Handle deletion logic here (e.g., remove data from a database)
    // console.log('Delete clicked');
    setName("");
    setAge("");
    setMobile("");
    setEmail("");
    setCourse("");
    setSubjects([]);
    setInActive(prev => !prev);
  };

  const toggleIsActive = () => setIsActive(prev => !prev);


  return (
    <>
    <div className = "student-form">
    <div className= "student-container">
      <h2 className= "heading">Student Form</h2>
    <form onSubmit={handleSubmit}>
      <div className= "input-container">
        <label className='input-style'>Name:</label>
        <input className = "input" type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      </div>
      <div className= "input-container"> 
        <label className='input-style'>Age:</label>
        <input className = "input" type="number"  value={age} onChange={(e) => setAge(e.target.value)} required />
      </div>
      <div className= "input-container">
        <label className='input-style'>Mobile No:</label>
        <input className = "input" type="tel" value={mobile} onChange={(e) => setMobile(e.target.value)} required />
      </div>
      <div className= "input-container">
        <label className='input-style'>Email:</label>
        <input className = "input" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </div>
      <div className='input-container'>
        <label className='input-style'>Course:</label>
        <select value={course} onChange={handleCourseChange} required className='select'>
          <option value="" className='option' >Select Course</option>
          {courses.map((course) => (
            <option key={course.value} value={course.value}>
              {course.value}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label>Subjects:</label>
        <ul>
          {subjects.map((subject) => (
            <li key={subject} className='list-item'>{subject}</li>
          ))}
        </ul>
      </div>
      <div className='buttons-container'>
        <button className = "button" onClick = {toggleIsActive} type="submit">Save</button>
        <button className = "button1" type="button" onClick={handleDelete}>Delete</button>
      </div>
      <p className="paragraph">{isActive ? "Form Saved Successfully!!" : ""}</p>
      <p className="paragraph">{inActive ? "Deleted Successfully!!" : ""}</p>
    </form>
    </div>
    </div>
    </>
  );
};

export default StudentForm;