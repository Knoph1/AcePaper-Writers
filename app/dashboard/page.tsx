import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { FileText, MessageSquare, Clock, DollarSign, Plus, ArrowUpRight } from "lucide-react"
import Link from "next/link"

// This would come from your auth context
const userRole = "client" // or "writer" or "admin"

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h2 className="text-2xl font-bold tracking-tight">Welcome back, John</h2>
        {userRole === "client" && (
          <Button className="w-full sm:w-auto">
            <Plus className="mr-2 h-4 w-4" /> Create New Order
          </Button>
        )}
        {userRole === "writer" && (
          <Button className="w-full sm:w-auto">
            <Plus className="mr-2 h-4 w-4" /> Find New Orders
          </Button>
        )}
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              {userRole === "client" ? "Active Orders" : userRole === "writer" ? "Assigned Orders" : "Total Orders"}
            </CardTitle>
            <FileText className="h-4 w-4 text-orange-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-gray-500 mt-1">
              {userRole === "client" ? "3 awaiting review" : userRole === "writer" ? "2 due today" : "8 in progress"}
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              {userRole === "client" ? "Unread Messages" : "Unread Messages"}
            </CardTitle>
            <MessageSquare className="h-4 w-4 text-orange-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5</div>
            <p className="text-xs text-gray-500 mt-1">From 3 conversations</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              {userRole === "client"
                ? "Upcoming Deadlines"
                : userRole === "writer"
                  ? "Upcoming Deadlines"
                  : "Orders Due Today"}
            </CardTitle>
            <Clock className="h-4 w-4 text-orange-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-gray-500 mt-1">Next due in 2 days</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              {userRole === "client" ? "Total Spent" : userRole === "writer" ? "Total Earnings" : "Total Revenue"}
            </CardTitle>
            <DollarSign className="h-4 w-4 text-orange-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$1,234</div>
            <p className="text-xs text-gray-500 mt-1">
              {userRole === "client"
                ? "+$250 this month"
                : userRole === "writer"
                  ? "+$320 this month"
                  : "+$2,450 this month"}
            </p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="recent" className="space-y-4">
        <TabsList>
          <TabsTrigger value="recent">Recent Activity</TabsTrigger>
          <TabsTrigger value="orders">
            {userRole === "client" ? "My Orders" : userRole === "writer" ? "My Assignments" : "Recent Orders"}
          </TabsTrigger>
        </TabsList>
        <TabsContent value="recent" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>Your latest activities on the platform</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="border-l-4 border-orange-500 pl-4 py-2">
                <p className="font-medium">Order #1234 status updated</p>
                <p className="text-sm text-gray-500">Your order has been marked as in progress</p>
                <p className="text-xs text-gray-400 mt-1">2 hours ago</p>
              </div>
              <div className="border-l-4 border-teal-500 pl-4 py-2">
                <p className="font-medium">New message received</p>
                <p className="text-sm text-gray-500">Jane sent you a message about your order</p>
                <p className="text-xs text-gray-400 mt-1">Yesterday</p>
              </div>
              <div className="border-l-4 border-gray-300 pl-4 py-2">
                <p className="font-medium">Payment processed</p>
                <p className="text-sm text-gray-500">Your payment of $120 for order #1234 was successful</p>
                <p className="text-xs text-gray-400 mt-1">2 days ago</p>
              </div>
              <div className="border-l-4 border-gray-300 pl-4 py-2">
                <p className="font-medium">Order #1233 completed</p>
                <p className="text-sm text-gray-500">Your order has been completed and is ready for review</p>
                <p className="text-xs text-gray-400 mt-1">3 days ago</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="orders" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>
                {userRole === "client" ? "My Orders" : userRole === "writer" ? "My Assignments" : "Recent Orders"}
              </CardTitle>
              <CardDescription>
                {userRole === "client"
                  ? "Track the status of your orders"
                  : userRole === "writer"
                    ? "Your current writing assignments"
                    : "Recently placed orders on the platform"}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_auto_auto] gap-4 items-center p-4 border rounded-lg">
                  <div>
                    <h3 className="font-medium">Research Paper: Climate Change Impact</h3>
                    <p className="text-sm text-gray-500">10 pages, APA format</p>
                  </div>
                  <div className="text-sm">
                    <span className="inline-flex items-center rounded-full bg-yellow-100 px-2.5 py-0.5 text-xs font-medium text-yellow-800">
                      In Progress
                    </span>
                  </div>
                  <div className="text-sm text-gray-500">Due in 5 days</div>
                  <Button variant="ghost" size="sm" asChild>
                    <Link href="/dashboard/orders/1234">
                      View <ArrowUpRight className="ml-1 h-3 w-3" />
                    </Link>
                  </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_auto_auto] gap-4 items-center p-4 border rounded-lg">
                  <div>
                    <h3 className="font-medium">Business Proposal: Marketing Strategy</h3>
                    <p className="text-sm text-gray-500">5 pages, MLA format</p>
                  </div>
                  <div className="text-sm">
                    <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                      Completed
                    </span>
                  </div>
                  <div className="text-sm text-gray-500">Delivered 2 days ago</div>
                  <Button variant="ghost" size="sm" asChild>
                    <Link href="/dashboard/orders/1233">
                      View <ArrowUpRight className="ml-1 h-3 w-3" />
                    </Link>
                  </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_auto_auto] gap-4 items-center p-4 border rounded-lg">
                  <div>
                    <h3 className="font-medium">Essay: The Impact of Technology on Society</h3>
                    <p className="text-sm text-gray-500">3 pages, Chicago format</p>
                  </div>
                  <div className="text-sm">
                    <span className="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800">
                      Revision
                    </span>
                  </div>
                  <div className="text-sm text-gray-500">Due in 1 day</div>
                  <Button variant="ghost" size="sm" asChild>
                    <Link href="/dashboard/orders/1232">
                      View <ArrowUpRight className="ml-1 h-3 w-3" />
                    </Link>
                  </Button>
                </div>
              </div>

              <div className="mt-4 text-center">
                <Button variant="outline" asChild>
                  <Link href="/dashboard/orders">View All Orders</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
