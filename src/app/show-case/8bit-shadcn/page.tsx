"use client"

import Link from "next/link"

import { GithubIcon, Plus } from "lucide-react"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/8bit/accordion"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/8bit/alert"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/8bit/avatar"
import { Badge } from "@/components/ui/8bit/badge"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/8bit/breadcrumb"
import { Button } from "@/components/ui/8bit/button"
// import { AppSidebar } from "@/components/ui/8bit/blocks/sidebar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/8bit/card"
import { Checkbox } from "@/components/ui/8bit/checkbox"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/8bit/dialog"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/8bit/dropdown-menu"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/8bit/hover-card"
import { Input } from "@/components/ui/8bit/input"
import { Label } from "@/components/ui/8bit/label"
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/8bit/pagination"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/8bit/popover"
import { Progress } from "@/components/ui/8bit/progress"
import { RadioGroup, RadioGroupItem } from "@/components/ui/8bit/radio-group"
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/8bit/resizable"
import { ScrollArea } from "@/components/ui/8bit/scroll-area"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/8bit/select"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/8bit/sheet"
import { Skeleton } from "@/components/ui/8bit/skeleton"
import { Switch } from "@/components/ui/8bit/switch"
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/8bit/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/8bit/tabs"
import { Textarea } from "@/components/ui/8bit/textarea"
import { Toggle } from "@/components/ui/8bit/toggle"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/8bit/tooltip"
import { Separator } from "@/components/ui/separator"

import { BitNavbar } from "@/components/layout/8bit-navbar"

export default function EightBitShadcnShowcase() {
  return (
    <div className="flex min-h-screen flex-col">
      <BitNavbar />
      <div className="mb-20 space-y-12 p-6">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">8-Bit Shadcn/UI Components</h1>
          <p className="text-muted-foreground text-lg">
            A showcase of all the 8-bit themed Shadcn/UI components available in this project.
          </p>
          <div className="flex flex-row gap-4">
            <Button>
              <Link href="/show-case/native-shadcn">Switch to Original Components</Link>
            </Button>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Input Components */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold tracking-tight">Input Components</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Button */}
            <Card>
              <CardHeader>
                <CardTitle>Button</CardTitle>
                <CardDescription>8-bit styled interactive button component.</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-4">
                <Button>Default</Button>
                <Button variant="destructive">Destructive</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="link">Link</Button>
                <Button size="sm">Small</Button>
                <Button size="lg">Large</Button>
                <Button disabled>Disabled</Button>
                <Button size="icon">
                  <Plus className="h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            {/* Input */}
            <Card>
              <CardHeader>
                <CardTitle>Input</CardTitle>
                <CardDescription>8-bit styled text field for user input.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Input placeholder="Default input" />
                <Input placeholder="Disabled input" disabled />
                <div className="flex items-center gap-4">
                  <Input placeholder="With button" />
                  <Button>Submit</Button>
                </div>
              </CardContent>
            </Card>

            {/* Checkbox */}
            <Card>
              <CardHeader>
                <CardTitle>Checkbox</CardTitle>
                <CardDescription>8-bit styled boolean selection control.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Checkbox id="terms1" />
                  <Label htmlFor="terms1">Accept terms</Label>
                </div>
                <div className="flex items-center space-x-4">
                  <Checkbox id="terms2" checked />
                  <Label htmlFor="terms2">Checked state</Label>
                </div>
                <div className="flex items-center space-x-4">
                  <Checkbox id="terms3" disabled />
                  <Label htmlFor="terms3" className="text-muted-foreground">
                    Disabled
                  </Label>
                </div>
              </CardContent>
            </Card>

            {/* Radio Group */}
            <Card>
              <CardHeader>
                <CardTitle>Radio Group</CardTitle>
                <CardDescription>8-bit styled single option selection control.</CardDescription>
              </CardHeader>
              <CardContent>
                <RadioGroup defaultValue="option-one">
                  <div className="mb-2 flex items-center space-x-4">
                    <RadioGroupItem value="option-one" id="option-one" />
                    <Label htmlFor="option-one">Option One</Label>
                  </div>
                  <div className="mb-2 flex items-center space-x-4">
                    <RadioGroupItem value="option-two" id="option-two" />
                    <Label htmlFor="option-two">Option Two</Label>
                  </div>
                  <div className="flex items-center space-x-4">
                    <RadioGroupItem value="option-three" id="option-three" disabled />
                    <Label htmlFor="option-three" className="text-muted-foreground">
                      Disabled
                    </Label>
                  </div>
                </RadioGroup>
              </CardContent>
            </Card>

            {/* Select */}
            <Card>
              <CardHeader>
                <CardTitle>Select</CardTitle>
                <CardDescription>8-bit styled dropdown selection component.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select an option" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="option1">Option 1</SelectItem>
                    <SelectItem value="option2">Option 2</SelectItem>
                    <SelectItem value="option3">Option 3</SelectItem>
                  </SelectContent>
                </Select>

                <Select disabled>
                  <SelectTrigger>
                    <SelectValue placeholder="Disabled" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="option1">Option 1</SelectItem>
                  </SelectContent>
                </Select>
              </CardContent>
            </Card>

            {/* Textarea */}
            <Card>
              <CardHeader>
                <CardTitle>Textarea</CardTitle>
                <CardDescription>8-bit styled multi-line text input control.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Textarea />
              </CardContent>
            </Card>

            {/* Switch */}
            <Card>
              <CardHeader>
                <CardTitle>Switch</CardTitle>
                <CardDescription>8-bit styled toggle between on/off states.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Switch id="airplane-mode" />
                  <Label htmlFor="airplane-mode">Airplane Mode</Label>
                </div>
                <div className="flex items-center space-x-4">
                  <Switch id="checked" defaultChecked />
                  <Label htmlFor="checked">Checked</Label>
                </div>
                <div className="flex items-center space-x-4">
                  <Switch id="disabled" disabled />
                  <Label htmlFor="disabled" className="text-muted-foreground">
                    Disabled
                  </Label>
                </div>
              </CardContent>
            </Card>

            {/* Toggle */}
            <Card className="col-span-1 md:col-span-2">
              <CardHeader>
                <CardTitle>Toggle</CardTitle>
                <CardDescription>8-bit styled two-state button control.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex gap-4">
                  <Toggle>Default</Toggle>
                  <Toggle variant="outline">Outline</Toggle>
                  <Toggle defaultPressed>Pressed</Toggle>
                </div>
                <div className="flex gap-4">
                  <Toggle size="sm">Small</Toggle>
                  <Toggle size="lg">Large</Toggle>
                  <Toggle disabled>Disabled</Toggle>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator className="my-8" />

        {/* Navigation Components */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold tracking-tight">Navigation Components</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {/* Breadcrumb */}
            <Card>
              <CardHeader>
                <CardTitle>Breadcrumb</CardTitle>
                <CardDescription>8-bit styled navigation hierarchy display.</CardDescription>
              </CardHeader>
              <CardContent>
                <Breadcrumb>
                  <BreadcrumbList>
                    <BreadcrumbItem>
                      <BreadcrumbLink href="/">Home</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                      <BreadcrumbLink href="/components">Components</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                      <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
                    </BreadcrumbItem>
                  </BreadcrumbList>
                </Breadcrumb>
              </CardContent>
            </Card>

            {/* Pagination */}
            <Card>
              <CardHeader>
                <CardTitle>Pagination</CardTitle>
                <CardDescription>8-bit styled navigation for pages of content.</CardDescription>
              </CardHeader>
              <CardContent>
                <Pagination>
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious href="#" />
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#">1</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#" isActive>
                        2
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#">3</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationEllipsis />
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationNext href="#" />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              </CardContent>
            </Card>

            {/* Tabs */}
            <Card className="col-span-1 md:col-span-2">
              <CardHeader>
                <CardTitle>Tabs</CardTitle>
                <CardDescription>8-bit styled way to switch between different content views.</CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="account">
                  <TabsList>
                    <TabsTrigger value="account">Account</TabsTrigger>
                    <TabsTrigger value="password">Password</TabsTrigger>
                    <TabsTrigger value="settings">Settings</TabsTrigger>
                    <TabsTrigger value="disabled" disabled>
                      Disabled
                    </TabsTrigger>
                  </TabsList>
                  <TabsContent value="account" className="p-4">
                    Account settings and preferences.
                  </TabsContent>
                  <TabsContent value="password" className="p-4">
                    Change your password here.
                  </TabsContent>
                  <TabsContent value="settings" className="p-4">
                    Other settings and options.
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>

            {/* Sidebar Block */}
            {/* <Card>
            <CardHeader>
              <CardTitle>Sidebar Block</CardTitle>
              <CardDescription>8-bit styled pre-built sidebar navigation.</CardDescription>
            </CardHeader>
            <CardContent className="h-80 overflow-hidden relative border-4 border-foreground dark:border-ring">
              <AppSidebar />
            </CardContent>
          </Card> */}
          </div>
        </section>

        <Separator className="my-8" />

        {/* Feedback Components */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold tracking-tight">Feedback Components</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {/* Alert */}
            <Card>
              <CardHeader>
                <CardTitle>Alert</CardTitle>
                <CardDescription>8-bit styled important messages.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Alert>
                  <AlertTitle>Information</AlertTitle>
                  <AlertDescription>This is a standard informational alert.</AlertDescription>
                </Alert>

                <Alert variant="destructive">
                  <AlertTitle>Error</AlertTitle>
                  <AlertDescription>This is a destructive alert for errors.</AlertDescription>
                </Alert>
              </CardContent>
            </Card>

            {/* Skeleton */}
            <Card>
              <CardHeader>
                <CardTitle>Skeleton</CardTitle>
                <CardDescription>8-bit styled loading state placeholders.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Skeleton className="h-12 w-12 rounded-lg" />
                  <div className="space-y-4">
                    <Skeleton className="h-4 w-[250px]" />
                    <Skeleton className="h-4 w-[200px]" />
                  </div>
                </div>
                <Skeleton className="h-[125px] w-full" />
              </CardContent>
            </Card>

            {/* Progress */}
            <Card className="col-span-1 md:col-span-2">
              <CardHeader>
                <CardTitle>Progress</CardTitle>
                <CardDescription>8-bit styled progress indicator.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  <Label>Default Progress (25%)</Label>
                  <Progress value={25} />
                </div>
                <div className="space-y-4">
                  <Label>Retro Progress (65%)</Label>
                  <Progress variant="retro" value={65} />
                </div>
                <div className="space-y-4">
                  <Label>Complete (100%)</Label>
                  <Progress value={100} />
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator className="my-8" />

        {/* Layout Components */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold tracking-tight">Layout Components</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {/* Accordion */}
            <Card>
              <CardHeader>
                <CardTitle>Accordion</CardTitle>
                <CardDescription>8-bit styled collapsible content sections.</CardDescription>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Is it accessible?</AccordionTrigger>
                    <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>Is it styled?</AccordionTrigger>
                    <AccordionContent>
                      Yes. It comes with an 8-bit style that matches other components.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>Is it animated?</AccordionTrigger>
                    <AccordionContent>
                      Yes. It's animated by default, but you can disable it if you prefer.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>

            {/* Scroll Area */}
            <Card>
              <CardHeader>
                <CardTitle>Scroll Area</CardTitle>
                <CardDescription>8-bit styled custom scrollbar component.</CardDescription>
              </CardHeader>
              <CardContent>
                <ScrollArea className="border-foreground dark:border-ring h-[200px] w-full rounded border-4 p-4">
                  <div className="p-4">
                    <h4 className="mb-4 text-sm leading-none font-medium">Tags</h4>
                    {Array.from({ length: 20 }).map((_, i) => (
                      <div key={i} className="mt-2 text-sm">
                        Tag {i + 1}
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>

            {/* Table */}
            <Card className="col-span-1 md:col-span-2">
              <CardHeader>
                <CardTitle>Table</CardTitle>
                <CardDescription>8-bit styled data table component.</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableCaption>A list of recent invoices</TableCaption>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Invoice</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Method</TableHead>
                      <TableHead className="text-right">Amount</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">INV001</TableCell>
                      <TableCell>Paid</TableCell>
                      <TableCell>Credit Card</TableCell>
                      <TableCell className="text-right">$250.00</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">INV002</TableCell>
                      <TableCell>Pending</TableCell>
                      <TableCell>PayPal</TableCell>
                      <TableCell className="text-right">$150.00</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

            {/* Resizable */}
            <Card className="col-span-1 md:col-span-2">
              <CardHeader>
                <CardTitle>Resizable</CardTitle>
                <CardDescription>8-bit styled resizable panel component.</CardDescription>
              </CardHeader>
              <CardContent>
                <ResizablePanelGroup
                  direction="horizontal"
                  className="border-foreground dark:border-ring h-[200px] border-4"
                >
                  <ResizablePanel defaultSize={50}>
                    <div className="flex h-full items-center justify-center p-4">
                      <span className="font-semibold">Panel One</span>
                    </div>
                  </ResizablePanel>
                  <ResizableHandle withHandle />
                  <ResizablePanel defaultSize={50}>
                    <div className="flex h-full items-center justify-center p-4">
                      <span className="font-semibold">Panel Two</span>
                    </div>
                  </ResizablePanel>
                </ResizablePanelGroup>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator className="my-8" />

        {/* Overlay Components */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold tracking-tight">Overlay Components</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {/* Dialog */}
            <Card>
              <CardHeader>
                <CardTitle>Dialog</CardTitle>
                <CardDescription>8-bit styled modal dialog for important content.</CardDescription>
              </CardHeader>
              <CardContent>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline">Open Dialog</Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Edit profile</DialogTitle>
                      <DialogDescription>
                        Make changes to your profile here. Click save when you're done.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="name" className="text-right">
                          Name
                        </Label>
                        <Input id="name" value="Pedro Duarte" className="col-span-3" />
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="username" className="text-right">
                          Username
                        </Label>
                        <Input id="username" value="@peduarte" className="col-span-3" />
                      </div>
                    </div>
                    <DialogFooter>
                      <Button type="submit">Save changes</Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>

            {/* Dropdown Menu */}
            <Card>
              <CardHeader>
                <CardTitle>Dropdown Menu</CardTitle>
                <CardDescription>8-bit styled dropdown menu overlay.</CardDescription>
              </CardHeader>
              <CardContent>
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <Button variant="outline">Open Menu</Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent font="retro">
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Profile</DropdownMenuItem>
                    <DropdownMenuItem>Billing</DropdownMenuItem>
                    <DropdownMenuItem>Team</DropdownMenuItem>
                    <DropdownMenuItem>Subscription</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </CardContent>
            </Card>

            {/* Hover Card */}
            <Card>
              <CardHeader>
                <CardTitle>Hover Card</CardTitle>
                <CardDescription>8-bit styled info card on hover.</CardDescription>
              </CardHeader>
              <CardContent>
                <HoverCard>
                  <HoverCardTrigger>
                    <Button variant="link">@nextjs</Button>
                  </HoverCardTrigger>
                  <HoverCardContent className="w-80">
                    <div className="flex justify-between space-x-4">
                      <Avatar>
                        <AvatarImage src="https://github.com/vercel.png" />
                        <AvatarFallback>VC</AvatarFallback>
                      </Avatar>
                      <div className="space-y-1">
                        <h4 className="text-sm font-semibold">@nextjs</h4>
                        <p className="text-sm">The React Framework – created and maintained by @vercel.</p>
                        <div className="flex items-center pt-2">
                          <GithubIcon className="mr-2 h-4 w-4 opacity-70" />{" "}
                          <span className="text-muted-foreground text-xs">Joined December 2021</span>
                        </div>
                      </div>
                    </div>
                  </HoverCardContent>
                </HoverCard>
              </CardContent>
            </Card>

            {/* Popover */}
            <Card>
              <CardHeader>
                <CardTitle>Popover</CardTitle>
                <CardDescription>8-bit styled floating content next to a trigger.</CardDescription>
              </CardHeader>
              <CardContent>
                <Popover>
                  <PopoverTrigger>
                    <Button variant="outline">Open Popover</Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-80">
                    <div className="grid gap-4">
                      <div className="space-y-4">
                        <h4 className="leading-none font-medium">Dimensions</h4>
                        <p className="text-muted-foreground text-sm">Set the dimensions for the layer.</p>
                      </div>
                      <div className="grid gap-4">
                        <div className="grid grid-cols-3 items-center gap-4">
                          <Label htmlFor="width">Width</Label>
                          <Input id="width" defaultValue="100%" className="col-span-2 h-8" />
                        </div>
                        <div className="grid grid-cols-3 items-center gap-4">
                          <Label htmlFor="maxWidth">Max. width</Label>
                          <Input id="maxWidth" defaultValue="300px" className="col-span-2 h-8" />
                        </div>
                      </div>
                    </div>
                  </PopoverContent>
                </Popover>
              </CardContent>
            </Card>

            {/* Sheet */}
            <Card>
              <CardHeader>
                <CardTitle>Sheet</CardTitle>
                <CardDescription>8-bit styled slide-in panel component.</CardDescription>
              </CardHeader>
              <CardContent>
                <Sheet>
                  <SheetTrigger>
                    <Button variant="outline">Open Sheet</Button>
                  </SheetTrigger>
                  <SheetContent>
                    <SheetHeader>
                      <SheetTitle>Edit profile</SheetTitle>
                      <SheetDescription>
                        Make changes to your profile here. Click save when you're done.
                      </SheetDescription>
                    </SheetHeader>
                    <div className="grid gap-4 py-4">
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="sheet-name" className="text-right">
                          Name
                        </Label>
                        <Input id="sheet-name" className="col-span-3" />
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="sheet-username" className="text-right">
                          Username
                        </Label>
                        <Input id="sheet-username" className="col-span-3" />
                      </div>
                    </div>
                    <div className="mt-4 flex flex-col space-y-4">
                      <Button>Save changes</Button>
                      <Button variant="outline">Cancel</Button>
                    </div>
                  </SheetContent>
                </Sheet>
              </CardContent>
            </Card>

            {/* Tooltip */}
            <Card>
              <CardHeader>
                <CardTitle>Tooltip</CardTitle>
                <CardDescription>8-bit styled popup for information on hover.</CardDescription>
              </CardHeader>
              <CardContent>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <Button variant="outline">Hover Me</Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>This is a tooltip with 8-bit styling.</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator className="my-8" />

        {/* Data Display Components */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold tracking-tight">Data Display Components</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {/* Avatar */}
            <Card>
              <CardHeader>
                <CardTitle>Avatar</CardTitle>
                <CardDescription>8-bit styled user profile image element.</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-4">
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <Avatar variant="pixel">
                  <AvatarImage src="https://github.com/vercel.png" alt="@vercel" />
                  <AvatarFallback>VC</AvatarFallback>
                </Avatar>
                <Avatar variant="retro">
                  <AvatarFallback className="rounded">AB</AvatarFallback>
                </Avatar>
              </CardContent>
            </Card>

            {/* Badge */}
            <Card>
              <CardHeader>
                <CardTitle>Badge</CardTitle>
                <CardDescription>8-bit styled small status descriptor for UI elements.</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-4">
                <Badge>Default</Badge>
                <Badge variant="secondary">Secondary</Badge>
                <Badge variant="outline">Outline</Badge>
                <Badge variant="destructive">Destructive</Badge>
              </CardContent>
            </Card>

            {/* Label */}
            <Card>
              <CardHeader>
                <CardTitle>Label</CardTitle>
                <CardDescription>8-bit styled accessible text label for form controls.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-1.5">
                  <Label htmlFor="email-1">Email</Label>
                  <Input type="email" id="email-1" placeholder="example@example.com" />
                </div>
                <div className="flex items-center space-x-4">
                  <Checkbox id="terms4" />
                  <Label htmlFor="terms4">Accept terms</Label>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  )
}
