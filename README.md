# Project-Management-Form
A form which should store data in the database. Project Management Form that will store data in PROJECT-TABLE relation of PROJECT-DB database. Input Fields: {PROJECT-id, Project-Name, Assign, Assign-Date, Deadline,} Primary key ProjectId.

# DESCRIPTION
The HTML code for a Project Management form that uses the JPDB (JSON Power Database) library. The form includes input fields for the Project-ID, Project-Name, Assigned-To, Assignment-Date, Deadline. There are also buttons for saving the form data, changing the data, and resetting the form. The form is styled using Bootstrap and includes JavaScript files for interacting with the JPDB.

The JavaScript file contains functions for a Project form management system. The functions are: saveRecNo2LS(jsonObj): This function parses a JSON object and saves the 'rec_no' value to the local storage. getRollNoAsJsonObj(): This function gets the value of the roll number input field and returns a JSON object with the 'roll_no' key and the input value. fillData(jsonObj): This function saves the record number to local storage and fills in the form fields with the data from the JSON object. resetForm(): This function resets all form fields to empty, enables the roll number input field, and disables the save, change, and reset buttons. validateData(): This function validates the form data, returns a JSON string with the validated data, and displays an alert if any field is missing. getStudent(): This function sends a GET request to retrieve the student record from the database using the roll number, fills in the form fields with the record data, and enables the save, change, and reset buttons if the record exists. saveData(): This function validates the form data, sends a PUT request to update the student record in the database, resets the form, and focuses on the Project id input field. changeData(): This function validates the form data, sends an UPDATE request to update the project record in the database using the record number saved in local storage, resets the form, and focuses on the project id input field.

# BENEFITS OF USING JPDB
1. JsonPowerDB (JPDB) has several unique features that set it apart from other databases:

2. Proprietary algorithm for High Performance CRUD operations: JPDB is designed with a proprietary algorithm for High Performance CRUD (Create, Read, Update, Delete) operations. This algorithm makes JPDB multiple times faster than popular DBMS.

3. Serverless support for faster development: JPDB has built-in serverless support that enables UI developers to develop complete dynamic applications. This feature significantly reduces the development time and 
 effort required to create applications.

4. Embedded caching for lightning-fast performance: JPDB has built-in web/application server and embedded caching, which makes the performance lightning fast. This feature enhances the database's performance and responsiveness, resulting in a better user experience.

5. Server-side Native NoSQL: JPDB is a server-side Native NoSQL database, which provides the best query performance. This feature is useful for applications that require real-time data processing and analysis.

6. Multi-mode DBMS: JPDB supports multiple modes, including Document DB, Key-Value DB, and RDBMS. This feature allows developers to use the database for different types of applications, depending on their specific requirements.

7. Schema-free: JPDB is schema-free, which means it is easy to develop and maintain. This feature eliminates the need for complex data modeling and database schema design, reducing the development time and effort.

8. Pluggable API Framework: JPDB is enriched by a pluggable API framework that enables developers to develop a pluggable API and plugin into any of our cloud JPDB instances. This feature makes JPDB highly extensible and customizable.

9. Standardisation of API development framework: JPDB has a standardized API development framework that makes the development process easy, more readable, and less error-prone. This feature enhances the database's usability and reduces the likelihood of errors and bugs.

10. Multiple security layers: JPDB has multiple security layers to ensure data security and protection. This feature provides developers and users with peace of mind knowing that their data is safe and secure.

11. Nimble, Simple to use, In-Memory, Real-time DBMS: JPDB is nimble, simple to use, and in-memory, making it a real-time DBMS that is ideal for use in applications that require fast data processing and analysis. This feature provides developers with the flexibility and speed they need to develop high-performance applications.

# Scope of functionalities :
Examples of use : can be scaled to be used for various different sectors which collects information of an Individual/Item.

Project status : Completed Successfully

Sources: Introduction to JsonPowerDB V2.0

Other information Sources : https://login2explore.com/jpdb/docs.html


