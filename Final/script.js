document
  .getElementById("evaluationForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Get form values
    var fullname = document.getElementById("fullname").value;
    var academicSkills = document.getElementById("academicSkills").value;
    var specificSkills = document.getElementById("specificSkills").value;
    var workExperience = document.getElementById("workExperience").value;
    var previousProjects = document.getElementById("previousProjects").value;
    var willingnessToLearn =
      document.getElementById("willingnessToLearn").value;
    var personalAssumptions = document.getElementById(
      "personalAssumptions"
    ).value;
    var imageUpload = document.getElementById("imageUpload").files[0].name;

    // Match company skills
    var companySkills = document.getElementById("companySkills").value;

    // Example: Create an object to hold form data
    var formData = {
      fullname: fullname,
      academicSkills: academicSkills,
      specificSkills: specificSkills,
      workExperience: workExperience,
      previousProjects: previousProjects,
      willingnessToLearn: willingnessToLearn,
      personalAssumptions: personalAssumptions,
      imageUpload: imageUpload, // Get filename directly from file input
    };

    // Matched data with company skills
    var matchedData = {
      fullname: fullname,
      academicSkills: academicSkills,
      specificSkills: specificSkills,
      workExperience: workExperience,
      previousProjects: previousProjects,
      willingnessToLearn: willingnessToLearn,
      personalAssumptions: personalAssumptions,
      companySkills: companySkills,
    };

    // Display matched data
    var matchedDataElement = document.getElementById("matchedData");
    matchedDataElement.innerHTML =
      "<h3>Matched Data</h3>" +
      "<p>Full Name: " +
      fullname +
      "</p>" +
      "<p>Academic Skills: " +
      academicSkills +
      "</p>" +
      "<p>Specific Skills: " +
      specificSkills +
      "</p>" +
      "<p>Work Experience: " +
      workExperience +
      "</p>" +
      "<p>Previous Projects: " +
      previousProjects +
      "</p>" +
      "<p>Willingness to Learn: " +
      willingnessToLearn +
      "</p>" +
      "<p>Personal Assumptions: " +
      personalAssumptions +
      "</p>" +
      "<p>Image Upload: " +
      imageUpload +
      "</p>" +
      "<p>Company Skills: " +
      companySkills +
      "</p>";

    // Example: Logging the matchedData to the console
    console.log(matchedData);

    // Reset the form after submission
    document.getElementById("evaluationForm").reset();
  });
