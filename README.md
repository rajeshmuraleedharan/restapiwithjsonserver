# Rest api with json server
Create A REST API With JSON Server(json-server) and Mocking Data with Faker.js

https://hub.docker.com/r/rajeshmuraleedharan/restapiwithjsonserver/


More often front-end developers need to simulate a REST api service to deliver json data to front-end app or mock an external api while we do integration testing.  JSON Server is a simple project that helps to setup a REST API endpoint with CRUS operations very fast. Check this https://github.com/typicode/json-server to know more about JSON Server.

In this sample repo you can learn about to setup JSON Server and publish as static JSON file as a REST API. Also generate fake data on the fly using Faker.js and expose REST api. Finally dockerize the app.

Note: I have used Visual Studio Code to create this project

# Step 1
Create a package.json file that describes your app and its dependencies 
![alt text](https://github.com/rajeshmuraleedharan/restapiwithjsonserver/blob/master/images/package-json.PNG)

https://github.com/rajeshmuraleedharan/restapiwithjsonserver/blob/master/package.json 

# Step 2
create a server.js file that defines app using the json-server.

![alt text](https://github.com/rajeshmuraleedharan/restapiwithjsonserver/blob/master/images/serverjs.PNG)
https://github.com/rajeshmuraleedharan/restapiwithjsonserver/blob/master/server.js 

define port number you want to run, if you are running from docker it’s better use 8080. We will define all our api routes in Db.js file.

# Step 3
Create DB.js file

![alt text](https://github.com/rajeshmuraleedharan/restapiwithjsonserver/blob/master/images/dbjs.PNG)
https://github.com/rajeshmuraleedharan/restapiwithjsonserver/blob/master/db.js 

first variable “generatePersonModule” links another file called “person.js”. In “person.js” I have used faker.js library to produce data on the fly.

![alt text](https://github.com/rajeshmuraleedharan/restapiwithjsonserver/blob/master/images/fakejs.PNG)
https://github.com/rajeshmuraleedharan/restapiwithjsonserver/blob/master/createdata/person.js 

“firstRoute” variable loads “employees.json” static JSON file.

![alt text](https://github.com/rajeshmuraleedharan/restapiwithjsonserver/blob/master/images/employeesjson.PNG)
https://github.com/rajeshmuraleedharan/restapiwithjsonserver/blob/master/json/employees.json 

So we are hosting two api routes 

“employees” – which provides data from a static file
“persons” – this provides dynamic data using faker.js

# now you can test your rest api from CMD. Open CMD window from sorce folder.

. Run command "npm install"

. Run "node server.js"

browse http://localhost:8080 url from your browser or "curl -i localhost:8080" from command line or use Postman.
![alt text](https://github.com/rajeshmuraleedharan/restapiwithjsonserver/blob/master/images/jsonserver.PNG)

# Step 4
Building docker image

docker build -t <your docker hub username>/<image name and tag>
  
docker build -f Dockerfile --no-cache . -t rajeshmuraleedharan/restapiwithjsonserver:v1
  
# Step 5
Run the image

docker run -p 5000:8080 -d rajeshmuraleedharan/restapiwithjsonserver:v1

Open a web browser and navigate to http://localhost:5000

# Step 6 (optional)
Push docker image to docker hub

docker push rajeshmuraleedharan/restapiwithjsonserver:v1

https://hub.docker.com/r/rajeshmuraleedharan/restapiwithjsonserver/











