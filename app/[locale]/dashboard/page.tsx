import { AnimatedButtonDemo } from "@/components/shared/custom/animated-button-demo";
import ChipDemo from "@/components/shared/custom/chip-demo";
import RatingDemo from "@/components/shared/custom/rating-demo";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import {
    AlertCircle,
    CheckCircle,
    Info,
    OctagonAlert,
    User,
} from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Component Dashboard",
    description: "Explore all available UI components and their variants",
};

export default function DashboardPage() {
    return (
        <div className="container mx-auto p-6 space-y-8">
            <div className="text-center space-y-4">
                <h1 className="text-4xl font-bold">Component Dashboard</h1>
                <p className="text-xl text-muted-foreground">
                    Explore all available UI components and their variants
                </p>
            </div>

            {/* Buttons Section */}
            <Card>
                <CardHeader>
                    <CardTitle>Buttons</CardTitle>
                    <CardDescription>
                        Various button styles and variants
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="flex flex-wrap gap-4">
                        <Button variant="default">Default</Button>
                        <Button variant="destructive">Destructive</Button>
                        <Button variant="outline">Outline</Button>
                        <Button variant="secondary">Secondary</Button>
                        <Button variant="ghost">Ghost</Button>
                        <Button variant="link">Link</Button>
                    </div>
                    <div className="flex flex-wrap gap-4">
                        <Button size="default">Default Size</Button>
                        <Button size="sm">Small</Button>
                        <Button size="lg">Large</Button>
                        <Button size="icon">
                            <User className="h-4 w-4" />
                        </Button>
                    </div>
                </CardContent>
            </Card>

            {/* Form Elements Section */}
            <Card>
                <CardHeader>
                    <CardTitle>Form Elements</CardTitle>
                    <CardDescription>
                        Input fields, labels, and form controls
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="Enter your email"
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="name">Name</Label>
                            <Input id="name" placeholder="Enter your name" />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="message">Message</Label>
                        <Textarea
                            id="message"
                            placeholder="Enter your message"
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="country">Country</Label>
                        <Select>
                            <SelectTrigger>
                                <SelectValue placeholder="Select a country" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="us">
                                    United States
                                </SelectItem>
                                <SelectItem value="uk">
                                    United Kingdom
                                </SelectItem>
                                <SelectItem value="ca">Canada</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </CardContent>
            </Card>

            {/* Interactive Elements Section */}
            <Card>
                <CardHeader>
                    <CardTitle>Interactive Elements</CardTitle>
                    <CardDescription>
                        Switches, checkboxes, radio buttons, and sliders
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="flex items-center space-x-2">
                        <Switch id="airplane-mode" />
                        <Label htmlFor="airplane-mode">Airplane Mode</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Checkbox id="terms" />
                        <Label htmlFor="terms">
                            Accept terms and conditions
                        </Label>
                    </div>
                    <RadioGroup defaultValue="option-one">
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem
                                value="option-one"
                                id="option-one"
                            />
                            <Label htmlFor="option-one">Option One</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem
                                value="option-two"
                                id="option-two"
                            />
                            <Label htmlFor="option-two">Option Two</Label>
                        </div>
                    </RadioGroup>
                    <div className="space-y-2">
                        <Label>Volume</Label>
                        <Slider defaultValue={[50]} max={100} step={1} />
                    </div>
                </CardContent>
            </Card>

            {/* Feedback Elements Section */}
            <Card>
                <CardHeader>
                    <CardTitle>Feedback Elements</CardTitle>
                    <CardDescription>
                        Alerts, badges, progress bars, and avatars
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="flex flex-wrap gap-2">
                        <Badge variant="default">Default</Badge>
                        <Badge variant="secondary">Secondary</Badge>
                        <Badge variant="destructive">Destructive</Badge>
                        <Badge variant="outline">Outline</Badge>
                    </div>
                    <div className="space-y-4">
                        <Alert variant="info">
                            <Info className="h-4 w-4" />
                            <AlertDescription>
                                This is an informational alert.
                            </AlertDescription>
                        </Alert>
                        <Alert variant="success">
                            <CheckCircle className="h-4 w-4" />
                            <AlertDescription>
                                This is a success alert.
                            </AlertDescription>
                        </Alert>
                        <Alert variant="warning">
                            <AlertCircle className="h-4 w-4" />
                            <AlertDescription>
                                This is a warning alert.
                            </AlertDescription>
                        </Alert>
                        <Alert variant="destructive">
                            <OctagonAlert className="h-4 w-4" />
                            <AlertDescription>
                                This is a destructive alert.
                            </AlertDescription>
                        </Alert>
                    </div>
                    <div className="space-y-2">
                        <Label>Progress</Label>
                        <Progress value={65} />
                    </div>
                    <div className="flex items-center space-x-4">
                        <Avatar>
                            <AvatarImage src="/assets/rick.jpg" alt="User" />
                            <AvatarFallback>JD</AvatarFallback>
                        </Avatar>
                        <div>
                            <p className="text-sm font-medium">John Doe</p>
                            <p className="text-sm text-muted-foreground">
                                john@example.com
                            </p>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Layout Elements Section */}
            <Card>
                <CardHeader>
                    <CardTitle>Layout Elements</CardTitle>
                    <CardDescription>
                        Tabs, accordions, and separators
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    <Tabs defaultValue="account" className="w-full">
                        <TabsList className="grid w-full grid-cols-2">
                            <TabsTrigger value="account">Account</TabsTrigger>
                            <TabsTrigger value="password">Password</TabsTrigger>
                        </TabsList>
                        <TabsContent value="account" className="space-y-4">
                            <p>Account settings content goes here.</p>
                        </TabsContent>
                        <TabsContent value="password" className="space-y-4">
                            <p>Password settings content goes here.</p>
                        </TabsContent>
                    </Tabs>
                    <Separator />
                    <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="item-1">
                            <AccordionTrigger>
                                What is this template?
                            </AccordionTrigger>
                            <AccordionContent>
                                This is a comprehensive Next.js template with
                                best practices for 2025.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <AccordionTrigger>How to use it?</AccordionTrigger>
                            <AccordionContent>
                                Clone the repository and start building your
                                application with the pre-configured setup.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </CardContent>
            </Card>

            {/* Loading States Section */}
            <Card>
                <CardHeader>
                    <CardTitle>Loading States</CardTitle>
                    <CardDescription>
                        Skeleton loaders and loading indicators
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="space-y-2">
                        <Skeleton className="h-4 w-[250px]" />
                        <Skeleton className="h-4 w-[200px]" />
                    </div>
                    <div className="flex items-center space-x-4">
                        <Skeleton className="h-12 w-12 rounded-full" />
                        <div className="space-y-2">
                            <Skeleton className="h-4 w-[150px]" />
                            <Skeleton className="h-4 w-[100px]" />
                        </div>
                    </div>
                </CardContent>
            </Card>
            {/* Custom Components Showcase */}
            <section className="mt-20 max-w-6xl px-4">
                <h2 className="mb-12 text-center text-3xl font-bold sm:text-4xl bg-gradient-to-l from-secondary to-primary bg-clip-text text-transparent">
                    Interactive Components Showcase
                </h2>

                {/* Animated Button Demo */}
                <div className="mb-16">
                    <h3 className="mb-8 text-center text-2xl font-semibold text-primary">
                        Animated Button Components
                    </h3>
                    <AnimatedButtonDemo />
                </div>

                {/* Rating Component Demo */}
                <div className="mb-16">
                    <h3 className="mb-8 text-center text-2xl font-semibold text-primary">
                        Rating Component
                    </h3>
                    <RatingDemo />
                </div>

                {/* Chip Component Demo */}
                <div className="mb-16">
                    <h3 className="mb-8 text-center text-2xl font-semibold text-primary">
                        Chip Component
                    </h3>
                    <ChipDemo />
                </div>
            </section>
        </div>
    );
}
