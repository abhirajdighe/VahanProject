
# Welcome to Flight Service

 ## Project Setup
 - Clone the project to your local 
 - Execute `npm install` on the same path as of your root directory of the downloaded project
 - Create a `.env` file in the root directory and add the following environment variable
    - `PORT = 3000`
- Inside the `src/config` folder there is a file `config.json` add the following piece of json

    ```

        {
            "development": {
                "username": <YOUR_DB_LOGIN_NAME>,
                "password": <YOUR_DB_PASSWORD>,
                "database": "vahan_db",
                "host": "127.0.0.1",
                "dialect": "mysql"
            }
        }

    ```
    
- Once you've added your db config as listen above, go to the src folder from your terminal and execute

 `npx sequelize db:create` to create the database
 `npx sequelize model:generate --name vahandata --attributes name:String,email:String, mobile:String, dob:String`
 `npx sequelize db:migrate`


## DB Design
    - vahandata table

## Tables

### vahandata -> id, name, email, mobile, dob, cteated_at, updated_at

    ```
    npx sequelize model:generate --name vahandata --attributes name:String,email:String, mobile:String, dob:String
    
    ```