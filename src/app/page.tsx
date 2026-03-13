import { connectDB } from "@/lib/db";

export default async function Home() {
  await connectDB();

  return (
    <div>
      <h1>B2B Suppliers Platform</h1>
    </div>
  );
}