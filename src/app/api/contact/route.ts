import ConnectDB from '@/app/lib/mongodb';
import Contact from '@/app/models/contact'
import { NextResponse } from 'next/server';
import mongoose from "mongoose"

export async function POST(req: Request) {
  try {
    // Receive the form data from the frontend
    const { firstname, surname, email_phone, password, birth_day, gender } = await req.json();

    // Log the data to check if phone is received
    console.log("Received data:", { firstname, surname, email_phone, password, birth_day, gender });

    // Check if phone is provided (it shouldn't be an empty string)

    // Connect to the database
    await ConnectDB();

    // Insert data into the database (this should work if phone is valid)
    const contact = await Contact.create({ firstname, surname, email_phone, password, birth_day, gender });

    console.log("Contact saved:", contact);

    return NextResponse.json({ msg: ["Message sent successfully"], success: true });
  } catch (error) {
    if (error instanceof mongoose.Error.ValidationError) {
      let errorList: string[] = [];
      for (let e in error.errors) {
        errorList.push(error.errors[e].message);
      }
      return NextResponse.json({ msg: errorList, success: false });
    } else {
      return NextResponse.json({ msg: "An unexpected error occurred.", success: false });
    }
  }
}
