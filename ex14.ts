let guestLeast: string[] = ["Ali", "Dua", "Saba"];
for (let i = 0; i < guestLeast.length; i++) {
  console.log(
    `Dear friend, ${guestLeast} ,\n\n it is my pleasure to invite  you for dinner.\n\nThank You`
  );
}

let absent_guest: string = "Dua";
let new_guest: string = "Shuraim";
guestLeast[2] = "new_Guest";
for (let i = 1; i < guestLeast.length; i++) {
  console.log(
    `Dear friend, ${new_Guest} ,\n\n it is my pleasure to invite  you for dinner.\n\nThank You`
  );
}
