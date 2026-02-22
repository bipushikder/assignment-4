//1. Load Font Awesome 
const faLink = document.createElement("link");
faLink.rel = "stylesheet";
faLink.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css";
document.head.appendChild(faLink);


// 2. Jobs Data

const jobs = [
  { company: "Microsoft", position: "Frontend Developer", location: "Dhaka", type: "Full-time", salary: "$1200", description: "Build UI components"},
  { company: "Google", position: "Backend Engineer", location: "Khulna", type: "Remote", salary: "$1500", description: "Work with APIs"},
  { company: "Meta", position: "UI Designer", location: "Chittagong", type: "Contract", salary: "$1000", description: "Design dashboards"},
  { company: "Amazon", position: "Cloud Engineer", location: "Dhaka", type: "Full-time", salary: "$2000", description: "Manage AWS services"},
  { company: "Tesla", position: "Data Analyst", location: "Khulna", type: "Internship", salary: "$800", description: "Analyze datasets"},
  { company: "Uber", position: "Mobile Developer", location: "Sylhet", type: "Remote", salary: "$1300", description: "Build apps"},
  { company: "Samsung", position: "QA Engineer", location: "Dhaka", type: "Full-time", salary: "$1100", description: "Test software"},
  { company: "Adobe", position: "Product Manager", location: "Khulna", type: "Contract", salary: "$1700", description: "Manage product lifecycle"}
];

const jobCards = document.getElementById("jobCards");

const allCount = document.getElementById("allCount");

const interviewCount = document.getElementById("interviewCount");

const rejectedCount = document.getElementById("rejectedCount");

const emptyMessage = document.getElementById("emptyMessage");



//3. reader Jobs


function readerJobs(tab = "all") {
  jobCards.innerHTML = "";
  let filtered = jobs.filter(job => job.status === tab || tab === "all");

  if (filtered.length === 0) {
    emptyMessage.classList.remove("hidden");
  } 
  else {
    emptyMessage.classList.add("hidden");
    filtered.forEach((job, index) => 
      {
      const card = document.createElement("div");
      card.className = "card";
      
      card.innerHTML = `
        <h3>${job.company}</h3>
        <p>${job.position} - ${job.location}</p>
        <p>Type: ${job.type}</p>
        <p>Salary: ${job.salary}</p>
        <p>${job.description}</p>
        <div class="card-buttons">
          <button class="interview-btn">Interview</button>
          <button class="rejected-btn">Rejected</button>
          <button class="delete-btn"><i class="fa-solid fa-trash"></i></button>
        </div>
      `;




      
      // 4. Btn Actions

      const interviewBtn = card.querySelector(".interview-btn");

      const rejectedBtn = card.querySelector(".rejected-btn");

      const deleteBtn = card.querySelector(".delete-btn");

      interviewBtn.onclick = () => updateStatus(index, "interview");

      rejectedBtn.onclick = () => updateStatus(index, "rejected");
      deleteBtn.onclick = () => deleteJob(index);

      jobCards.appendChild(card);
    });
  }

  updateCounts();
}

// 5.  job update


function updateStatus(index, status) {
  jobs[index].status = status;
  readerJobs(status);
}

//6. Job delete


function deleteJob(index) {
  jobs.splice(index, 1);
  readerJobs("all");
}

//7.  Count update

function updateCounts() {
  allCount.textContent = jobs.length;
  interviewCount.textContent = jobs.filter(j => j.status === "interview").length;
  rejectedCount.textContent = jobs.filter(j => j.status === "rejected").length;
}

// 8. Tab Switching

document.querySelectorAll(".tab").forEach(tab => {
  tab.addEventListener("click", () => {
      document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
    readerJobs(tab.dataset.tab);
  });
});


//  initial reader
readerJobs();