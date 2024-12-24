import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { formResponses } = await req.json(); // Use req.json() to parse the request body

  try {
    // Convert formResponses to URL-encoded format
    const urlEncodedData = new URLSearchParams();
    urlEncodedData.append("event_id", formResponses.eventId);
    urlEncodedData.append("metadata", "false")
    urlEncodedData.append("fields[data]", JSON.stringify(formResponses.fields));

    const response = await fetch(
      `https://script.google.com/macros/s/${process.env.GOOGLE_APPS_SCRIPT_ID}/exec`,
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: urlEncodedData.toString(), // Send URL-encoded payload
      }
    );

    if (response.ok) {
      return NextResponse.json({ message: "Form saved successfully!" });
    } else {
      const errorText = await response.text();
      throw new Error(`Failed to save form metadata: ${errorText}`);
    }
  } catch (error) {
    return NextResponse.json({ error: (error as Error).message }, { status: 500 });
  }
}

export async function OPTIONS() {
  return NextResponse.json({}, { status: 200, headers: { Allow: "POST" } });
}