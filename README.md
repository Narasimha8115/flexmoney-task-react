# Getting Started with Create React App

Created a React app with command :- npx create-react-app flexmoney-react

For starting our React app we have run the command
### `npm start` 

The app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) in our browser.

APPROACH TO THE PROBLEM STATEMENT:

I have created a User interface (UI) using reactJs, library of javascript.

step-1:-
Index.html with id of 'root' in public folder defaulty comes with our reactJs app at the time of creation.(DOM)
The "id" will get from the index.js in src folder ,and it will render the App component using the BrowserRouter ,The BrowserRouter will have to import from 'react-router-dom'

step-2:-
ROUTES CREATED:-
'/' for admission page ,
'/paymentPage' for Batch selection page to payment redirection page,
'/pay' for payment 
 in App.js file 
 
 This is the basic setup for my approach.
 
 Approach Towards the problem statement :-
 "npm start" will open the '/' route which triggers the AdmissionForm component then it will open the Admission page .
 
 ![Screenshot (1958)](https://user-images.githubusercontent.com/114894576/207401803-03726771-1e30-426d-a543-989088fd54c5.png)
The page will be like this ,
I have used a useSate[admissionDetails,setAdmissionDetails] which has 
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        gender: "",
        age: "",
        batch: "",
        fee: "500"
I have given the onChange function to all the form control fields which the stores their respective state details
whenever the user clicks on the submit button ,The handleSubmit will responsible for validating a age using the state data if it satisifies ,The page will redirect to the "/pamentPage" which triggers the paymentPage component ,and the state has sent to that page.

![Screenshot (1961)](https://user-images.githubusercontent.com/114894576/207402966-5cc87594-af1e-4f24-8ee1-4eab371c347e.png)


This page will take the batch details and the form details will submitted successfully to the Post api which is created by using django restframe work that is ,
http://127.0.0.1:8000/create/

In the PaymentPage component the axios has imported ,That axios will responsible for data stored into database with POST method 

await axios.post("http://127.0.0.1:8000/create/", ({
            firstName: admissionDetails.firstName,
            lastName: admissionDetails.lastName,
            fullName: admissionDetails.firstName + " " + admissionDetails.lastName,
            email: admissionDetails.email,
            phone: admissionDetails.phone,
            gender: admissionDetails.gender,
            age: admissionDetails.age,
            session: admissionDetails.batch
        }), { headers: { 'Content-Type': 'application/json' } })
        
After successful submition the date and id is stored in local storage,successfull submition will be looks like 

![Screenshot (1962)](https://user-images.githubusercontent.com/114894576/207404597-29f056bd-4ba8-40b7-b6d3-d35788109674.png)

--->After the submition the user into the payment page there i have created a card which takes the cardNumber,cvv,expiry date to implement a basic mock payment functionality,
If the user gives all the required the payment will be sucessful ,It will pop up alert click on home to redirect to the home page which consists of Batch and proceed to payment.

(**Basically the user will fill the admission form once at the time of joining,After that the user will change the batch if they want and they will proceed payment ,It is process .
After successful submition the date and id is stored in local storage,successfull submition will be looks like 
But Using the loacl storage data The can be able to change till the next month using the 
useEffect like this ,

(**useEffect(() => {
        let current_date = new Date(Date.now())
        let created_at = new Date(localStorage.getItem('created_at'))
        if(current_date.getMonth() === created_at.getMonth() && current_date.getFullYear() === created_at.getFullYear()){
            setisDisabled(true)
        }
   }, [])
The isDisabled state will change according the year and month ,Once the user payed for a current month they will not be able to change the month till the next month.**)


The disbaled page will be looks like this ,

![Screenshot (1965)](https://user-images.githubusercontent.com/114894576/207406788-69e68bca-a5ba-4ee2-9522-1515b664038b.png)













