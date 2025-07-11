# CTV App

## com.domain.app.CTVApp

### Getting started

> Before you follow the steps below, make sure you have the
[Lightning-CLI](https://rdkcentral.github.io/Lightning-CLI/#/) installed _globally_ only your system

```
npm install -g @lightningjs/cli
```

#### Running the App

1. Install the NPM dependencies by running `npm install`

2. Build the App using the _Lightning-CLI_ by running `lng build` inside the root of your project

3. Fire up a local webserver and open the App in a browser by running `lng serve` inside the root of your project

#### Developing the App

During development you can use the **watcher** functionality of the _Lightning-CLI_.

- use `lng watch` to automatically _rebuild_ your App whenever you make a change in the `src` or  `static` folder
- use `lng dev` to start the watcher and run a local webserver / open the App in a browser _at the same time_

#### Documentation

📺 LightningJS CTV App
This is a simple Connected TV (CTV) app built using LightningJS (L2) as part of an internship assignment. The app demonstrates the use of layout, navigation, focus management, and basic media rendering.

🚀 How to Run the App
Clone the repo or download the ZIP:


git clone https://github.com/sanjay50986/CTV-App.git
cd lightningjs-ctv-app
Install dependencies (if using a package manager like npm or yarn):

lng dev

⚠️ Make sure you have @lightningjs/sdk and a dev server setup in your package.json.

✅ Features Implemented
Home Page:

App title displayed at the top

Horizontally scrollable row of 5 thumbnails

Visible focus highlight on selected thumbnail

Navigation:

Left/Right arrow key navigation

Enter key opens details page

Details Page:

Displays selected item's title

Shows dummy image (rectangle)

Back key returns to the Home page

Extras (if implemented):

Item data loaded from a local JSON file

Page transition animations
