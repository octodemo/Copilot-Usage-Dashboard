# Copilot Usage Dashboard
This Angular application is designed to provide insights into GitHub Copilot usage within an organization. It utilizes the Copilot Usage Metrics API (private Beta) and Copilot Seat Management API to fetch and display relevant data.

> **Note:** This solution was developed to demonstrate potential use cases and is not intended for production use. If you plan to deploy it in a production environment, please customize it to meet your non-functional requirements (NFRs). This repository is not regularly maintained or updated.

## Features
1. **Home/Organization Tab:** Displays Copilot usage data for the organization.
2. **Impact Tab:** Planned feature to showcase GitHub-specific metrics indicating the impact of Copilot, such as lines of code committed per day, overall issue counts, etc. (Pending implementation)
3. **Sample Response Tab:** Provides a sample API response schema for reference.
4. **Org Seats Tab:** Shows seat assignment details for the organization.
5. **Enterprise Tab:** Planned feature to capture Copilot usage at the enterprise level. (Pending implementation)

## Getting Started

1. Clone the Repository to Visual Studio Code
2. Install the required dependencies using `npm install`
3. Run the app using `npm start`
4. Access the application in your browser at http://localhost:4200.

Above steps will start the app on `localhost:4200` using sample data from `src/assets` folder. 

If you want to use your own data, follow the below steps:
1. Create a GitHub Personal Access Token with Copilot for Business Scope
2. Modify the token in `src/environments/environment.ts` file
3. Modify the organization name in `src/environments/environment.ts` file
4. Comment the sample data loading code in `src/app/services/organization-level.service.ts` file and uncomment the code to load data from API
5. Install the required dependencies using `npm install`
6. Run the app using `npm start`

## References
1. [GitHub Copilot Usage Metrics API](#) - Yet to be published (Private Beta)
2. [GitHub Copilot Seat Management API](https://docs.github.com/en/rest/copilot?apiVersion=2022-11-28)

### Status: 15-Jan 



https://github.com/octodemo/Copilot-Usage-Dashboard/assets/10282550/20db62a2-b020-4318-9ed8-f2ef488d7dc2

