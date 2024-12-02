import ConnectDB from '@/app/lib/mongodb';
import Contact from '@/app/models/contact';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    // Receive the criteria from the request body (e.g., email_phone or id)
    const { email_phone, password } = await req.json();

    // Check if at least one search criterion is provided
    if (!email_phone && !password) {
      return NextResponse.json({ msg: "At least one search criterion is required.", success: false });
    }

    // Connect to the database
    await ConnectDB();

    let contact;
    if (email_phone) {
      // If email_phone is provided, search by that field
      contact = await Contact.findOne({ email_phone, password });
    }

    if (!contact) {
      return NextResponse.json({ msg: "Contact not found.", success: false });
    }

    console.log("Fetched contact:", contact);

    // Return the contact in the response
    return NextResponse.json({ success: true, data: contact });
  } catch (error) {
    console.error("Error fetching contact:", error);
    return NextResponse.json({ msg: "An error occurred while fetching the contact.", success: false });
  }
}
