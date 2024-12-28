import { NextResponse } from "next/server";

export async function GET(req: Request) {
  // Extracting the URL parameters
  const url = new URL(req.url);
  const eventID = url.searchParams.get('id'); // Use 'id' as the query parameter

  if (!eventID) {
    return NextResponse.json({ error: "Event ID is required" }, { status: 400 });
  }

  try {
    const response = await fetch(
      `https://script.google.com/macros/s/${process.env.GOOGLE_APPS_SCRIPT_ID}/exec?event_id=${eventID}`,
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }
    );
    if (response.ok) {
      const data = await response.json(); // Assuming the response is JSON
      return NextResponse.json(data); // Return the actual data from the API
    } else {
      const errorText = await response.text();
      throw new Error(`Failed to retrieve form metadata: ${errorText}`);
    }
  } catch (error) {
    return NextResponse.json({ error: (error as Error).message }, { status: 500 });
  }
}

export async function OPTIONS() {
  return NextResponse.json({}, { status: 200, headers: { Allow: "GET" } });
}