import { connectDB } from "@/lib/db";
import { Supplier } from "@/models/Supplier";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export async function POST(req: Request) {
  const session = await getServerSession(authOptions);

  console.log("SESSION:", session)

  if (!session) {
    return Response.json({ message: "Unauthorized" }, { status: 401 });
  }

  await connectDB();

  const body = await req.json();

  const supplier = await Supplier.create({
    ...body,
    userId: session.user.id,
  });

  return Response.json(supplier);
}

export async function GET() {
  await connectDB();

  const suppliers = await Supplier.find().sort({ createdAt: -1 });

  return Response.json(suppliers);
}