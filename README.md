email: kscodebase@gmail.com

# How to use?

1. Install MySQL
2. Fill in all the required values in the `.env` file (After filling in, rename the `.env.example` file to `.env`.)
3. Synchronize tables with MySQL using the commands below.

   ```bash
   $ npm install # Installs the required node package modules.
   $ npm run schema:sync # Instantly creates the defined entities.
   ```

   - If there is incorrect data, please delete it using Workbench.
   - Or, delete and recreate the DB using `schema:drop` followed by `schema:sync`.

4. After running the server, freely connect with the front end.

   ```bash
   $ npm run start:dev # or npm run start
   ```

5. You can check the Swagger documentation at `localhost:3000/api`
   - Use this documentation to check routes, features, Requests, and Responses.

A guide on clustering with pm2 will be provided later.
