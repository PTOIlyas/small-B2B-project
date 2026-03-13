async function getSupplier(id: string) {
  const res = await fetch(
    `http://localhost:3000/api/suppliers/${id}`,
    { cache: "no-store" }
  );

  return res.json();
}

export default async function SupplierPage({ params }: any) {
  const supplier = await getSupplier(params.id);

  return (
    <div>
      <h1>{supplier.companyName}</h1>
      <p>{supplier.description}</p>
      <p>{supplier.category}</p>
      <p>{supplier.location}</p>
      <p>{supplier.phone}</p>
      <p>{supplier.email}</p>
    </div>
  );
}