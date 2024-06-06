# Running iHRIS with Docker

!!! note
    Time to complete: 20 minutes

## Requirements

The Docker approach requires Docker for Mac, Linux, or Windows. On Linux, docker-compose must also be installed. TO run iHRIS in Docker currently, you have to be running *Version 24.0.5*

Installing Docker and Docker Compose:

Docker Version 24.0.5:

To install Docker version 24.0.5, you may need to use a specific package manager or download the Docker binaries directly from Docker's website.

You can download Docker version 24.0.5 from the Docker GitHub releases page: Docker GitHub Releases
Once downloaded, follow the installation instructions provided for your operating system.
Docker Compose Version 1.29.2-1:

Docker Compose version 1.29.2-1 can be installed using the following command:
bash
Copy code
sudo curl -L "https://github.com/docker/compose/releases/download/1.29.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose
This command downloads the Docker Compose binary and makes it executable.
Increasing Docker Memory Allocation:

Memory dedicated to Docker should be increased to 4GB or more. This is a snapshot of memory usage with demo records and no dashboards. iHRIS, Redis, and Postgres use very minimal RAM, compared to Kibana (552MiB), ElasticSearch (846MiB), and HAPI FHIR Server (821MiB).

```
$ docker stats --no-stream
CONTAINER ID        NAME                CPU %               MEM USAGE / LIMIT  
e70fb8fa618b        ihris               0.00%               66.21MiB / 3.848GiB
8c97df1a9977        ihris_redis_1       0.18%               2.156MiB / 3.848GiB
6899574ca46f        kibana              1.00%               552.5MiB / 3.848GiB
e0a178ab8a1f        es                  2.17%               846.8MiB / 3.848GiB
19cd64447c41        fhir                1.19%               821.4MiB / 3.848GiB
8c1f348e9e3e        ihris_db_1          0.20%               54.07MiB / 3.848GiB
```

## Clone the Repository

Clone the repository and change to the root of it.

```sh
git clone https://github.com/iHRIS/iHRIS.git
# or for advanced users who may want to contribute later
# git clone git@github.com:iHRIS/iHRIS.git
cd iHRIS
```

## Launch iHRIS

iHRIS and all it's supporting software, mentioned above, can be launched by using one docker-compose file. This should run everything you need without running any further commands

```sh
docker-compose up -d
# the -d backgrounds the server stdout
```

!!! note
    The command above, good internet and some patience is all you need to run iHRIS.

Now open [http://localhost:3000](http://localhost:3000) and log in using username: <admin@ihris.org> and password: ihris

There will be no dashboards by default.

Enjoy!

## Troubleshooting Notes

Ensure that /resources are loaded, check the logs:

```log
ihris     | [winston] Attempt to write logs with no transports {"message":"Loading Autoload resource directory: ../resources","level":"info"}
ihris     | [winston] Attempt to write logs with no transports {"message":"Saving Basic - ihris-page-practitioner","level":"info"}
ihris     | [winston] Attempt to write logs with no transports {"message":"Saving Basic - ihris-role-admin","level":"info"}
ihris     | [winston] Attempt to write logs with no transports {"message":"Saving Basic - ihris-role-open","level":"info"}
ihris     | [winston] Attempt to write logs with no transports {"message":"Saving Basic - staff","level":"info"}
```

How to build a container locally and immediately remove it. For example:

```
docker run --rm -it --network ihris_default $(docker build -q -f Dockerfile.upload.definitions .)
```

This uses the helpful hint from [here](https://stackoverflow.com/questions/45141402/build-and-run-dockerfile-with-one-command) to build and run an image then delete it.
