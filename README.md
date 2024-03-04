# AirLine_Booking_System

# Objective
Aim is to build a backend system that can support differnt featurs for an Air-line booking system
our end users is going to be someone who wants to book flights and query about flights
so we need a roubust system to give them a best expreience possible
this part is showing the backend design of the project as this backend is based on Microservices architecture

# Requirements
- A user should able to search flights based on 2 location 
- user should be able to mention source and destination place
- user should be able to select date of journey
- [future_functionality] user should be able to search for return flights and multi city flights
- user should be able to select the class of the flight ( buisness class or else) ( not mandatory)
- we will only show the flights if that have a buisness class and seats are avalvil
- select the numbers of seats 
- based on above data we will show the best flights posible
- will show the best avalavil flights based on time and price on the top
- show pagination features for optimisimg performance reduce the load also..
- we should support filter based on departure time,duration,price,time,stops and airlines duration etc

- A user should be able to book a flight considering that user id registered on the platform
- cancelation and refund 
- Tracking flight prices should be possible the user should be notified about any price drops
- for making a booking user has to make a payment 


- user should be able to list their previous and upcoming flights
- user should be able to download Boarding pass if they have online check in
- Online check mchannisim should be suported

- notification via email for completing onine check in before 3 hrs of departure
- Notifications [ flight delay ]
- user should be able to review the flight journey ( text / star)

- authentication using mailId and password
- support system 
- listing FAQs
- user should be able to request and book exces luggage for every flight

# Non functional requirement 
- we can expect there will be more requests for search rather thn booking
- flight booking data should be accurate
- Expect there will be 100k active users (overall yearly) and 2k for booking daily







