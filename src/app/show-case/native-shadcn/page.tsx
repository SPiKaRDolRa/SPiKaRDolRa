"use client"

import * as React from "react"

import Link from "next/link"

import { GithubIcon, Plus } from "lucide-react"

import { cn } from "@/lib/utils"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Skeleton } from "@/components/ui/skeleton"
import { Switch } from "@/components/ui/switch"
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Toggle } from "@/components/ui/toggle"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export default function NativeShadcnShowcase() {
  return (
    <div className="container p-6 space-y-12 mb-20">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">Native Shadcn/UI Components</h1>
        <p className="text-muted-foreground text-lg">
          A showcase of all the original Shadcn/UI components available in this project.
        </p>
        <div className="flex flex-row gap-2">
          <Button asChild variant="outline">
            <Link href="/show-case/8bit-shadcn">Switch to 8-bit Theme Components</Link>
          </Button>
        </div>
      </div>

      <Separator className="my-8" />

      {/* Input Components */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold tracking-tight">Input Components</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Button */}
          <Card>
            <CardHeader>
              <CardTitle>Button</CardTitle>
              <CardDescription>Interactive button component with variants.</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-4">
              <Button>Default</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="destructive">Destructive</Button>
              <Button variant="outline">Outline</Button>
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
              <CardDescription>Text field for user input.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Input placeholder="Default input" />
              <Input placeholder="Disabled input" disabled />
              <div className="flex gap-2">
                <Input placeholder="With button" />
                <Button>Submit</Button>
              </div>
            </CardContent>
          </Card>

          {/* Checkbox */}
          <Card>
            <CardHeader>
              <CardTitle>Checkbox</CardTitle>
              <CardDescription>Boolean selection control.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-2">
                <Checkbox id="terms1" />
                <Label htmlFor="terms1">Accept terms</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="terms2" checked />
                <Label htmlFor="terms2">Checked state</Label>
              </div>
              <div className="flex items-center space-x-2">
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
              <CardDescription>Single option selection control.</CardDescription>
            </CardHeader>
            <CardContent>
              <RadioGroup defaultValue="option-one">
                <div className="flex items-center space-x-2 mb-2">
                  <RadioGroupItem value="option-one" id="option-one" />
                  <Label htmlFor="option-one">Option One</Label>
                </div>
                <div className="flex items-center space-x-2 mb-2">
                  <RadioGroupItem value="option-two" id="option-two" />
                  <Label htmlFor="option-two">Option Two</Label>
                </div>
                <div className="flex items-center space-x-2">
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
              <CardDescription>Dropdown selection component.</CardDescription>
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
              <CardDescription>Multi-line text input control.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Textarea placeholder="Type your message here." />
              <Textarea placeholder="Disabled" disabled />
            </CardContent>
          </Card>

          {/* Switch */}
          <Card>
            <CardHeader>
              <CardTitle>Switch</CardTitle>
              <CardDescription>Toggle between on/off states.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-2">
                <Switch id="airplane-mode" />
                <Label htmlFor="airplane-mode">Airplane Mode</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Switch id="checked" defaultChecked />
                <Label htmlFor="checked">Checked</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Switch id="disabled" disabled />
                <Label htmlFor="disabled" className="text-muted-foreground">
                  Disabled
                </Label>
              </div>
            </CardContent>
          </Card>

          {/* Toggle */}
          <Card>
            <CardHeader>
              <CardTitle>Toggle</CardTitle>
              <CardDescription>Two-state button control.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex gap-2">
                <Toggle>Default</Toggle>
                <Toggle variant="outline">Outline</Toggle>
                <Toggle defaultPressed>Pressed</Toggle>
                <Toggle disabled>Disabled</Toggle>
              </div>
              <div className="flex gap-2">
                <Toggle size="sm">Small</Toggle>
                <Toggle size="lg">Large</Toggle>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator className="my-8" />

      {/* Navigation Components */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold tracking-tight">Navigation Components</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Breadcrumb */}
          <Card>
            <CardHeader>
              <CardTitle>Breadcrumb</CardTitle>
              <CardDescription>Displays the navigation hierarchy.</CardDescription>
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
              <CardDescription>Navigation for pages of content.</CardDescription>
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
          <Card>
            <CardHeader>
              <CardTitle>Tabs</CardTitle>
              <CardDescription>Switch between different content views.</CardDescription>
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
        </div>
      </section>

      <Separator className="my-8" />

      {/* Feedback Components */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold tracking-tight">Feedback Components</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Alert */}
          <Card>
            <CardHeader>
              <CardTitle>Alert</CardTitle>
              <CardDescription>Displays important messages to users.</CardDescription>
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

          {/* Alert Dialog */}
          <Card>
            <CardHeader>
              <CardTitle>Alert Dialog</CardTitle>
              <CardDescription>Modal dialog for important actions.</CardDescription>
            </CardHeader>
            <CardContent>
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button variant="outline">Show Alert Dialog</Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                    <AlertDialogDescription>
                      This action cannot be undone. This will permanently delete your account and remove your data from
                      our servers.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction>Continue</AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </CardContent>
          </Card>

          {/* Skeleton */}
          <Card>
            <CardHeader>
              <CardTitle>Skeleton</CardTitle>
              <CardDescription>Used for loading states.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex items-center space-x-4">
                <Skeleton className="h-12 w-12 rounded-full" />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-[250px]" />
                  <Skeleton className="h-4 w-[200px]" />
                </div>
              </div>
              <Skeleton className="h-[125px] w-full rounded-xl" />
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator className="my-8" />

      {/* Layout Components */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold tracking-tight">Layout Components</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Accordion */}
          <Card>
            <CardHeader>
              <CardTitle>Accordion</CardTitle>
              <CardDescription>Vertically stacked collapsible sections.</CardDescription>
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
                    Yes. It comes with default styles that match the other components.
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

          {/* Separator */}
          <Card>
            <CardHeader>
              <CardTitle>Separator</CardTitle>
              <CardDescription>Visually or semantically separates content.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>Section 1</div>
                <Separator />
                <div>Section 2</div>
                <div className="flex items-center space-x-4">
                  <div>Item 1</div>
                  <Separator orientation="vertical" className="h-4" />
                  <div>Item 2</div>
                  <Separator orientation="vertical" className="h-4" />
                  <div>Item 3</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Table */}
          <Card>
            <CardHeader>
              <CardTitle>Table</CardTitle>
              <CardDescription>A responsive table for displaying data.</CardDescription>
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
                  <TableRow>
                    <TableCell className="font-medium">INV003</TableCell>
                    <TableCell>Unpaid</TableCell>
                    <TableCell>Bank Transfer</TableCell>
                    <TableCell className="text-right">$350.00</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator className="my-8" />

      {/* Overlay Components */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold tracking-tight">Overlay Components</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Dialog */}
          <Card>
            <CardHeader>
              <CardTitle>Dialog</CardTitle>
              <CardDescription>Modal dialog for important content.</CardDescription>
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
              <CardDescription>Trigger a dropdown menu.</CardDescription>
            </CardHeader>
            <CardContent>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline">Open Menu</Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
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
              <CardDescription>For showing more info on hover.</CardDescription>
            </CardHeader>
            <CardContent>
              <HoverCard>
                <HoverCardTrigger asChild>
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
                        <span className="text-xs text-muted-foreground">Joined December 2021</span>
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
              <CardDescription>Displays floating content next to a trigger.</CardDescription>
            </CardHeader>
            <CardContent>
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline">Open Popover</Button>
                </PopoverTrigger>
                <PopoverContent className="w-80">
                  <div className="grid gap-4">
                    <div className="space-y-2">
                      <h4 className="font-medium leading-none">Dimensions</h4>
                      <p className="text-sm text-muted-foreground">Set the dimensions for the layer.</p>
                    </div>
                    <div className="grid gap-2">
                      <div className="grid grid-cols-3 items-center gap-4">
                        <Label htmlFor="width">Width</Label>
                        <Input id="width" defaultValue="100%" className="col-span-2 h-8" />
                      </div>
                      <div className="grid grid-cols-3 items-center gap-4">
                        <Label htmlFor="maxWidth">Max. width</Label>
                        <Input id="maxWidth" defaultValue="300px" className="col-span-2 h-8" />
                      </div>
                      <div className="grid grid-cols-3 items-center gap-4">
                        <Label htmlFor="height">Height</Label>
                        <Input id="height" defaultValue="25px" className="col-span-2 h-8" />
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
              <CardDescription>Slide-in panel component for side content.</CardDescription>
            </CardHeader>
            <CardContent className="flex space-x-4">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline">Open Sheet</Button>
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle>Edit profile</SheetTitle>
                    <SheetDescription>Make changes to your profile here. Click save when you're done.</SheetDescription>
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
                  <div className="flex flex-col space-y-4 mt-4">
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
              <CardDescription>Popup for information on hover.</CardDescription>
            </CardHeader>
            <CardContent>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline">Hover Me</Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>This is a tooltip that shows information on hover.</p>
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Avatar */}
          <Card>
            <CardHeader>
              <CardTitle>Avatar</CardTitle>
              <CardDescription>Image element for user profile.</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-4">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarImage src="https://github.com/vercel.png" alt="@vercel" />
                <AvatarFallback>VC</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarFallback>AB</AvatarFallback>
              </Avatar>
            </CardContent>
          </Card>

          {/* Badge */}
          <Card>
            <CardHeader>
              <CardTitle>Badge</CardTitle>
              <CardDescription>Small status descriptor for UI elements.</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
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
              <CardDescription>Accessible text label for form controls.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-1.5">
                <Label htmlFor="email-1">Email</Label>
                <Input type="email" id="email-1" placeholder="example@example.com" />
              </div>
              <div className="grid gap-1.5">
                <Label htmlFor="terms-1" className="text-muted-foreground">
                  Accept terms and conditions
                </Label>
                <Checkbox id="terms-1" />
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}

// Following function isn't part of the main showcase but would be required for the Card component
function Card({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("rounded-lg border bg-card text-card-foreground shadow-sm", className)} {...props} />
}

function CardHeader({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("flex flex-col space-y-1.5 p-6", className)} {...props} />
}

function CardTitle({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return <h3 className={cn("text-lg font-semibold leading-none tracking-tight", className)} {...props} />
}

function CardDescription({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
  return <p className={cn("text-sm text-muted-foreground", className)} {...props} />
}

function CardContent({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("p-6 pt-0", className)} {...props} />
}

function CardFooter({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("flex items-center p-6 pt-0", className)} {...props} />
}
