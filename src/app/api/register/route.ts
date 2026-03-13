import { connectDB } from "@/lib/db";
import { User } from "@/models/User";
import bcrypt from "bcrypt";

export async function POST(req: Request) {
  const { name, email, password, role } = await req.json();

  await connectDB();

  const existingUser = await User.findOne({ email });

  if (existingUser) {
    return Response.json(
      { message: "User already exists" },
      { status: 400 }
    );
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await User.create({
    name,
    email,
    password: hashedPassword,
    role,
  });

  return Response.json(user);
}