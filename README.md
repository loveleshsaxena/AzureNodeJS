# AzureNodeJS

This project consist of a MetricServer and MetricClient code. The application is written in NodeJS and bash scripting. The solution is built on Azure on RHELv7. Make sure your user have the required access.

## MetricServer
This is a server which will listen to all clients sending info to it and provide a GET API to view all the info and a POST API which will be used by clients to push metric information.

### MetricServer Setup via automation
To setup MetricServer on a server:
1. SSH into the machine where you want to setup MetricServer.
2. Clone the repo using (make sure to install git using 'yum install git'):
```
git clone https://github.com/loveleshsaxena/AzureNodeJS.git
```
3. Go to the the server directory:
```
cd AzureNodeJS/AlphaServer
```
4. After this, please update the permission for bash script by:
```
chmod +x AlphaServer.sh
```
5. Once all this is done, please execute the bash script to configure system as MetricServer:
```
./AlphaServer.sh
```
6. It should complete setup and the server should be up and running. 

The user will be able to browse the web app on port 3000 on public IP of the server.


## MetricClient
This is a client which will register to the server by endpoint config like publicIP and port, and then it will start sending ssh attempts information to the server.

### MetricClient Setup via automation
To setup MetricClient on a server:
1. SSH into the machine where you want to setup MetricClient.
2. Clone the repo using (make sure to install git using 'yum install git'):
```
git clone https://github.com/loveleshsaxena/AzureNodeJS.git
```
3. Go to the the client directory:
```
cd AzureNodeJS/AlphaClient
```
4. Make sure the config file has all the required parameters set in AlphaClient.config, mainly for publicIPPort.
```
publicIPPort="x.x.x.x:3000"
```
5. After this, please update the permission for bash script by:
```
chmod +x AlphaClient.sh
```
6. Once all this is done, please execute the bash script to configure system as MetricClient:
```
./AlphaClient.sh
```
7. It should complete setup and you should see the display message 'AlphaClient configured successfully' on screen. 

The user will be able to see the ssh login attempts on MetricServer for this client.


## Future work
There are below tasks which are identified to be picked up in future:
1. Run AlphaServer on a service which can be handled at OS level.
2. Use DB instead of flat files for storing the client info.
3. Install a load balancer/reverse proxy server (NGINX) to handle load in a better way.