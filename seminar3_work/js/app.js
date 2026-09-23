fetch("data/dashboard.json")
    .then(response => response.json())
    .then(data => {
        const userscount = document.querySelector("#userscount");
        const ordercount = document.querySelector("#orderCount");
        const salarycount = document.querySelector("#salaryCount");
        const notificationcount = document.querySelector("#notificationCount");
        userscount.textContent = data.users;
        ordercount.textContent = data.orders;
        salarycount.textContent = data.revenue;
        notificationcount.textContent = data.notifications;

        const actionsTable = document.querySelector("#actionTable");

        data.actions.forEach(action => {

            const row = document.createElement("tr");

            row.innerHTML = `
                <td>${action.user}</td>
                <td>${action.action}</td>
                <td>${action.date}</td>
                <td>${action.status}</td>
            `;

            actionsTable.append(row);
                                
            })
    
    });