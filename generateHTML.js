//If manager selects engineer, add another card displaying engineer's info
//If manager selects intern, add another card displaying intern's info
//If manager selects none, do nothing

module.exports = team = {
//Function to generate HTML layout
generateHTML: function(cards) {
    return `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
            integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous" />
        <link href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="style.css" />
        <title>Team Profile</title>
    </head>
    
    <body>

        <header class="jumbotron text-center bg-danger text-white">
            <h1 class="display-3">My Team</h1>
        </header>
        <div class="row justify-content-center">
            ${cards.join('')}
        </div>
    </body>
    </html>`
},
//Function to generate new card HTML for manager
generateManagerHTML: function(managerresponses) {
    return `<div class="card bg-light mb-3" style="max-width: 18rem;">
                <div class="card-header bg-primary text-white font-weight-bold">${managerresponses.name} <br><i class="fas fa-coffee"></i> Manager</div>
                <div class="card-body">
                    <p class="card-text border">Employee ID: ${managerresponses.id}</p>
                    <p class="card-text border">Email: <a href = "mailto: ${managerresponses.email}">${managerresponses.email}</a></p>
                    <p class="card-text border">Phone Number: ${managerresponses.officeNumber}</p>
                </div>
            </div>`
},

generateEngineerHTML: function(engineerresponses) {
    return `<div class="card bg-light mb-3" style="max-width: 18rem;">
                <div class="card-header bg-primary text-white font-weight-bold">${engineerresponses.name} <br><i class="fas fa-glasses"></i> Engineer</div>
                <div class="card-body">
                    <p class="card-text border">Employee ID: ${engineerresponses.id}</p>
                    <p class="card-text border">Email: <a href = "mailto: ${engineerresponses.email}">${engineerresponses.email}</a></p>
                    <p class="card-text border">GitHub: ${engineerresponses.github}</p>
                </div>
            </div>`
},

generateInternHTML: function (internresponses) {
    return `<div class="card bg-light mb-3" style="max-width: 18rem;">
                <div class="card-header bg-primary text-white font-weight-bold">${internresponses.name} <br><i class="fas fa-user-graduate"></i> Intern</div>
                <div class="card-body">
                    <p class="card-text border">Employee ID: ${internresponses.id}</p>
                    <p class="card-text border">Email: <a href = "mailto: ${internresponses.email}">${internresponses.email}</a></p>
                    <p class="card-text border">School: ${internresponses.school}</p>
                </div>
            </div>`
}
}