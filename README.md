# To-do List with react and parse

Created with CodeSandbox

## Project description

The project is a personal schedule website that provide both personal view and guest view. The main purpose of this website is to let the website owner (Host) keep track of their to-do items, while other people (Guest) can see when the host is occupied. Both views are based on their local time, so a conversion is automatically intergraded.

The project was first built as a page in my personal website. I would like my collaborators/friends know when I am available, so that they can make appointment. To that end, I can grant these friends to register a user account. Unlike admin account owned by me (the host), user account can only make appointment, and can only modify appointment object created by themselves. The host can always modify all to-do items created by himself, or appointment items created by other users.

## User guide

Upon logging in on a new computer, the page will directly go to "Guest" view.

### Guest View

This view is provided to anyone on the internet to see my schedule. They will only know when I am not available, but they cannot see the detail of each to-do, e.g. do what with whom, etc.
You can go to login, register page from this view, but you cannot go to protected view of editing page.

#### Login Page

Nothing much to say here, merely typing in username and password to login. If successfully logged in, will be redirected to the editing page.

#### Register Page

Registering requires email(==username), password, first name and second name, then a registration verification code. This code is set on the server, user can only register when they have the correct registration code. In this test version, the code is 654321.

### Editing View

This view is only provided to host and registered users. You can see your current time zone on the top of the page. Each to-do or appointment item of the host is displayed on the list, with detailed start and end date, item description, and the user that created this item. Host can delete all items, while user can only delete the appointment item created by themselves. (Deleting a host created item will not affect the database, even though you can click them in this test version. Will automatically hid the button in the future)
Creating items is a breeze. Just type in the time and description. Time is based on your local time zone, it will be automatically converted to UTC time zone before uploading to the server, and when other people try to see this item, it will be converted and displayed on their local time zone. Upon clicking submit, the website will automatically key in your current user information and bound it with the to-do item, and the permission value on ACL will be set by the website too.

### For test only, will be different on v1.0:

host username: tim@a
host password: t
verification code for register: 654321
user username: c@a
user password: c

## Directory description

Editing page is called main view, guest page is called the second view, login and register are in /auth folder. For simplicity the authentication service is not move to the service folder, so the block can be transferred to other projects with ease.

## Yet to cover features

The project is initially a class final project. However, I do want to continue developing on this interesting project, and here are some of my future plans for it:

#### More options for adding to-do items

Current version cannot key in recurrent event. There is definitely need to do so, I really don't want to key in my sleeping time every single day.

#### The "Current" concept is not implemented

Past items should be hidden or just removed.

#### Multiple view for schedule

There should be another view called "Available time" that can calculate the time frame the user is available. If user (not host) wants to make appointment, they should be able to select several time periods they are free, and the website can provide options for the user to select.

#### Appointment accepting option for the host (Credit to my first user Julia)

The host should be able to receive notifications after a user try to make an appointment. He/she can confirm it, or cancel it. Only confirmed items are finally displayed in the schedule.

## Deployment details (To be added)

The project is still developing. Future deployment details will be displayed here.
