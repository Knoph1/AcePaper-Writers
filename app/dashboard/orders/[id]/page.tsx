import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Textarea } from "@/components/ui/textarea"
import { ArrowLeft, Clock, Download, FileText, MessageSquare, Send, Upload, User } from "lucide-react"
import Link from "next/link"
import { OrderChat } from "@/components/dashboard/order-chat"

// This would come from your auth context and API
const userRole = "client" // or "writer" or "admin"

export default function OrderDetailsPage({ params }: { params: { id: string } }) {
  const orderId = params.id

  // This would come from your API
  const order = {
    id: orderId,
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
    attachments: [
      { name: "Instructions.pdf", size: "1.2 MB" },
      { name: "References.docx", size: "450 KB" },
    ],
    submittedFiles: [{ name: "Draft_v1.docx", size: "1.8 MB", date: "May 12, 2025" }],
    writer:
      userRole === "client"
        ? {
            name: "Jane Smith",
            rating: 4.8,
          }
        : null,
    client:
      userRole === "writer"
        ? {
            name: "John Doe",
          }
        : null,
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" asChild>
            <Link href="/dashboard/orders">
              <ArrowLeft className="h-4 w-4" />
            </Link>
          </Button>
          <h2 className="text-2xl font-bold tracking-tight">Order #{orderId}</h2>
          <Badge
            variant={
              order.status === "completed"
                ? "success"
                : order.status === "in-progress"
                  ? "warning"
                  : order.status === "revision"
                    ? "info"
                    : "default"
            }
          >
            {order.status === "in-progress"
              ? "In Progress"
              : order.status === "completed"
                ? "Completed"
                : order.status === "revision"
                  ? "Revision"
                  : "Pending"}
          </Badge>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline">
            <Clock className="mr-2 h-4 w-4" />
            Due: {order.dueDate}
          </Button>
          {userRole === "client" && order.status === "completed" && <Button>Approve & Release Payment</Button>}
          {userRole === "writer" && order.status === "in-progress" && <Button>Submit Work</Button>}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>{order.title}</CardTitle>
              <CardDescription>
                {order.subject} • {order.pages} pages • {order.wordCount} words • {order.format} format
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-medium mb-2">Description</h3>
                  <p className="text-sm text-gray-600">{order.description}</p>
                </div>

                <Separator />

                <div>
                  <h3 className="text-sm font-medium mb-2">Client Attachments</h3>
                  <div className="space-y-2">
                    {order.attachments.map((file, index) => (
                      <div key={index} className="flex items-center justify-between p-2 border rounded-md">
                        <div className="flex items-center gap-2">
                          <FileText className="h-4 w-4 text-gray-500" />
                          <span className="text-sm">{file.name}</span>
                          <span className="text-xs text-gray-500">({file.size})</span>
                        </div>
                        <Button variant="ghost" size="sm">
                          <Download className="h-4 w-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>

                {order.submittedFiles.length > 0 && (
                  <>
                    <Separator />

                    <div>
                      <h3 className="text-sm font-medium mb-2">Submitted Work</h3>
                      <div className="space-y-2">
                        {order.submittedFiles.map((file, index) => (
                          <div key={index} className="flex items-center justify-between p-2 border rounded-md">
                            <div className="flex items-center gap-2">
                              <FileText className="h-4 w-4 text-gray-500" />
                              <span className="text-sm">{file.name}</span>
                              <span className="text-xs text-gray-500">({file.size})</span>
                              <span className="text-xs text-gray-500">Submitted on {file.date}</span>
                            </div>
                            <Button variant="ghost" size="sm">
                              <Download className="h-4 w-4" />
                            </Button>
                          </div>
                        ))}
                      </div>
                    </div>
                  </>
                )}
              </div>
            </CardContent>
          </Card>

          <Tabs defaultValue="chat">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="chat">
                <MessageSquare className="h-4 w-4 mr-2" />
                Chat
              </TabsTrigger>
              <TabsTrigger value="files">
                <FileText className="h-4 w-4 mr-2" />
                Files
              </TabsTrigger>
            </TabsList>
            <TabsContent value="chat">
              <Card>
                <CardHeader>
                  <CardTitle>Order Communication</CardTitle>
                  <CardDescription>
                    Chat with the {userRole === "client" ? "writer" : "client"} about this order
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <OrderChat />
                </CardContent>
                <CardFooter className="flex items-center gap-2">
                  <Textarea placeholder="Type your message..." className="min-h-10" />
                  <Button size="icon">
                    <Send className="h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
            <TabsContent value="files">
              <Card>
                <CardHeader>
                  <CardTitle>Files & Attachments</CardTitle>
                  <CardDescription>Upload and manage files related to this order</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-sm font-medium mb-2">Upload New File</h3>
                      <div className="border-2 border-dashed rounded-md p-6 text-center">
                        <Upload className="h-8 w-8 mx-auto text-gray-400" />
                        <p className="mt-2 text-sm text-gray-600">Drag and drop files here, or click to browse</p>
                        <p className="mt-1 text-xs text-gray-500">PDF, DOCX, TXT, RTF up to 10MB</p>
                        <Button variant="outline" size="sm" className="mt-4">
                          Browse Files
                        </Button>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-sm font-medium mb-2">All Files</h3>
                      <div className="space-y-2">
                        {[...order.attachments, ...order.submittedFiles].map((file, index) => (
                          <div key={index} className="flex items-center justify-between p-2 border rounded-md">
                            <div className="flex items-center gap-2">
                              <FileText className="h-4 w-4 text-gray-500" />
                              <span className="text-sm">{file.name}</span>
                              <span className="text-xs text-gray-500">({file.size})</span>
                              {"date" in file && <span className="text-xs text-gray-500">Uploaded on {file.date}</span>}
                            </div>
                            <Button variant="ghost" size="sm">
                              <Download className="h-4 w-4" />
                            </Button>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Order Details</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="text-gray-500">Order ID</div>
                  <div className="font-medium">#{order.id}</div>

                  <div className="text-gray-500">Status</div>
                  <div className="font-medium capitalize">{order.status.replace("-", " ")}</div>

                  <div className="text-gray-500">Due Date</div>
                  <div className="font-medium">{order.dueDate}</div>

                  <div className="text-gray-500">Price</div>
                  <div className="font-medium">${order.price.toFixed(2)}</div>

                  <div className="text-gray-500">Pages</div>
                  <div className="font-medium">{order.pages}</div>

                  <div className="text-gray-500">Word Count</div>
                  <div className="font-medium">{order.wordCount}</div>

                  <div className="text-gray-500">Format</div>
                  <div className="font-medium">{order.format}</div>

                  <div className="text-gray-500">Subject</div>
                  <div className="font-medium">{order.subject}</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {order.writer && (
            <Card>
              <CardHeader>
                <CardTitle>Writer Information</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-teal-900 flex items-center justify-center text-white">
                    <User className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-medium">{order.writer.name}</p>
                    <div className="flex items-center gap-1 text-sm">
                      <span className="text-yellow-500">★</span>
                      <span>{order.writer.rating}</span>
                      <span className="text-gray-500">rating</span>
                    </div>
                  </div>
                </div>
                <Button variant="outline" className="w-full mt-4">
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Contact Writer
                </Button>
              </CardContent>
            </Card>
          )}

          {order.client && (
            <Card>
              <CardHeader>
                <CardTitle>Client Information</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-teal-900 flex items-center justify-center text-white">
                    <User className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-medium">{order.client.name}</p>
                    <p className="text-sm text-gray-500">Client</p>
                  </div>
                </div>
                <Button variant="outline" className="w-full mt-4">
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Contact Client
                </Button>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  )
}
