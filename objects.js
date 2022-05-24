const cohort = {
  name: "April2022",
  id: 1234,
  students: ["Luke", "Stevie", "Alex", "Laura", "George", "Slava"],
};

function printObject(obj) {
  console.log(
    `${obj.id} - ${obj.name} - ${obj.students.length} students in this cohort`
  );
}
