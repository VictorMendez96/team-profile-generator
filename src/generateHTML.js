function pageStart() {
    return ``
};

function pageEnd() {
    return ``
};

function employeeCard(employee) {
    const role = employee.getRole();
    if (role === 'Manager') {
        return ``
    } else if (role === 'Engineer') {
        return ``
    } else {
        return ``
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
