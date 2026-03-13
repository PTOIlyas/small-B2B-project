async function getSuppliers() {
  const res = await fetch("http://localhost:3000/api/suppliers", {
    cache: "no-store",
  });

  return res.json();
}

export default async function SuppliersPage() {
  const suppliers = await getSuppliers();

  return (
    <div>
      <h1>Suppliers</h1>

      {suppliers.map((s: any) => (
        <div key={s._id}>
          <h3>{s.companyName}</h3>
          <p>{s.category}</p>
          <p>{s.location}</p>
        </div>
      ))}
    </div>
  );
}