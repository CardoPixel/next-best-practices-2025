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
import { Separator } from "@/components/ui/separator";
import { Github, Globe, Linkedin, Mail } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About - Cardo",
    description:
        "Full Stack Developer with expertise in modern web technologies",
};

export default function AboutPage() {
    return (
        <div className="container mx-auto p-6 max-w-4xl">
            <div className="text-center space-y-6 mb-12">
                <Avatar className="w-32 h-32 mx-auto">
                    <AvatarImage src="/assets/rick.jpg" alt="Cardo" />
                    <AvatarFallback>CD</AvatarFallback>
                </Avatar>
                <div>
                    <h1 className="text-4xl font-bold">Cardo</h1>
                    <p className="text-xl text-muted-foreground mt-2">
                        Full Stack Developer
                    </p>
                    <p className="text-lg mt-4 max-w-2xl mx-auto">
                        Passionate developer with expertise in modern web
                        technologies and best practices
                    </p>
                </div>
                <div className="flex justify-center space-x-4">
                    <Button variant="outline" size="sm">
                        <Github className="h-4 w-4 mr-2" />
                        GitHub
                    </Button>
                    <Button variant="outline" size="sm">
                        <Linkedin className="h-4 w-4 mr-2" />
                        LinkedIn
                    </Button>
                    <Button variant="outline" size="sm">
                        <Mail className="h-4 w-4 mr-2" />
                        Email
                    </Button>
                    <Button variant="outline" size="sm">
                        <Globe className="h-4 w-4 mr-2" />
                        Website
                    </Button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* About Me */}
                <Card>
                    <CardHeader>
                        <CardTitle>About Me</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <p>
                            I'm a passionate full-stack developer with over 5
                            years of experience building modern web
                            applications. I specialize in React, Next.js,
                            TypeScript, and Node.js, with a focus on creating
                            scalable, maintainable, and user-friendly solutions.
                        </p>
                        <div className="flex flex-wrap gap-2">
                            <Badge variant="secondary">Next.js</Badge>
                            <Badge variant="secondary">React</Badge>
                            <Badge variant="secondary">TypeScript</Badge>
                            <Badge variant="secondary">Node.js</Badge>
                            <Badge variant="secondary">Python</Badge>
                            <Badge variant="secondary">AWS</Badge>
                        </div>
                    </CardContent>
                </Card>

                {/* Experience */}
                <Card>
                    <CardHeader>
                        <CardTitle>Experience</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div>
                            <h4 className="font-semibold">
                                Senior Full Stack Developer
                            </h4>
                            <p className="text-sm text-muted-foreground">
                                2022 - Present
                            </p>
                            <p className="text-sm mt-1">
                                Leading development of enterprise applications
                                with focus on performance and scalability
                            </p>
                        </div>
                        <Separator />
                        <div>
                            <h4 className="font-semibold">
                                Full Stack Developer
                            </h4>
                            <p className="text-sm text-muted-foreground">
                                2020 - 2022
                            </p>
                            <p className="text-sm mt-1">
                                Built and maintained multiple client projects
                                using modern web technologies
                            </p>
                        </div>
                    </CardContent>
                </Card>

                {/* Education */}
                <Card>
                    <CardHeader>
                        <CardTitle>Education</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div>
                            <h4 className="font-semibold">
                                Bachelor of Computer Science
                            </h4>
                            <p className="text-sm text-muted-foreground">
                                University of Technology
                            </p>
                            <p className="text-sm text-muted-foreground">
                                2016 - 2020
                            </p>
                        </div>
                    </CardContent>
                </Card>

                {/* Projects */}
                <Card>
                    <CardHeader>
                        <CardTitle>Projects</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div>
                            <h4 className="font-semibold">
                                Next.js Best Practices Template
                            </h4>
                            <p className="text-sm text-muted-foreground">
                                A comprehensive Next.js template with best
                                practices for 2025
                            </p>
                        </div>
                        <Separator />
                        <div>
                            <h4 className="font-semibold">
                                E-commerce Platform
                            </h4>
                            <p className="text-sm text-muted-foreground">
                                Full-stack e-commerce platform with payment
                                integration
                            </p>
                        </div>
                        <Separator />
                        <div>
                            <h4 className="font-semibold">
                                Task Management App
                            </h4>
                            <p className="text-sm text-muted-foreground">
                                Real-time task management application with
                                collaborative features
                            </p>
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Contact Section */}
            <Card className="mt-8">
                <CardHeader>
                    <CardTitle>Contact</CardTitle>
                    <CardDescription>
                        Get in touch for collaborations or questions
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <h4 className="font-semibold">Email</h4>
                            <p className="text-sm text-muted-foreground">
                                cardo@example.com
                            </p>
                        </div>
                        <div className="space-y-2">
                            <h4 className="font-semibold">Location</h4>
                            <p className="text-sm text-muted-foreground">
                                San Francisco, CA
                            </p>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
