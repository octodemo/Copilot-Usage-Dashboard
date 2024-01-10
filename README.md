# Copilot Usage Dashboard
App to demonstrate the usage of Copilot Usage API

## Objective
This application aims to showcase the utilization of the Copilot Usage API (Alpha). Specifically, the app presents Copilot usage metrics retrieved from the API within the **Organization Level** tab.

Planning to add more GitHub specific metrices under **Impact** tab to show the improves in terms of number of lines of code commited per day, overall issue counts, etc. These metrices will be an indicative of Copilot impact, if implemented properly.  

## Instructions to run the app
For executing this app, follow the below steps:
1. Clone the Repository to Visual Studio Code
2. Install the required dependencies using `npm install`
3. Run the app using `npm start`

Above steps will start the app on `localhost:4200` using sample data from `src/assets` folder. Sample data is from _Octodemo_ organization.

If you want to use your own data, follow the below steps:
1. Create a GitHub Personal Access Token with scopes mentioned in [API documentation](https://docs.github.com/en/early-access/copilot/copilot-usage-api)
2. Modify the token in `src/environments/environment.ts` file
3. Modify the organization name in `src/environments/environment.ts` file
4. Comment the sample data loading code in `src/app/services/organaization.service.ts` file and uncomment the code to load data from API
5. Install the required dependencies using `npm install`
6. Run the app using `npm start`


### 10-Jan update

![Screenshot 2024-01-10 at 9 58 36 AM](https://github.com/octodemo/Copilot-Usage-Dashboard/assets/10282550/e897afba-8e06-443f-ada5-0ad154c3388d)

### 5-Jan update

https://github.com/octodemo/Copilot-Usage-Dashboard/assets/10282550/92d8fde0-212f-423f-962e-9b5bb0983b03
