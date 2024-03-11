# Angular Homes App
- Install Angular if you don't have it installed

  `npm install -g @angular/cli`

- Clone this branch to your local machine

  `git clone -b homes-app-start git@github.com:angular/codelabs.git homes-app`

- Once the code has been downloaded

  `cd homes-app`

- Install the depencies

  `npm install` 

- Run the application 
  - Start mock server: `json-server --watch db.json`
  - Start Angular app: `ng serve`

# References
  - Full tutorial: https://www.youtube.com/playlist?list=PL1w1q3fL4pmj9k1FrJ3Pe91EPub2_h4jF

## CLI Snippets
Create details page component </br>
`ng g c details --standalone --inline-template` </br>
`ng generate component details --standalone --inline-template`