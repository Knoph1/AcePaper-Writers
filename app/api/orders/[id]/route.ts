import { NextResponse } from "next/server"

// Mock data - in a real app, this would come from your database
const orders = [
  {
    id: "1234",
    title: "Research Paper: Climate Change Impact",
    description:
      "A comprehensive research paper on the impact of climate change on global agriculture and food security. The paper should include current research, statistical data, and future projections.",
    status: "in-progress",
    dueDate: "May 20, 2025",
    price: 120.0,
    pages: 10,
    wordCount: 2500,
    format: "APA",
    subject: "Environmental Science",
    clientId: "1",
    writerId: "2",
    createdAt: "May 8, 2025",
    attachments: [
      { name: "Instructions.pdf", size: "1.2 MB" },
      { name: "References.docx", size: "450 KB" },
    ],
    submittedFiles: [{ name: "Draft_v1.docx", size: "1.8 MB", date: "May 12, 2025" }],
    messages: [
      {
        id: 1,
        sender: "client",
        senderName: "John Doe",
        content:
          "Hello, I've just created this order for a research paper on climate change. Please let me know if you need any additional information.",
        timestamp: "May 10, 2025 10:23 AM",
      },
      {
        id: 2,
        sender: "writer",
        senderName: "Jane Smith",
        content:
          "Hi John, thanks for your order. I've reviewed the requirements and have a few questions. Could you provide more specific details about which aspects of climate change you'd like me to focus on?",
        timestamp: "May 10, 2025 11:45 AM",
      },
    ],
  },
]

export async function GET(request: Request, { params }: { params: { id: string } }) {
  const id = params.id

  // Find the order by ID
  const order = orders.find((order) => order.id === id)

  if (!order) {
    return NextResponse.json({ error: "Order not found" }, { status: 404 })
  }

  // In a real app, you would:
  // 1. Authenticate the user
  // 2. Verify the user has access to this order

  return NextResponse.json(order)
}

export async function PATCH(request: Request, { params }: { params: { id: string } }) {
  try {
    const id = params.id
    const body = await request.json()

    // Find the order by ID
    const orderIndex = orders.findIndex((order) => order.id === id)

    if (orderIndex === -1) {
      return NextResponse.json({ error: "Order not found" }, { status: 404 })
    }

    // In a real app, you would:
    // 1. Authenticate the user
    // 2. Verify the user has permission to update this order
    // 3. Validate the update data
    // 4. Update the order in your database

    // For demo purposes, we're just returning a success message
    return NextResponse.json({ message: "Order updated successfully" })
  } catch (error) {
    console.error("Error updating order:", error)
    return NextResponse.json({ error: "Failed to update order" }, { status: 500 })
  }
}
