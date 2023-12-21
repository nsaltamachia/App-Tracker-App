# App Tracker App  |  https://app-tracker-app-0765f145ec66.herokuapp.com/
Nick Saltamachia SEIR-925



I built this app to help me keep track of the many applications I'm likely to file in the search for my first software engineering role. 

Have you ever gotten a call back about a job that you don't remember applying to? (asking for a friend...)

It's very simple, but I think having a log of these applications will help me stay on top of my job hunt, and avoid some awkward phone calls...

The home page contains a "new job form," which includes:
-Job title
-Company name
-Room for a short description of the role
-Salary range
-A selector for updating the application's status(submitted, pending follow-up, interview scheduled, and...rejected) 
-A picker for the application submission date
-A picker for a follow-up reminder

The home page also presents a card list of all of the applications I've filed. These "Job Cards" present trimmed-down information from the larger form, and have buttons for navigation to the job's edit and "more details" page, along with a delete button.

![Alt text](<assets/Home Page.png>)

![Alt text](<assets/Job detail.png>)

Technologies used:
MongoDB 
Express
React
Node
AWS S3 bucket (for future features)


Nifty Code:
-Automatic follow-up date picking, set to 7 days after the selected submission date

![Alt text](<assets/Auto Date Selector.png>)

Next Steps:
-Incorporate use profiles so that any user can privately store their own applications

-Incorporate a counter in the applications list 

-Add a document upload feature to store bespoke resumes and cover letters, with a quickview feature and ability to download documents

-Add a Contacts form to add key figures and their contact information within each application 

-Add work type(remote?), city, and state fields in the "New Application" form

-Incorporate a calendar page that will show dates of applications filed, dates you've scheduled follow-ups, and the ability to add interviews as they are offered
    -Day-of alerts for follow-ups you ened to make
    -Ability to add other appointments, like interviews

-Swap automatic follow-up date picker in "New Application" form for an automated alert date selector with a field for relevant information like POCs and their contact information

-Add a 3rd-party motivational quote generator, becuase sometimes you need a little extra


