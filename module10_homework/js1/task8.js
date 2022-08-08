let users = new Map();
users.set("Jacob", "age 16");
users.set("Carl", "age 45");
users.set("Jessica", "age 22");
users.set("Reyn", "age 19");
users.set("Retty", "age 19");
users.set("Jack", "age 42");
users.set("Oliver", "age 17");

for (let user of users.keys()){
    console.log(user + " is " + users.get(user));
}
