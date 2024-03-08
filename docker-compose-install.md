# Install with Docker compose

> Any questions, problems or suggestions with this guide? Contribute the change yourself at
> https://github.com/Zwell-Home/home-energy-assessment-database .

## Quickstart

The following config is the easiest way of deploying the Home Energy Assesment Database with docker-compose.
There is one container for the API and one container for mongodb.

## Installing requirements

If you haven't already installed docker and docker-compose on your computer you can do
so by following the instructions on https://docs.docker.com/desktop/ and
https://docs.docker.com/compose/install/.

## Downloading the Home Energy Assesment Database codebase

To clone our git repo create a local folder for the code and follow these steps:
```
git clone https://github.com/Zwell-Home/home-energy-assessment-database.git
cd home-energy-assessment-database
cp .env.example .env***
# Edit .env and set your own secure passwords and alter any local settings you would like to use
docker-compose -f .\Docker-compose.yaml up
```

## Usage
You can now run the API.  If you have not changed the default ports you can go to:
```
http://localhost:3001/api/appliances
``` 
in a browser and you should see a JSON string of the different appliances.

## How to set environment variables

You can set these variables by using docker-compose env file
(https://docs.docker.com/compose/environment-variables/#the-env-file):

1. Copy the `.env.example` file found in the root of Home Energy Assessment Databaserepository to `.env`:
2. Edit `.env` and provide values for the  environment variables.
3. `docker-compose up`

Alternatively you can set these variables by either running docker-compose with the
environment variables set on the command line (fill in secure values first):

```
ENV1= ENV2= docker-compose up
```
### View the logs

```bash
$ docker-compose logs 
```

### On a nonstandard HTTP port

### Back-up your Mongo DB


### Restore your Mongo DB from a back-up


