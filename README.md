
![](https://img.shields.io/badge/Microverse-blueviolet)
# Hello-React-Rails




### Description 
Implement a connection between a Ruby on Rails back-end and React front-end. Generate randome greetings from Database and display using API.




### Cloning the project

 git clone https://github.com/sentayhu19/hello-rails-react <Your-Build-Directory>
``` 
- cd hello-rails-react
- rails s
```


## Built with
- Ruby 3.1.2 on Rails 7.0.3.1
- PostgreSQL

## Prerequisites

Vscode or anyother
Setup

## Install
    Ruby
    Rails

### Development Database

```sh
# Create user
sudo -u postgres createuser -e ced00 -s
# Load the schema
rails db:schema:load
#----- If you want prefer this approach
# Create the database
rake db:create
# Create database Migration
rails db:migrate
```

### Run

```sh
rails s
```

## Run tests
```sh
bundle install
rspec
```

## Author

👤 **Sentayhu Berhanu**

- GitHub: [@sentayhu19](https://github.com/sentayhu19)
- LinkedIn: [sentayhu-berhanu](https://www.linkedin.com/in/sentayhu-berhanu-6376579a/)

## Acknowledgment
For the desgin of this app thanks to the author of [the original design](https://www.behance.net/gallery/31579789/Ballhead-App-(Free-PSDs)) 

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](https://github.com/sentayhu19/hello-rails-react/issues).

## Show your support

Give a ⭐️ if you like this project!

## 📝 License

This project is [MIT](./MIT.md) licensed.
