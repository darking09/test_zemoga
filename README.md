# ZEMOGA TESTING BACK

## Installation and Setup

Moving on, I am going to explain the steps to run this code from the docker:

1. Add the .env according to .env.example, you could change the values for your database or environment.

2. To install the project from docker you must run the next command and it'll launch the serve on [http://localhost](http://localhost):<br/>
   `docker-compose up`

3. After the Docker started, you should enter to docker shell environment with the next command:<br/>
   `sudo docker exec -it nodejs_zemoga_test bash`



**Note**: You should have installed and configured the docker on your computer.

## Running the unit tests

I can't make the unit tests or E2E tests for this env, this is technical debt.

## Server

This server was deployed over EC2 on the next url: [http://ec2-54-210-82-53.compute-1.amazonaws.com](http://ec2-54-210-82-53.compute-1.amazonaws.com/user/627caf18a472f3e3e6333ddd)