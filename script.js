/*
  DEVSTREAK
  Course + Learning Tracker
  Data is stored locally in the browser.
*/


const courses = [

  {
    id: "01",
    title: "HTML + CSS",
    hours: "40–60 hrs",

    primary:
      "MDN Learn Web Development",

    course:
      "https://developer.mozilla.org/en-US/docs/Learn_web_development",

    docs:
      "https://developer.mozilla.org/en-US/docs/Web/HTML",

    more:
      "https://www.theodinproject.com/paths/foundations/courses/foundations",

    topics: [
      "Semantic HTML",
      "CSS",
      "Flexbox",
      "Grid",
      "Responsive UI",
      "Accessibility"
    ],

    project:
      "Build a responsive portfolio and SaaS landing page."
  },


  {
    id: "02",
    title: "JavaScript",
    hours: "70–100 hrs",

    primary:
      "The Odin Project — JavaScript",

    course:
      "https://www.theodinproject.com/paths/2",

    docs:
      "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide",

    more:
      "https://developer.mozilla.org/en-US/docs/Web/API",

    topics: [
      "Functions",
      "DOM",
      "Events",
      "Modules",
      "Promises",
      "Async/Await",
      "Fetch"
    ],

    project:
      "Build Calculator, Todo, Weather and Expense Tracker."
  },


  {
    id: "03",
    title: "Git + GitHub",
    hours: "15–25 hrs",

    primary:
      "The Odin Project — Foundations",

    course:
      "https://www.theodinproject.com/paths/foundations/courses/foundations",

    docs:
      "https://git-scm.com/doc",

    more:
      "https://docs.github.com/en/get-started",

    topics: [
      "Commits",
      "Branches",
      "Merge",
      "Pull Requests",
      "GitHub",
      "README"
    ],

    project:
      "Put every serious project into Git with clean history."
  },


  {
    id: "04",
    title: "APIs + HTTP",
    hours: "20–30 hrs",

    primary:
      "MDN Web Guides",

    course:
      "https://developer.mozilla.org/en-US/docs/MDN/Guides",

    docs:
      "https://developer.mozilla.org/en-US/docs/Web/HTTP",

    more:
      "https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Overview",

    topics: [
      "HTTP",
      "REST",
      "JSON",
      "Headers",
      "Status Codes",
      "CORS",
      "Webhooks"
    ],

    project:
      "Connect a frontend to APIs and build a REST API."
  },


  {
    id: "05",
    title: "React + Tailwind",
    hours: "50–80 hrs",

    primary:
      "Full Stack Open",

    course:
      "https://fullstackopen.com/en/",

    docs:
      "https://react.dev/learn",

    more:
      "https://tailwindcss.com/docs",

    topics: [
      "Components",
      "Props",
      "State",
      "Hooks",
      "Forms",
      "Routing",
      "API Calls"
    ],

    project:
      "Build a professional CRM dashboard."
  },


  {
    id: "06",
    title: "Node + Express",
    hours: "50–70 hrs",

    primary:
      "Full Stack Open",

    course:
      "https://fullstackopen.com/en/",

    docs:
      "https://nodejs.org/en/learn",

    more:
      "https://expressjs.com/",

    topics: [
      "Node",
      "Express",
      "Routes",
      "Middleware",
      "Controllers",
      "Validation",
      "Errors"
    ],

    project:
      "Build the backend API for your CRM."
  },


  {
    id: "07",
    title: "PostgreSQL + SQL",
    hours: "35–50 hrs",

    primary:
      "PostgreSQL Official Tutorial",

    course:
      "https://www.postgresql.org/docs/current/tutorial.html",

    docs:
      "https://www.postgresql.org/docs/current/sql.html",

    more:
      "https://sqlbolt.com/",

    topics: [
      "SELECT",
      "JOIN",
      "GROUP BY",
      "PK/FK",
      "Indexes",
      "Transactions",
      "Normalization"
    ],

    project:
      "Design your CRM database."
  },


  {
    id: "08",
    title: "Authentication + Security",
    hours: "25–40 hrs",

    primary:
      "MDN Web Security",

    course:
      "https://developer.mozilla.org/en-US/docs/Web/Security",

    docs:
      "https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies",

    more:
      "https://owasp.org/www-project-top-ten/",

    topics: [
      "Sessions",
      "Cookies",
      "JWT",
      "Hashing",
      "Roles",
      "CORS",
      "CSRF",
      "XSS"
    ],

    project:
      "Build secure login and protected CRM routes."
  },


  {
    id: "09",
    title: "Automation",
    hours: "40–60 hrs",

    primary:
      "n8n Education",

    course:
      "https://n8n.io/education/",

    docs:
      "https://docs.n8n.io/",

    more:
      "https://docs.n8n.io/integrations/",

    topics: [
      "Triggers",
      "Actions",
      "Webhooks",
      "API Calls",
      "Schedules",
      "Conditions",
      "AI Workflows"
    ],

    project:
      "Lead capture → CRM → notification → follow-up."
  },


  {
    id: "10",
    title: "CRM Development",
    hours: "50–80 hrs",

    primary:
      "Build Your Own CRM",

    course:
      "https://fullstackopen.com/en/",

    docs:
      "https://www.postgresql.org/docs/current/tutorial.html",

    more:
      "https://developer.mozilla.org/en-US/docs/Learn_web_development",

    topics: [
      "Leads",
      "Contacts",
      "Deals",
      "Tasks",
      "Notes",
      "Calendar",
      "Reports"
    ],

    project:
      "Build a complete CRM with sales pipeline."
  },


  {
    id: "11",
    title: "AI + Automation",
    hours: "40–60 hrs",

    primary:
      "AI APIs + Workflow Automation",

    course:
      "https://platform.openai.com/docs",

    docs:
      "https://platform.openai.com/docs/guides",

    more:
      "https://docs.n8n.io/advanced-ai/",

    topics: [
      "Structured Outputs",
      "Tool Calling",
      "Extraction",
      "Embeddings",
      "RAG",
      "Agents"
    ],

    project:
      "AI lead scoring + email drafting + CRM updates."
  },


  {
    id: "12",
    title: "Production Projects",
    hours: "50+ hrs",

    primary:
      "Deploy and Ship",

    course:
      "https://developer.mozilla.org/en-US/docs/Learn_web_development",

    docs:
      "https://docs.github.com/en/actions",

    more:
      "https://www.postgresql.org/docs/current/",

    topics: [
      "Deployment",
      "HTTPS",
      "CI/CD",
      "Testing",
      "Logging",
      "Backups"
    ],

    project:
      "Deploy your CRM/SaaS with a real domain."
  }

];


const state = JSON.parse(
  localStorage.getItem("devstreak")
) || {

  logs: [],

  status: {}

};



/* NAVIGATION */

function openPage(page) {

  document
    .querySelectorAll(".page")
    .forEach(section => {

      section.classList.remove("active");

    });


  document
    .getElementById(page)
    .classList.add("active");


  document
    .querySelectorAll(".nav-item")
    .forEach(item => {

      item.classList.toggle(
        "active",
        item.dataset.page === page
      );

    });


  const titles = {

    dashboard:
      "Dashboard",

    path:
      "Learning Path",

    courses:
      "Courses & Materials",

    log:
      "Daily Log",

    analytics:
      "Analytics"

  };


  document.getElementById(
    "page-title"
  ).textContent = titles[page];


  render();

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

}


document
  .querySelectorAll(".nav-item")
  .forEach(button => {

    button.addEventListener(
      "click",
      () => openPage(button.dataset.page)
    );

  });



/* THEME */

document
  .getElementById("theme-btn")
  .addEventListener("click", () => {

    document.body.classList.toggle("dark");

  });



/* STATUS */

function setStatus(id, status) {

  state.status[id] = status;

  save();

}



/* SAVE */

function save() {

  localStorage.setItem(
    "devstreak",
    JSON.stringify(state)
  );

  render();

}



/* STREAK */

function calculateStreak() {

  const dates = [
    ...new Set(
      state.logs.map(log => log.date)
    )
  ].sort().reverse();


  let streak = 0;

  let current = new Date();

  current.setHours(0, 0, 0, 0);


  for (const date of dates) {

    const logDate =
      new Date(date);

    logDate.setHours(0, 0, 0, 0);


    const difference =
      Math.round(
        (current - logDate) /
        86400000
      );


    if (difference === 0) {

      streak++;

      current.setDate(
        current.getDate() - 1
      );

    }

    else if (difference > 0) {

      break;

    }

  }


  return streak;

}



/* WEEK */

function getWeekLogs() {

  const now = new Date();

  const start = new Date(now);

  start.setDate(
    now.getDate() - 6
  );


  return state.logs.filter(
    log =>
      new Date(log.date) >= start
  );

}



/* PATH */

function renderPath() {

  const grid =
    document.getElementById(
      "path-grid"
    );


  grid.innerHTML =
    courses.map(course => {

      const status =
        state.status[course.id] ||
        "not-started";


      let progress = 0;


      if (status === "learning")
        progress = 45;

      if (status === "completed")
        progress = 100;


      return `

        <article
          class="path-card
          ${status === "learning"
            ? "current"
            : ""}"
        >

          <span class="phase-number">
            PHASE ${course.id}
          </span>

          <h3>
            ${course.title}
          </h3>

          <p class="muted">
            ${course.primary}
          </p>

          <div
            class="progress"
          >
            <div
              class="progress-bar"
              style="--progress:${progress}%"
            ></div>
          </div>

          <small class="muted">
            ${progress}% · ${course.hours}
          </small>

          <div class="course-actions">

            <select
              onchange="
                setStatus(
                  '${course.id}',
                  this.value
                )
              "
            >

              <option
                value="not-started"
                ${status === "not-started"
                  ? "selected"
                  : ""}
              >
                Not started
              </option>

              <option
                value="learning"
                ${status === "learning"
                  ? "selected"
                  : ""}
              >
                Learning
              </option>

              <option
                value="completed"
                ${status === "completed"
                  ? "selected"
                  : ""}
              >
                Completed
              </option>

            </select>

            <a
              class="course-link"
              href="#"
              onclick="
                openPage('courses');
                return false;
              "
            >
              Materials →
            </a>

          </div>

        </article>

      `;

    }).join("");

}



/* COURSES */

let activeFilter = "all";


function renderCourses() {

  const grid =
    document.getElementById(
      "course-grid"
    );


  const search =
    document
      .getElementById("course-search")
      .value
      .toLowerCase();


  const filtered =
    courses.filter(course => {

      const status =
        state.status[course.id] ||
        "not-started";


      const matchesSearch =
        course.title
          .toLowerCase()
          .includes(search)

        ||

        course.primary
          .toLowerCase()
          .includes(search)

        ||

        course.topics
          .join(" ")
          .toLowerCase()
          .includes(search);


      const matchesFilter =

        activeFilter === "all"

        ||

        (
          activeFilter === "current" &&
          status === "learning"
        )

        ||

        (
          activeFilter === "not-started" &&
          status === "not-started"
        );


      return (
        matchesSearch &&
        matchesFilter
      );

    });


  if (!filtered.length) {

    grid.innerHTML =
      `<div class="empty">
        No matching course found.
      </div>`;

    return;

  }


  grid.innerHTML =
    filtered.map(course => {

      const status =
        state.status[course.id] ||
        "not-started";


      return `

        <article
          class="course-card
          ${status === "learning"
            ? "current"
            : ""}"
        >

          <span class="course-meta">
            PHASE ${course.id}
            · ${course.hours}
          </span>

          <h3>
            ${course.title}
          </h3>

          <p>
            <b>
              ${course.primary}
            </b>
          </p>


          <div class="topics">

            ${course.topics
              .map(topic =>
                `<span class="topic">
                  ${topic}
                </span>`
              )
              .join("")}

          </div>


          <div class="build-box">

            <strong>
              Build
            </strong>

            ${course.project}

          </div>


          <div class="course-actions">

            <a
              class="course-link primary"
              href="${course.course}"
              target="_blank"
              rel="noopener"
            >
              Start Course ↗
            </a>

            <a
              class="course-link"
              href="${course.docs}"
              target="_blank"
              rel="noopener"
            >
              Docs ↗
            </a>

            <a
              class="course-link"
              href="${course.more}"
              target="_blank"
              rel="noopener"
            >
              More ↗
            </a>

          </div>

        </article>

      `;

    }).join("");

}



/* COURSE FILTERS */

document
  .querySelectorAll(".filter")
  .forEach(button => {

    button.addEventListener(
      "click",
      () => {

        document
          .querySelectorAll(".filter")
          .forEach(btn =>
            btn.classList.remove("active")
          );


        button.classList.add("active");

        activeFilter =
          button.dataset.filter;

        renderCourses();

      }
    );

  });


document
  .getElementById("course-search")
  .addEventListener(
    "input",
    renderCourses
  );



/* DAILY LOG */

document
  .getElementById("log-date")
  .value =
  new Date()
    .toISOString()
    .slice(0, 10);


document
  .getElementById("log-phase")
  .innerHTML =
  courses
    .map(course =>
      `<option value="${course.id}">
        Phase ${course.id} — ${course.title}
      </option>`
    )
    .join("");


document
  .getElementById("log-form")
  .addEventListener(
    "submit",
    event => {

      event.preventDefault();


      const log = {

        date:
          document
            .getElementById("log-date")
            .value,

        hours:
          Number(
            document
              .getElementById("log-hours")
              .value
          ),

        phase:
          document
            .getElementById("log-phase")
            .value,

        learned:
          document
            .getElementById("learned")
            .value,

        built:
          document
            .getElementById("built")
            .value,

        struggles:
          document
            .getElementById("struggles")
            .value,

        completed:
          document
            .getElementById("completed")
            .checked

      };


      state.logs.push(log);

      save();


      event.target.reset();


      document
        .getElementById("log-date")
        .value =
        new Date()
          .toISOString()
          .slice(0, 10);


      alert(
        "Daily log saved! 🔥"
      );

    }
  );



/* HISTORY */

function renderHistory() {

    const history = document.getElementById("history");

    const logs = [...state.logs]
        .reverse()
        .slice(0, 15);

    if (!logs.length) {

        history.innerHTML =
            `<div class="empty">
                No logs yet.
                Start your first day.
            </div>`;

        return;
    }

    history.innerHTML =
        logs.map((log, index) => {

            return `
                <div class="history-row" data-log-index="${index}">

                    <div>

                        <b>${log.date}</b>

                        · Phase ${log.phase}

                        <div class="muted">

                            ${log.learned || "Learning session"}

                            ${
                                log.built
                                    ? " · Built: " + log.built
                                    : ""
                            }

                        </div>

                    </div>

                    <b>${log.hours}h</b>

                </div>
            `;

        }).join("");


    // Make each history row clickable
    document
        .querySelectorAll(".history-row")
        .forEach((row, index) => {

            row.addEventListener("click", () => {

                const log = logs[index];

                document.getElementById("history-date").textContent =
                    log.date;

                document.getElementById("history-phase").textContent =
                    `Phase ${log.phase}`;

                document.getElementById("history-learned").textContent =
                    log.learned || "Not provided";

                document.getElementById("history-built").textContent =
                    log.built || "Not provided";

                document.getElementById("history-struggles").textContent =
                    log.struggles || "None";

                document.getElementById("history-hours").textContent =
                    `${log.hours} hours`;

                document.getElementById("history-completed").textContent =
                    log.completed ? "Yes" : "No";

                document
                    .getElementById("history-dialog")
                    .showModal();

            });

        });
}


/* DASHBOARD CHART */

function renderChart() {

  const chart =
    document.getElementById(
      "week-chart"
    );


  let html = "";


  for (
    let i = 6;
    i >= 0;
    i--
  ) {

    const date =
      new Date();


    date.setDate(
      date.getDate() - i
    );


    const dateString =
      date
        .toISOString()
        .slice(0, 10);


    const hours =
      state.logs
        .filter(
          log =>
            log.date === dateString
        )
        .reduce(
          (sum, log) =>
            sum + log.hours,
          0
        );


    const height =
      Math.min(
        150,
        hours * 22
      );


    const day =
      date.toLocaleDateString(
        undefined,
        {
          weekday: "short"
        }
      );


    html += `

      <div class="bar-column">

        <div
          class="bar"
          style="--height:${height}px"
        ></div>

        ${day}

      </div>

    `;

  }


  chart.innerHTML = html;

}



/* DASHBOARD */

function renderDashboard() {

  const totalHours =
    state.logs.reduce(
      (sum, log) =>
        sum + log.hours,
      0
    );


  const activeDays =
    new Set(
      state.logs.map(
        log => log.date
      )
    ).size;


  const completed =
    courses.filter(
      course =>
        state.status[course.id] ===
        "completed"
    ).length;


  const progress =
    Math.round(
      completed /
      courses.length *
      100
    );


  const streak =
    calculateStreak();


  document.getElementById(
    "current-streak"
  ).textContent = streak;


  document.getElementById(
    "hero-streak"
  ).textContent = streak;


  document.getElementById(
    "total-hours"
  ).textContent =
    totalHours.toFixed(1);


  document.getElementById(
    "active-days"
  ).textContent =
    activeDays;


  document.getElementById(
    "path-progress"
  ).textContent =
    progress + "%";


  const next =
    courses.find(
      course =>
        state.status[course.id] !==
        "completed"
    ) || courses[courses.length - 1];


  document.getElementById(
    "continue-learning"
  ).innerHTML = `

    <span class="course-meta">
      PHASE ${next.id}
    </span>

    <h3>
      ${next.title}
    </h3>

    <p class="muted">
      ${next.primary}
    </p>

    <a
      class="course-link primary"
      href="${next.course}"
      target="_blank"
    >
      Start Learning ↗
    </a>

  `;

}



/* ANALYTICS */

function renderAnalytics() {

  const week =
    getWeekLogs();


  const hours =
    week.reduce(
      (sum, log) =>
        sum + log.hours,
      0
    );


  const active =
    new Set(
      week.map(
        log => log.date
      )
    ).size;


  const consistency =
    Math.round(
      active /
      7 *
      100
    );


  document.getElementById(
    "weekly-hours"
  ).textContent =
    hours.toFixed(1);


  document.getElementById(
    "weekly-days"
  ).textContent =
    active;


  document.getElementById(
    "consistency"
  ).textContent =
    consistency + "%";


  document.getElementById(
    "total-logs"
  ).textContent =
    state.logs.length;


  document.getElementById(
    "weekly-report"
  ).innerHTML = `

    <p>
      <strong>Time:</strong>
      You studied
      <b>${hours.toFixed(1)} hours</b>
      this week across
      <b>${active}/7 days</b>.
    </p>

    <p>
      <strong>Consistency:</strong>
      ${consistency}%.
      Regular sessions are more important
      than huge one-day sessions.
    </p>

    <p>
      <strong>Next action:</strong>
      Study your current phase,
      then build something before moving forward.
    </p>

  `;

}



/* RENDER EVERYTHING */

function render() {

  renderDashboard();

  renderPath();

  renderCourses();

  renderHistory();

  renderChart();

  renderAnalytics();

}


render();
