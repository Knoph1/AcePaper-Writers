"use client"

import { useEffect, useRef } from "react"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

// This would come from your API
const messages = [
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
  {
    id: 3,
    sender: "client",
    senderName: "John Doe",
    content:
      "Sure, I'd like the paper to focus primarily on the impact of climate change on agriculture and food security. Please include current research, statistical data, and future projections.",
    timestamp: "May 10, 2025 12:30 PM",
  },
  {
    id: 4,
    sender: "writer",
    senderName: "Jane Smith",
    content:
      "Got it. I'll focus on agricultural impacts and food security. Do you have any specific regions you'd like me to emphasize, or should I take a global approach?",
    timestamp: "May 10, 2025 1:15 PM",
  },
  {
    id: 5,
    sender: "client",
    senderName: "John Doe",
    content:
      "A global approach would be best, but please include case studies from different regions to show how impacts vary geographically.",
    timestamp: "May 10, 2025 2:05 PM",
  },
  {
    id: 6,
    sender: "writer",
    senderName: "Jane Smith",
    content:
      "Perfect. I'll start working on it right away and will include global analysis with regional case studies. I'll have a draft ready for you to review in a few days.",
    timestamp: "May 10, 2025 2:30 PM",
  },
  {
    id: 7,
    sender: "system",
    content: "Jane has uploaded a file: Draft_v1.docx",
    timestamp: "May 12, 2025 9:15 AM",
  },
  {
    id: 8,
    sender: "writer",
    senderName: "Jane Smith",
    content:
      "I've completed the first draft of your paper. Please review it and let me know if you'd like any changes or have any feedback.",
    timestamp: "May 12, 2025 9:16 AM",
  },
]

export function OrderChat() {
  const chatEndRef = useRef<HTMLDivElement>(null)

  // Scroll to bottom of chat when messages change
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  // This would come from your auth context
  const currentUserRole = "client" // or "writer" or "admin"

  return (
    <div className="space-y-4 max-h-[400px] overflow-y-auto p-1">
      {messages.map((message) => {
        const isCurrentUser =
          (currentUserRole === "client" && message.sender === "client") ||
          (currentUserRole === "writer" && message.sender === "writer")

        if (message.sender === "system") {
          return (
            <div key={message.id} className="flex justify-center">
              <div className="bg-gray-100 text-gray-600 text-xs rounded-full px-3 py-1">
                {message.content} • {message.timestamp}
              </div>
            </div>
          )
        }

        return (
          <div key={message.id} className={`flex ${isCurrentUser ? "justify-end" : "justify-start"}`}>
            <div className={`flex gap-2 max-w-[80%] ${isCurrentUser ? "flex-row-reverse" : ""}`}>
              <Avatar className="h-8 w-8">
                <AvatarFallback className={isCurrentUser ? "bg-teal-900" : "bg-orange-500"}>
                  {message.senderName.charAt(0)}
                </AvatarFallback>
              </Avatar>
              <div>
                <div className={`flex items-center gap-2 ${isCurrentUser ? "justify-end" : ""}`}>
                  <span className="text-xs font-medium">{message.senderName}</span>
                  <span className="text-xs text-gray-500">{message.timestamp}</span>
                </div>
                <div
                  className={`mt-1 rounded-lg p-3 ${
                    isCurrentUser ? "bg-teal-900 text-white" : "bg-gray-100 text-gray-800"
                  }`}
                >
                  {message.content}
                </div>
              </div>
            </div>
          </div>
        )
      })}
      <div ref={chatEndRef} />
    </div>
  )
}
