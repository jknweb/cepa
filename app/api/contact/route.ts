import { promises as fs } from "fs";
import path from "path";
import { NextResponse } from "next/server";

const dataFilePath = path.join(process.cwd(), "data", "data.json");

async function readData() {
  const file = await fs.readFile(dataFilePath, "utf-8");
  return JSON.parse(file);
}

async function writeData(data: unknown) {
  await fs.writeFile(dataFilePath, JSON.stringify(data, null, 2), "utf-8");
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, subject, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, message: "Les champs requis ne sont pas remplis." },
        { status: 400 }
      );
    }

    const data = await readData();
    const newEntry = {
      id: Date.now(),
      name,
      email,
      phone: phone ?? "",
      subject: subject ?? "",
      message,
      createdAt: new Date().toISOString(),
    };

    data.contactMessages = [newEntry, ...data.contactMessages];
    await writeData(data);

    return NextResponse.json({ success: true, message: "Message enregistré avec succès." });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Une erreur est survenue lors de l'envoi." },
      { status: 500 }
    );
  }
}
