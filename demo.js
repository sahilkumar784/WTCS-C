// const user={
//     firstname: "sahil",
//     lastname: "kumar",
//     address:{city :"Saharanpur",
//         country:"India",
//     }};
//     let a=user.firstname
//     console.log(a)
//     let b=user.address.city
//     console.log(b)
//     let{firstname:fn,lastname: ln,address:{city,country}}=user
//     console.log(fn,ln)
//     console.log(city)

    // let number=[1,2,3,4,5]
    // let[a,b,c,,e]=number
    // console.log(a)
    // console.log(e)

    // let arr="color"
    // let[a,b,c,,e]=arr
    // console.log(c)

    // const student={
    //     name:"Sahil",
    //     age: 20,
    //     city:"Saharanpur"
    // };
    // function showStudent({name,age,city}){
    //     console.log("Name:",name);
    //     console.log("Age:",age);
    //     console.log("City:",city);
    // }
    // showStudent(student)



//     const student={
//         id:10,
//         name:"Sahil",
//         age:20,
//         course:"Btech",
//         branch:"Cs",
//         city:"Saharanpur",
    
//     marks:[30,40,60,70],
//     studentAdmission:"Admitted",
// };
// function displayData(id, name, age, course, branch, city, marks) {
//     let sum = 0;

//     for (let i = 0; i < marks.length; i++) {
//         sum += marks[i];
//     }

//     let average = sum / marks.length;

//     console.log("Student Name:", name);
//     console.log("Average Marks:", average);
// }

// displayData(
//     student.id,
//     student.name,
//     student.age,
//     student.course,
//     student.branch,
//     student.city,
//     student.marks
// );

// function displayData(id,name,age,course,branch,city) {
//     let i=0;
//     let sum=0;
//     for(i=0;i<4;i++){
//         sum=+marks;
//         console.log("student"+(i+1)+" "+name[i])
//     }
//     sum=sum/4;
// // console.log("Student name:",student.name);
// console.log("average marks:"+sum)
// if(average<50){
//     console.log("Regular Admission")
// }
// else{
//     console.log("Eligible for merit scholarship")
// }

// }
// displayData(student)


// to find the square  of given array of even numbers by using anonmyous:

// let array=[1,2,3,4,5,6,7,8];
// let squareEven=function(array)
// let i=0;
// let sum=0;
// for(int i=0;i<)




    // oldarray=[1,2,3,4,5]
    // newarray=["Ram","Shyam",...oldarray,6,7,8,9]
    // console.log(newarray)


    // function add(a,b,c){
    //     return a+b+c
    // }
    // numbers=[1,2,3]
    // console.log(add(...numbers))


    // const csStudents=["Akash","Ashish","Naresh"];
    // const itStudents=["Rahul","Raman","Shyam"];
    // const allStudents=[...csStudents,...itStudents];
    // console.log(allStudents)


    // const sum=(...num)=>{
    //     total=0;
    //     num.forEach((n)=>{
    //         total=total+n
    //     })
    //     console.log(total)
    // }
    // sum(1,2,3,4,5,6,7,8,9)



    // function showDetails(name,...skills){
    //     console.log(name);
    //     console.log(skills);
    // }
    // showDetails("Akash","JS","Dart","Java");



//     const student = {
//     name: "Sahil",
//     age: 20,
//     course: "BTech",
//     city: "Saharanpur"
// };
// const copyStudent = { ...student };
// console.log(copyStudent);

// const updateStudent={
//     ...student;
// age: 20,
//     course: "BTech",

// };
// console.log(updatestudent),



// function greet(name="Goel"){
//     console.log("Hello " + name);
// }
// greet("Akash"){

// }

// let marks = [80]; 
// let [math = 0, science = 0] = marks; 
// console.log(math); 
// console.log(science);


// let data = []; 
// let [a = 10, b = 20] = data; 
// console.log(a); 
// console.log(b);

// let product = {
// name: "Laptop"
// };
// let { name, price = 0 } = product;
// console.log(name);
// console.log(price);

// console.log("Starting my calculation")
// function calculation(){
//     for(let a=0;a<=1e10;a++){

//     }
// }
// calculation()
// console.log("Ending my calculation")
// console.log("Hello1")
// console.log("Hello1")
// console.log("Hello1")

// console.log("Hello1")
// setTimeout(function(){
//     console.log("Hello2")
// }, 5000);

// console.log("Hello3")

// function greet(name,callback1,callback2){
//     console.log("Hello",name)
//     // callback1()
//     // callback2()
// }
// function sayBye(){
//     console.log("Bye Bye")
// }
// function sayThanks(){
//     console.log("Thanks")
// }
// greet("Shyam",sayBye,sayThanks)



// function checklogin(callback){
//     setTimeout(function(){
//         console.log("Card is verified");
//         callback()
//     },3000)
// }
// function orderPlaced(callback){
//         setTimeout(()=>{
//             console.log("Order is placed");
//             callback()
//         },3000)
// }
// checklogin(()=>{
//                 orderPlaced(()=>{
//                     console.log("All Task Done")
//                 })
//     })




    // const promiseOne=new Promise(function(resolve,reject){
    //     setTimeout(() => {
    //         console.log("Doing Asynchronous Tasks")
    //         resolve()
    //     }, 2000);
    // })
    // promiseOne.then(function(){
    //     console.log("Promise Executed")
    // })



// const promiseOne=new Promise(function(resolve,reject){
//         setTimeout(() => {
//             console.log("Doing Asynchronous Tasks")
//             resolve()
//         }, 2000);
//     })
//     .then(function(){
//         console.log("Promise Executed")
//     })



    // const promiseOne=new Promise(function(resolve,reject){
    //     setTimeout(() => {
    //         console.log("Doing Asynchronous operations")
    //         resolve({username:"Ramesh",id:111})
    //     }, 3000);
    // })
    // const u2=promiseOne.then(function(u1){
    //     console.log("u1")
    //     return u1.username
    //     // console.log(u1.username)
    //     // console.log(u1.id)
    // }).then((username)=>{
    //     console.log(username)
    // })
    // // console.log(u2)





// const promiseOne=new Promise(function(resolve,reject){
//     let error=true
//         if(!error){
//             resolve(username:"Ramesh",id:123})
//         }
//         else{
//             reject("Something went wrong")
//         }
//     })
//         setTimeout(() => {
//             console.log("Doing Asynchronous operations")
//             resolve({username:"Ramesh",id:111})
//         }, 3000);
//     })
//     promiseOne.then(function(u1){
//         console.log("u1")
//         return u1.username
//         })
//         promiseOne
//         .then(function(u1){
//         console.log(u1)
//         return u1.username
//     }).catch(function(error)){
//         console.log("error")
//     }).finally



    const promiseone=new Promise(function(resolve,reject){
        setTimeout(() => {
            let error=true
            if(!error){
                resolve({username:"Ramesh",pass:123})
            }else{
                reject("Something went wrong")
            }
        },3000);
        })
        async function consumepromiseOne(){
            try{
            const response=await promiseOne
            console.log(response)
        }
        catch(error){
            console.log(error)
        }
    }
    consumerpromiseOne()
