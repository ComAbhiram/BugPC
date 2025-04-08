/* ...existing code... */

// Function to filter bugs by ID
function searchBugById() {
    const searchInput = document.getElementById('searchInput').value.trim();
    const bugList = document.getElementById('bugList');
    const bugItems = bugList.querySelectorAll('li');

    let found = false;

    bugItems.forEach((item) => {
        const bugId = item.getAttribute('data-bug-id');
        if (bugId && bugId.toLowerCase() === searchInput.toLowerCase()) {
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
        noBugsMessage.textContent = `No bugs found with ID: ${searchInput}`;
    } else {
        noBugsMessage.style.display = 'none';
    }
}

// Attach event listener to the search button
document.getElementById('searchButton').addEventListener('click', searchBugById);

function updateBugList() {
    const bugItems = document.getElementById('bugItems');
    const functionalColumn = document.querySelector('.functional-column');
    const htmlColumn = document.querySelector('.bug-table th:first-child');
    let htmlBugs = [];
    let functionalBugs = [];

    // Show or hide columns based on the current bug type
    if (currentBugType === 'HTML/UI') {
        functionalColumn.classList.add('hidden');
        htmlColumn.classList.remove('hidden');
    } else if (currentBugType === 'Functional') {
        htmlColumn.classList.add('hidden');
        functionalColumn.classList.remove('hidden');
    } else {
        htmlColumn.classList.remove('hidden');
        functionalColumn.classList.remove('hidden');
    }

    // Get bugs based on current module selection
    const moduleBugs = currentModule === 'all' 
        ? Object.keys(bugData[currentPriority]['HTML/UI'])
        : [currentModule];

    // Collect HTML/UI bugs
    moduleBugs.forEach(mod => {
        if (bugData[currentPriority]['HTML/UI'][mod]) {
            htmlBugs.push(...bugData[currentPriority]['HTML/UI'][mod].map(bug => ({
                bug,
                module: mod
            })));
        }
    });

    // Collect Functional bugs
    moduleBugs.forEach(mod => {
        if (bugData[currentPriority]['Functional'][mod]) {
            functionalBugs.push(...bugData[currentPriority]['Functional'][mod].map(bug => ({
                bug,
                module: mod
            })));
        }
    });

    // Filter bugs based on current bug type
    if (currentBugType !== 'all') {
        if (currentBugType === 'HTML/UI') {
            functionalBugs = [];
        } else {
            htmlBugs = [];
        }
    }

    // Generate table rows
    const maxLength = Math.max(htmlBugs.length, functionalBugs.length);
    bugItems.innerHTML = Array.from({ length: maxLength }, (_, index) => `
        <tr>
            <td>
                ${htmlBugs[index] ? `
                    <div class="bug-item">
                        <span>${htmlBugs[index].bug}</span>
                        <button class="copy-btn" data-bug-id="${currentPriority}-H${index + 1}" data-bug-type="HTML/UI" data-module="${htmlBugs[index].module}">
                            <i class="fas fa-copy"></i>
                        </button>
                    </div>
                ` : ''}
            </td>
            <td class="${functionalColumn.classList.contains('hidden') ? 'hidden' : ''}">
                ${functionalBugs[index] ? `
                    <div class="bug-item">
                        <span>${functionalBugs[index].bug}</span>
                        <button class="copy-btn" data-bug-id="${currentPriority}-F${index + 1}" data-bug-type="Functional" data-module="${functionalBugs[index].module}">
                            <i class="fas fa-copy"></i>
                        </button>
                    </div>
                ` : ''}
            </td>
        </tr>
    `).join('');

    // Add copy functionality
    document.querySelectorAll('.copy-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const bugId = this.getAttribute('data-bug-id');
            const bugType = this.getAttribute('data-bug-type');
            const module = this.getAttribute('data-module');
            const bugText = this.parentElement.querySelector('span').textContent;
            
            const copyText = `The bug "${bugText}" is ${currentPriority} ${bugType} bug in the ${module} module. Bug ID: ${bugId}`;
            
            navigator.clipboard.writeText(copyText).then(() => {
                const originalText = this.innerHTML;
                this.innerHTML = '<i class="fas fa-check"></i>';
                setTimeout(() => {
                    this.innerHTML = originalText;
                }, 2000);
            });
        });
    });

    // Show the table
    document.querySelector('.bug-table-container').style.display = 'block';
}

// Ensure the table is shown when a priority level is clicked
priorityItems.forEach(item => {
    item.addEventListener('click', function() {
        priorityItems.forEach(i => i.classList.remove('active'));
        this.classList.add('active');
        currentPriority = this.getAttribute('data-priority');
        updateBugList();
    });
});
