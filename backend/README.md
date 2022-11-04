# Backend quiz:
If you have any questions, please booka a meeting at https://appoint.ly/s/mitchlivmore/introduction

## Purpose
We would like to test and review following 3 skills.  
1. Ability to design database
2. Ability to write specification for developers 
3. Ability to estimate time and cost for development 

## Review criteria
1. How you design database
2. How you structure your code design and how you test it. 
3. How you document your specification to developers

## Ask
Please create a sepecification for backend and frontend developers to complete the task of creating https://wotso.
hamletapp.co/shop/meeting-rooms page

## Technology used
- Backend: Node.js, GraphQL(Hasura), Postgres
- Frontend: React, Antd, GraphQL, Apollo

## Deliverables
Please commit followings to ./backend folder

1. High level database design (Only table names and important columns are required. If there are any optional columns that will be a future proof to add more capability, please include them as well)

e.g.
table: items
columns: item_id (PK), item_type (meetingroom), unit_price, ...

2. Specification for backend developer to implement the backend

3. Specification for frontend developer to implement the frontend

4. Estimate time and cost for development

# Submission:
1. Database design: https://drive.google.com/file/d/1kYmG1zGD9I3jjoSu-PSohvo7G9cUF8OA/view?usp=sharing
2. Specification: https://docs.google.com/spreadsheets/d/1GAr63wwG5y8Yf39Z9Y88eIkW9i6HlZPwseG2Kj0IzkQ/edit?usp=sharing
- I've just created some user stories as example not all the needed ones

# Backend Note
project using:  Nestjs, postgres, graphql, prisma

graphql query: availableMeetingRooms
create graphql query demo by "query_available_meeting_rooms_by_location_preload" 

api: /payment 
Save booking rooms into purchase order
params input

```
{
	"company": "",
	"name": "",
	"email": "",
	"mobile": "",
	"bookingRooms":[{
		"roomId": "",
		"attendance": "2",
		"request": "",
		"startTime": "2022-11-03T22:30:00.000Z",
		"endTime": "2022-11-03T23:30:00.000Z"
	}]
} 
```


