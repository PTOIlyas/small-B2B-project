import { connectDB } from "@/lib/db";
import { Supplier } from "@/models/Supplier";

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  await connectDB();

  const supplier = await Supplier.findById(params.id);

  return Response.json(supplier);
}