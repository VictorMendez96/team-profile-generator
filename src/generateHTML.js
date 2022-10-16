function pageStart() {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css">
        <title>Document</title>
    </head>
    <body>
        <nav class="navbar container-fluid bg-success bg-gradient d-flex">
            <div class="container-fluid d-flex justify-content-center ">
              <a class="navbar-brand text-white" href="#">
                <img src="./team-profile-generator/dist/assets/people-fill.svg" alt="People Logo">
                Team Profile!
              </a>
            </div>
        </nav>
        <section class="min-vh-100">
        <div class="container d-flex flex-wrap justify-content-evenly">`
};

function pageEnd() {
    return `</div>
    </section>
    <footer class="align-self-end bg-success bg-opacity-25 d-flex justify-content-center">
        <div>
            Victor Mendez 2022 | 
            <a href="https://github.com/VictorMendez96"><img class="p-1" src="./team-profile-generator/dist/assets/github.svg" alt=""></a>
            <a href="https://www.linkedin.com/in/victorhmendez/"><img class="p-1" src="./team-profile-generator/dist/assets/linkedin.svg" alt=""></a>
        </div>
    </footer>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>`
};

function employeeCard(employee) {
    const role = employee.getRole();
    if (role === 'Manager') {
        return `<div class="container d-flex flex-wrap justify-content-evenly">
        <div class="card d-flex order-first m-4" style="max-width: 18rem;">
            <div class="card-header text-bg-success bg-gradient d-flex">
                <img class ="p-2" src="./team-profile-generator/dist/assets/person-workspace.svg" alt="">
                <div class="d-flex flex-column p-2">
                    <span>${employee.name}</span>
                    <span>${role}</span>
                </div>
            </div>
            <div class="card-body bg-success bg-opacity-75">
                <div class="list-group">
                    <div class="list-group-item">
                        <img class="p-1" src="./team-profile-generator/dist/assets/person-badge.svg" alt="">
                        <span>ID: ${employee.id}</span>
                    </div>
                    <div class="list-group-item">
                        <img class="p-1" src="./team-profile-generator/dist/assets/envelope-paper.svg" alt="">
                        <span>Email: <a href="mailto:${employee.email}">${employee.email}</a></span>
                    </div>
                    <div class="list-group-item">
                        <img class="p-1" src="./team-profile-generator/dist/assets/building.svg" alt="">
                        <span>Office #: ${employee.officeNumber}</span>
                    </div>
                </div>
            </div>
        </div>`
    } else if (role === 'Engineer') {
        return `<div class="card d-flex m-4" style="max-width: 18rem;">
        <div class="card-header bg-warning bg-gradient text-white d-flex">
            <img class ="p-2" src="./team-profile-generator/dist/assets/wrench-adjustable-circle.svg" alt="">
            <div class="d-flex flex-column p-2">
                <span>${employee.name}</span>
                <span>${role}</span>
            </div>
        </div>
        <div class="card-body bg-warning bg-opacity-75">
            <div class="list-group">
                <div class="list-group-item">
                  <img class="p-1" src="./team-profile-generator/dist/assets/person-badge.svg" alt="">
                  <span>ID: ${employee.id}</span>
                </div>
                <div class="list-group-item">
                  <img class="p-1" src="./team-profile-generator/dist/assets/envelope-paper.svg" alt="">
                  <span>Email: <a href="mailto:${employee.email}">${employee.email}</a></span>
                </div>
                <div class="list-group-item">
                  <img class="p-1" src="./team-profile-generator/dist/assets/github.svg" alt="">
                  <span>GitHub: <a href="https://github.com/${employee.github}" target="_blank">${employee.github}</a></span>
                </div>
            </div>
        </div>
    </div>`
    } else {
        return `<div class="card d-flex m-4 order-last" style="max-width: 18rem;">
        <div class="card-header bg-danger bg-gradient text-white d-flex">
            <img class ="p-2" src="./team-profile-generator/dist/assets/pencil.svg" alt="">
            <div class="d-flex flex-column p-2">
                <span>${employee.name}</span>
                <span>${role}</span>
            </div>
        </div>
        <div class="card-body bg-danger bg-opacity-75">
            <div class="list-group">
                <div class="list-group-item">
                  <img class="p-1" src="./team-profile-generator/dist/assets/person-badge.svg" alt="">
                  <span>ID: ${employee.id}</span>
                </div>
                <div class="list-group-item">
                  <img class="p-1" src="./team-profile-generator/dist/assets/envelope-paper.svg" alt="">
                  <span>Email: <a href="mailto:${employee.email}">${employee.email}</a></span>
                </div>
                <div class="list-group-item">
                  <img class="p-1" src="./team-profile-generator/dist/assets/book-half.svg" alt="">
                  <span>School: </span>
                </div>
            </div>
        </div>
    </div>`
    }
};

function generateHTML(employees) {
    return `${pageStart()}
    ${employees.forEach(employee => {
        employeeCard(employee)
    })}
    ${pageEnd()}`
};

module.exports = generateHTML;
