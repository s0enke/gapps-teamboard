# Team Dashboard

Show an uptodate overview of teams in your organization by leveraging the Google
Apps APIs and a Spreadsheet to feed it (single source information).

## Goals

 - Display an up-do-date list of teams with their members, mission, vision,
   constraints and other interesting information. 
 - Make team mission, vision and constraints transparent.
 - Can be used by off-site teams as well
 - Can be displayed on a big screen or projector
 - Foster communication about team structure, maybe even reveal mission/vision
   conflicts
 - Reduce Monkey tasks of updating information which are available in Google
   Apps anyway
 - Make it easy to update the wall by using a "database" everyone can update 

## Setup instructions

 1. Create a new Google Apps Script project. It will be the development and
   hosting environment for this app.
 2. create the following files within the project, if not existing: `Code.js`, `index.html`, `JavaScript.html` and `Stylesheet.html` - and copy the code from this repo into them.
 3. Make a copy of [The source spreadsheet](https://docs.google.com/spreadsheets/d/1dhVvXWXDJcdqK9VF-ifCBgGLp3M3zjcDTrn9MY4b-8k/edit#gid=0)
   and add at least one team. It's important that you add a team mailing list
   (Google Grouos) so that the members can be extracted and shown by the App.
   The team mailing list does not need to be org-public, but the members have to
   be.
 4. Now we need to make the Spreadsheet ID known to the app. Open `Code.js` and
    put 
    ```
    scriptProperties.setProperty('sourceSpreadsheetDocumentId', '<ID of your source spreadheet>')
    ```
    on top of
    ```
    sourceSpreadsheetDocumentId = scriptProperties.getProperty('sourceSpreadsheetDocumentId')
    ```
    in order to save the value one time. You can remove this after the first run of the the app.
 5. Publish -> Deploy as web app.
 6. Have a look at the deplyed web app. It should show your configured team(s).
 7. Now we need to grant access to the "Admin SDK Directory Service" API, please
   follow [these instructions](https://developers.google.com/apps-script/guides/services/advanced)
 8. Deploy the app one ore time in order to activate the new permissions. You
   should now see the team members if permissions to Google Apis have been set up correctly.

## Development instructions

Just follow the setup instructions as Google Apps Script has an integrated
development environment.

## FAQ

### Team members are not displayed.

xxx

## The experiment

This is an experiment. Some key success indicators could be:

 - The Spreadsheet is more up-to-date than the analog walls
 - People are using the board (track it within GA or another metrics system?)
 - Wrong information (e.g. orphaned team members) is cleaned up because it's
   visible now.


## The future

 - Use native Google Apps teams feature
 - Make it more interactive, e.g. vote team mission/vision up/down or add comments
