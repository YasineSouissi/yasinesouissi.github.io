const persons = [];
const salaries = [];

function addSalary() {
    const personName = document.getElementById('person-name').value;
    const salary = parseFloat(document.getElementById('person-salary').value);

    if (personName.trim() === '' || isNaN(salary)) {
        alert('Please enter valid values for person name and salary.');
        return;
    }

    persons.push(personName);
    salaries.push(salary);

    document.getElementById('person-name').value = '';
    document.getElementById('person-salary').value = '';

    displaySalary();

    document.getElementById('person-name').focus();
}

function modifySalary() {
    const selectedPerson = document.getElementById('select-person-modify').value;
    const newSalary = parseFloat(document.getElementById('new-salary').value);

    if (isNaN(newSalary)) {
        alert('Please enter a valid value for the new salary.');
        return;
    }

    const index = persons.indexOf(selectedPerson);

    if (index !== -1) {
        salaries[index] = newSalary;
    } else {
        alert('Please enter a valid person name.');
    }

    document.getElementById('new-salary').value = '';

    displaySalary();

    document.getElementById('select-person-modify').focus();
}

function displayResults() {
    const averageSalary = salaries.reduce((total, salary) => total + salary, 0) / salaries.length;
    const highestSalary = Math.max(...salaries);

    document.getElementById('average-salary').textContent = `Average Salary: $${averageSalary.toFixed(2)}`;
    document.getElementById('highest-salary').textContent = `Highest Salary: $${highestSalary.toFixed(2)}`;
}

function displaySalary() {
    const tbody = document.querySelector('#results_table tbody');
    tbody.innerHTML = '';

    for (let i = 0; i < persons.length; i++) {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${persons[i]}</td>
            <td>$${salaries[i]}</td>
        `;
        tbody.appendChild(tr);
    }
}

document.getElementById('add-btn').addEventListener('click', addSalary);
document.getElementById('modify-btn').addEventListener('click', modifySalary);