export default function Education() {
    return (
        <>
            <div id="highSchool">
                <label htmlFor="highSchoolName">High School Name:</label>
                <input type="text" name="highSchoolName" id="highSchoolName"></input>
                <label htmlFor="highSchoolStart">High School Start Date:</label>
                <input type="date" name="highSchoolStart" id="highSchoolStart"></input>
                <label htmlFor="highSchoolEnd">High School End Date:</label>
                <input type="date" name="highSchoolEnd" id="highSchoolEnd"></input>
                <label htmlFor="highSchoolGrades">High School Grades:</label>
                <input type="text" name="highSchoolGrades" id="highSchoolGrades"></input>
            </div>
            <div id="college">
                <label htmlFor="collegeName">College Name:</label>
                <input type="text" name="collegeName" id="collegeName"></input>
                <label htmlFor="collegeStart">College Start Date:</label>
                <input type="date" name="collegeStart" id="collegeStart"></input>
                <label htmlFor="collegeEnd">College End Date:</label>
                <input type="date" name="collegeEnd" id="collegeEnd"></input>
                <label htmlFor="collegeGrades">College Grades:</label>
                <input type="text" name="collegeGrades" id="collegeGrades"></input>
            </div>
            <div id="university">
                <label htmlFor="universityName">University Name:</label>
                <input type="text" name="universityName" id="universityName"></input>
                <label htmlFor="universityStart">University Start Date:</label>
                <input type="date" name="universityStart" id="universityStart"></input>
                <label htmlFor="universityEnd">University End Date:</label>
                <input type="date" name="universityEnd" id="universityEnd"></input>
                <label htmlFor="universityGrades">University Grades:</label>
                <input type="text" name="universityGrades" id="universityGrades"></input>
            </div>
        </>
    )
}