//Function to generate HTML for team profile
function generateHTML(responses) {
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
            <div class="card bg-light mb-3" style="max-width: 18rem;">
                <div class="card-header bg-primary text-white font-weight-bold">${responses.name} <br>Icon and Job Title</div>
                <div class="card-body">
                    <p class="card-text border">${responses.id}</p>
                    <p class="card-text border">${responses.email}</p>
                    <p class="card-text border">Office Number, GitHub, or School</p>
                </div>
            </div>
        </div>
    </body>
    </html>`
}

module.exports = generateHTML;