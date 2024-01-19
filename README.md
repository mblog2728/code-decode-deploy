<div align="center">
    <a href="https://codedecode-akash.netlify.app/">
  <img src="https://github.com/AkashP27/code-decode/blob/main/frontend/public/logo.png" width="128px"/>
    </a>
    <h1>CODE DECODE</h1>

  <div align="start"> 
    <h2>Code, Compile & Run</h2>
    Compile & run your code with the CODE DECODE online IDE. Our online compiler supports multiple programming languages like Python, C++, Java, JavaScript, Go.
  </div>
  <br/>
    <img src="https://github.com/AkashP27/code-decode/blob/main/frontend/public/homepage.png" width="1000px"/>
    <img src="https://github.com/AkashP27/code-decode/blob/main/frontend/public/homepage1.png" width="1000px"/>

</div>

**Live App Demo** : [https://codedecode-akash.netlify.app/](https://codedecode-akash.netlify.app/)

## Requirements

For development, you will only need Node.js and a node global package, npm, installed in your environment.

## Install

#### Step 1: Clone the repository

```bash
git clone https://github.com/AkashP27/code-decode.git
```

#### Step 2: Create Your MongoDB Account and Database/Cluster

- Create your own MongoDB account by visiting the MongoDB website and signing up for a new account.

- Create a new database or cluster by following the instructions provided in the MongoDB documentation. Remember to note down the "Connect to your application URI" for the database, as you will need it later. Also, make sure to change `<password>` with your own password

- add your current IP address to the MongoDB database's IP whitelist to allow connections (this is needed whenever your ip changes)

#### Step 3: Create Redis Server

- Install Redis server for your operating system.
- Run redis server

#### Step 4: Create the Environment File

- Create a file named .env in the / directory.
- Copy all variables from tmp.env and paste inside .env
  This file will store environment variables for the project to run.

#### Step 6: Install Backend Dependencies

In your terminal, navigate to the / directory of the project and run the following command to install the backend dependencies:

```bash
npm install
```

This command will install all the required packages specified in the package.json file.

#### Step 7: Run the Backend Server

In the same terminal, run the following command to start the backend server:

```bash
npm run dev
```

#### Step 8: Install Frontend Dependencies

Open a new terminal window , and run the following command to install the frontend dependencies:

```bash
cd frontend
```

- Create a file named .env in the /frontend directory.
- Copy all variables from tmp.env and paste inside .env

```bash
npm install
```

This command will navigate to the frontend directory within the project and install all the required packages for the frontend.

#### Step 9: Run the Frontend Server

After installing the frontend dependencies, run the following command in the same terminal to start the frontend server:

```bash
npm start
```

This command will start the frontend server, and you'll be able to access the website on localhost:3000 in your web browser.

## Dockerize the app

#### Step 1: Start docker daemon and pull the images

```bash
docker pull akashp27/codedecode-frontend:0.0.1.RELEASE
```

```bash
docker pull akashp27/codedecode-api:0.0.3.RELEASE
```

#### Step 2: Run the containers using docker compose file

```bash
docker-compose -f docker-compose.yaml up
```
