# WEB103 Project 4 - *Bolt Bucket*

Submitted by: **Long Ta**

About this web app: **Bolt Bucket is a custom car builder web app that allows users to personalize a car by choosing exterior color, wheels, interior, engine, and package options. The app dynamically updates the car preview and total price as options are selected. Users can save custom cars to a PostgreSQL database, view all saved cars, edit existing cars, view details, and delete cars.**

Time spent: **12** hours

## Required Features

The following **required** functionality is completed:

<!-- Make sure to check off completed functionality below -->

* [x] **The web app uses React to display data from the API.**
* [x] **The web app is connected to a PostgreSQL database, with an appropriately structured `CustomItem` table.**

  *  [x] **NOTE: Your walkthrough added to the README must include a view of your Render dashboard demonstrating that your Postgres database is available**
  *  [x] **NOTE: Your walkthrough added to the README must include a demonstration of your table contents. Use the psql command 'SELECT * FROM tablename;' to display your table contents.**
* [x] **Users can view **multiple** features of the `CustomItem` (e.g. car) they can customize, (e.g. wheels, exterior, etc.)**
* [x] **Each customizable feature has multiple options to choose from (e.g. exterior could be red, blue, black, etc.)**
* [x] **On selecting each option, the displayed visual icon for the `CustomItem` updates to match the option the user chose.**
* [x] **The price of the `CustomItem` (e.g. car) changes dynamically as different options are selected *OR* The app displays the total price of all features.**
* [x] **The visual interface changes in response to at least one customizable feature.**
* [x] **The user can submit their choices to save the item to the list of created `CustomItem`s.**
* [x] **If a user submits a feature combo that is impossible, they should receive an appropriate error message and the item should not be saved to the database.**
* [x] **Users can view a list of all submitted `CustomItem`s.**
* [x] **Users can edit a submitted `CustomItem` from the list view of submitted `CustomItem`s.**
* [x] **Users can delete a submitted `CustomItem` from the list view of submitted `CustomItem`s.**
* [x] **Users can update or delete `CustomItem`s that have been created from the detail page.**

The following **optional** features are implemented:

* [ ] Selecting particular options prevents incompatible options from being selected even before form submission

The following **additional** features are implemented:

* [x] Added a live CSS-based car preview that changes color based on the selected exterior option.
* [x] Added dynamic total price calculation for all selected customization options.
* [x] Added backend validation to prevent impossible custom car combinations from being saved.
* [x] Added a detail page where users can view all features of a saved custom car.
* [x] Added responsive card layout for displaying saved custom cars.

## Video Walkthrough

Here's a walkthrough of implemented required features:

<img src='YOUR_GIF_LINK_HERE' title='Video Walkthrough' width='' alt='Video Walkthrough' />

<!-- Replace this with whatever GIF tool you used! -->

GIF created with **ScreenToGif**

<!-- Recommended tools:
[Kap](https://getkap.co/) for macOS
[ScreenToGif](https://www.screentogif.com/) for Windows
[peek](https://github.com/phw/peek) for Linux. -->

## Notes

One challenge I encountered was connecting the Express backend to the Render PostgreSQL database and making sure the `custom_cars` table was created before trying to save data from the frontend. I also had to make sure the frontend API calls matched the backend routes correctly. Another challenge was implementing the dynamic price calculation and visual preview updates so that the user could immediately see changes while customizing the car.

## License

Copyright 2026 Long Ta

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

> http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
