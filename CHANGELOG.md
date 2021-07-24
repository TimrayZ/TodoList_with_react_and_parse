# Changelog



## master (0.2.0)

Original release of a easy todo list. 


## master (0.3.0)

+ Support for two view: editor view, include all the detail for each task, and can delete or create task; guest view, can only see when the host is occupied. Both version are written based on a local time adapter so that time displayed will be in accordance with the computer time
+ Support for login and register.
+ -- Consider removing the register in the future
+ -- Link to the user object is not currently updated / utilized.

## master (0.3.0)

+ Editor view changed: can display the creator of each todo item. Both editor view and guest view now displayed the local time difference to UTC.
+ style css updated, the website looks better
+ update some guiding words on the website
+ ACL added: a new tag that enables protection on todo list item. Normal user can only modify todo list item (or more precisely called, appointment) created by themselves, host can modify all todo items.
+ Register is only allowed when correct verification code is typed in.
+ The user pointer is fully utilized on the todo object so that each item created will be automatically assigned with a value that mark its creator.
