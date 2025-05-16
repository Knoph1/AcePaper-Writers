import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Plus, Search, Filter, ArrowUpRight } from "lucide-react"
import Link from "next/link"

// This would come from your auth context
const userRole = "client" // or "writer" or "admin"

export default function OrdersPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h2 className="text-2xl font-bold tracking-tight">
          {userRole === "client" ? "My Orders" : userRole === "writer" ? "Available Orders" : "All Orders"}
        </h2>
        {userRole === "client" && (
          <Button className="w-full sm:w-auto">
            <Plus className="mr-2 h-4 w-4" /> Create New Order
          </Button>
        )}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>
            {userRole === "client"
              ? "Order History"
              : userRole === "writer"
                ? "Browse Available Orders"
                : "Order Management"}
          </CardTitle>
          <CardDescription>
            {userRole === "client"
              ? "View and manage all your orders"
              : userRole === "writer"
                ? "Find and apply for writing assignments"
                : "Manage and monitor all orders on the platform"}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
              <Input type="search" placeholder="Search orders..." className="pl-9" />
            </div>
            <div className="flex gap-4">
              <Select defaultValue="all">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Statuses</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="in-progress">In Progress</SelectItem>
                  <SelectItem value="completed">Completed</SelectItem>
                  <SelectItem value="revision">Revision</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline" size="icon">
                <Filter className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Order ID</TableHead>
                  <TableHead>Title</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Due Date</TableHead>
                  <TableHead>Price</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">#1234</TableCell>
                  <TableCell>Research Paper: Climate Change Impact</TableCell>
                  <TableCell>
                    <span className="inline-flex items-center rounded-full bg-yellow-100 px-2.5 py-0.5 text-xs font-medium text-yellow-800">
                      In Progress
                    </span>
                  </TableCell>
                  <TableCell>May 20, 2025</TableCell>
                  <TableCell>$120.00</TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="sm" asChild>
                      <Link href="/dashboard/orders/1234">
                        View <ArrowUpRight className="ml-1 h-3 w-3" />
                      </Link>
                    </Button>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">#1233</TableCell>
                  <TableCell>Business Proposal: Marketing Strategy</TableCell>
                  <TableCell>
                    <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                      Completed
                    </span>
                  </TableCell>
                  <TableCell>May 14, 2025</TableCell>
                  <TableCell>$85.00</TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="sm" asChild>
                      <Link href="/dashboard/orders/1233">
                        View <ArrowUpRight className="ml-1 h-3 w-3" />
                      </Link>
                    </Button>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">#1232</TableCell>
                  <TableCell>Essay: The Impact of Technology on Society</TableCell>
                  <TableCell>
                    <span className="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800">
                      Revision
                    </span>
                  </TableCell>
                  <TableCell>May 17, 2025</TableCell>
                  <TableCell>$45.00</TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="sm" asChild>
                      <Link href="/dashboard/orders/1232">
                        View <ArrowUpRight className="ml-1 h-3 w-3" />
                      </Link>
                    </Button>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">#1231</TableCell>
                  <TableCell>Literature Review: Modern Poetry</TableCell>
                  <TableCell>
                    <span className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800">
                      Pending
                    </span>
                  </TableCell>
                  <TableCell>May 25, 2025</TableCell>
                  <TableCell>$75.00</TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="sm" asChild>
                      <Link href="/dashboard/orders/1231">
                        View <ArrowUpRight className="ml-1 h-3 w-3" />
                      </Link>
                    </Button>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">#1230</TableCell>
                  <TableCell>Case Study: Healthcare Management</TableCell>
                  <TableCell>
                    <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                      Completed
                    </span>
                  </TableCell>
                  <TableCell>May 10, 2025</TableCell>
                  <TableCell>$150.00</TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="sm" asChild>
                      <Link href="/dashboard/orders/1230">
                        View <ArrowUpRight className="ml-1 h-3 w-3" />
                      </Link>
                    </Button>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>

          <div className="flex items-center justify-between mt-4">
            <div className="text-sm text-gray-500">Showing 5 of 12 orders</div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" disabled>
                Previous
              </Button>
              <Button variant="outline" size="sm">
                Next
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
