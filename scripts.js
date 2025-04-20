// Function to filter bugs by ID
function searchBugById() {
    const searchInput = document.getElementById('searchInput').value.trim();
    const bugList = document.getElementById('bugList');
    const bugItems = bugList.querySelectorAll('li');

    let found = false;

    bugItems.forEach((item) => {
        const bugId = item.getAttribute('data-bug-id');
        if (bugId === searchInput) {
            item.style.display = 'flex';
            found = true;
        } else {
            item.style.display = 'none';
        }
    });

    // Show a message if no bugs are found
    const noBugsMessage = document.querySelector('.no-bugs');
    if (!found) {
        noBugsMessage.style.display = 'block';
    } else {
        noBugsMessage.style.display = 'none';
    }
}

// Attach event listener to the search button
document.getElementById('searchButton').addEventListener('click', searchBugById);

// Function to populate modules in a table
function populateModulesTable(modules) {
    const tableBody = document.getElementById('modulesTableBody');
    tableBody.innerHTML = ''; // Clear existing rows

    modules.forEach((module) => {
        const row = document.createElement('tr');
        const cell = document.createElement('td');
        cell.textContent = module;
        row.appendChild(cell);
        tableBody.appendChild(row);
    });
}

// Utility function to normalize strings
function normalizeString(str) {
    return str.trim().toLowerCase();
}

// Utility function to get bug details by ID
function getBugDetailsById(bugId) {
    const [priority, type, module, index] = bugId.split('-');
    const bugType = type === 'H' ? 'HTML/UI' : 'Functional';
    const normalizedPriority = priority.toUpperCase();
    const normalizedModule = module.toLowerCase();
    const bugIndex = parseInt(index) - 1;

    if (
        bugData[normalizedPriority] &&
        bugData[normalizedPriority][bugType] &&
        bugData[normalizedPriority][bugType][normalizedModule]
    ) {
        const bugs = bugData[normalizedPriority][bugType][normalizedModule];
        if (bugIndex >= 0 && bugIndex < bugs.length) {
            return {
                bugText: bugs[bugIndex],
                module: normalizedModule.charAt(0).toUpperCase() + normalizedModule.slice(1),
                bugType,
            };
        }
    }
    return null;
}

// Example usage: Populate table with modules
const modules = ['Module 1', 'Module 2', 'Module 3'];
populateModulesTable(modules);
