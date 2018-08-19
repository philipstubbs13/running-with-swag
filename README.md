# Running with Swag

Running with Swag is an online community created by runners, for runners. Whether you are a competitive runner, running enthusiast, or just a beginner, this site has something for you.

## Table of contents

* [Live](#live)
* [Screenshots](#screenshots)
* [About this project](#about-this-project)
  * [How the app is built](#how-the-app-is-built)
  * [App workflow](#workflow)
  * [Structure of the project](#project-structure)
* [Getting started](#getting-started)
* [Deploying the app](#deployment)
* [Technologies used to create app](#technologies-used)
  * [Back end technologies](#Backend)
  * [Front end technologies](#Frontend)
* [Direction for future development](#future)
* [Issues](#Issues)

## <a name="live"></a>Live

<https://running-with-swag.firebaseapp.com>

## <a name="screenshots"></a> Screenshots

### Login page

<img src="./readme_images/login.png">

### Home page

<img src="./readme_images/home1.png">
<br>
<img src="./readme_images/home2.png">
<br>
<img src="./readme_images/home3.png">

### About page

<img src="./readme_images/about.png">

### Races page

<img src="./readme_images/races1.png">
<br>
<img src="./readme_images/races2.png">
<br>
<img src="./readme_images/races3.png">

### Blog page

<img src="./readme_images/blog1.png">
<br>
<img src="./readme_images/blog2.png">

### Swag page

<img src="./readme_images/swag1.png">
<br>
<img src="./readme_images/swag2.png">

### Contact page

<img src="./readme_images/contact.png">

## <a name="about-this-project"></a> About this project

I created this site because I love to run. Running is my passion. Running has been a big part of my life ever since I was a kid. In 2018, I started to train and run competitively in different short distance (3-6 mile) races. My ultimate goal is to train my way up to running and finishing a marathon.

I not only created this site to share my running adventures and experiences, but I also want to create an online community for runners to learn more about different running topics, find out about upcoming running events, and just have a place where runners can come together to share and exchange information with one another.

I graduated from the University of Minnesota Full Stack Web Development program in May 2018, and I have been wanting to create a site like this for quite some time now. Now that I have graduated, I thought now would be a good time to start it up. This site's development will be ongoing and open source. So, if you are a runner and/or web developer and would like to contribute, let's get in touch.

### <a name="how-the-app-is-built"></a> How the app is built

### <a name="workflow"></a> App workflow

#### Authentication

### <a name="project-structure"></a> Structure of the project

After you clone the repository, navigate to the project root directory (MedLog). The project directory structure is set up as follows:

## <a name="getting-started"></a> Getting started

The following section will take you through the steps of setting up this app and getting it running locally on your computer.

If you don't want to set up this project locally and just want to see the deployed application, go to <https://running-with-swag.firebaseapp.com>.

To set up this application locally on your computer, perform the following steps:

  1. [Clone the repository](#clone-repository)
  2. [Install Node.js](#install-node)
  3. [Install yarn](#install-yarn)
  4. [Install the project dependencies](#dependencies)
  5. [Install MongoDB](#install-mongo)
  6. [Start the React development server](#start-server)

###  <a name="clone-repository"></a> 1. Clone the repository
The first step is to clone the project repository to a local directory on your computer. To clone the repository, run the following commands:
<pre>
git clone https://github.com/philipstubbs13/running-with-swag.git
cd ./running-with-swag
</pre>

###  <a name="install-node"></a> 2. Install Node.js

<p>If you don't already have Node.js installed on your computer, you can install the latest version <a href="https://nodejs.org/en/">here</a>.</p>

### <a name="install-yarn"></a> 3. Install yarn

To be able to install the dependencies and start the application locally, you will need to install yarn. Yarn is a package manager like npm.

To install yarn, run the following command:
<pre>npm install -g yarn</pre>

For more information about yarn and other installation options, see the yarn documentation: https://yarnpkg.com/en/.

### <a name="dependencies"></a> 4. Install the project dependencies

<p>The following packages are dependencies to the project.<p>

<p>Version information for each of these packages is available in the <b>package.json</b> file in the project root directory and in the <b>client</b> directory.</p>

<p>After you clone the repository to a local directory, change directory to the project root directory and run the following command to install the required packages:</p>
<pre>yarn install</pre>

<p>Change directory to the <b>MedLog/client</b> directory and run the following command to install the client dependencies.</p>

<pre>yarn install</pre>

###  <a name="install-mongo"></a> 5. Install MongoDB

###  <a name="start-server"></a> 6. Start the React development server.
<p>After performing all of the setup steps in the <b>Getting started</b> section, navigate to the project root directory (<b>running-with-swag</b>) and run the following command to start the React development server.</p>
<pre>yarn start</pre>

<p>After the development server has started, a Chrome browser window should open, and you should see the login screen for the application. If the browser does not automatically open after the server starts, you can verify that the application is working locally on your computer by opening Chrome and going to <a href="http://localhost:3000">http://localhost:3000</a>.

## <a name="deployment"></a> Deploying the app

This app is deployed to Firebase using Firebase Hosting. For more information on hosting with Firebase, see <https://firebase.google.com/docs/hosting/>. To deploy the app, you will need to build a production version of the app as well as have the Firebase CLI installed.

1. If not already installed, install the Firebase CLI by running the following command:
<pre>npm install -g firebase-tools</pre>

This installs the globally available firebase command. To update to the latest version, simply re-run the same command.

2. To connect your local machine to your Firebase account and obtain access to the Firebase project, run the following command:
<pre>firebase login</pre>

3. Change directory to the <b>running-with-swag/client</b> directory.

4. If you have deployed the app before, there will be a build directory inside <b>running-with-swag/client/</b>. Delete the <b>build</b> directory.

5. Run the following command to build a clean, production version of the app.
<pre>yarn build</pre>
<p>This command creates a directory called <b>build</b> inside of the <b>client</b> directory.</p>

6. Chnage directory to the project root directory (<b>running-with-swag</b>).

7. Commit changes to git (if not done already).

8. Run the following command to deploy your changes:
<pre>
firebase deploy
</pre>

This command deploys the project to <https://running-with-swag.firebaseapp.com>.

## <a name="technologies-used"></a> Technologies used to create app

* [Back end technolgies](#Backend)
* [Front end technologies](#Frontend)

### <a name ="Backend"></a> Back end technologies

* Node.js (<https://nodejs.org/en/>)
* Firebase Realtime Database (<https://firebase.google.com/docs/database/>)
* Firebase Hosting (<https://firebase.google.com/docs/hosting/>)

### <a name="Frontend"></a> Front end technologies

* HTML5
* CSS
* Javascript (ES6)
* React (<https://reactjs.org/>)
* PrimeReact (UI component framework for React - <https://www.primefaces.org/primereact/#/>)
* CSS Grid for page layout (<https://github.com/crowdfavorite/css-grid>)

## <a name="future"></a> Direction for future development

Source code will be developed over time to handle bug fixes and new features.

The following is a list of potential enhancements for future code development.

* Add a running events page where runners can search for a list of upcoming races in their area.
* Add additional sign-in methods, including username/password, Facebook, and Twitter.
* Use Firebase Storage to allow runners to upload images to site.
* Add feature that allows runners to create and share local running events.

## <a name ="Issues"></a> Issues

<p>If you find an issue while using the app or have a request, <a href="https://github.com/philipstubbs13/running-with-swag/issues/" target="_blank">log the issue or request here</a>. These issues will be addressed in a future code update.</p>
