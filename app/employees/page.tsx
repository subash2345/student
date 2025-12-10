async function getEmployees() {
  const res = await fetch("http://localhost:3001/employees", {
    cache: "no-store",
  });

  return res.json();
}

export default async function EmployeesPage() {
  const employees = await getEmployees();

  return (
    <div>
      <h1>Employee List</h1>

      {employees.map((emp: any) => (
        <p key={emp.id}>
          {emp.name} — {emp.email} — {emp.position}
        </p>
      ))}
    </div>
  );
}
