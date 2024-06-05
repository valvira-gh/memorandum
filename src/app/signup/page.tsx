'use client';
import { useFormState } from 'react-dom';
import { createUser } from '@/lib/actions';

import {
    Card,
    CardContent,
    CardTitle,
    CardHeader,
    CardFooter,
    CardDescription,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';

const SignUpPage: React.FC = () => {
    const [formState, formAction] = useFormState(createUser, {
        errors: {},
        message: '',
    });

    return (
        <main className="flex flex-col items-center">
            <Card className="w-1/2 m-4">
                <CardHeader>
                    <CardTitle className="text-3xl">Sign Up</CardTitle>
                </CardHeader>
                <CardContent>
                    <form action={formAction} className="flex flex-col">
                        <Label htmlFor="name">Name</Label>
                        <Input
                            type="text"
                            id="name"
                            name="name"
                            className="mt-1"
                        />
                        <Label htmlFor="email">Email</Label>
                        <Input
                            type="email"
                            id="email"
                            name="email"
                            className="mt-1"
                        />
                        <Label htmlFor="password">Password</Label>
                        <Input
                            type="password"
                            id="password"
                            name="password"
                            className="mt-1"
                        />
                        <Label htmlFor="confirm-password">
                            Confirm Password
                        </Label>
                        <Input
                            type="password"
                            id="confirm-password"
                            name="confirm-password"
                            className="mt-1"
                        />
                        <Button type="submit" className="mt-2">
                            Sign Up
                        </Button>
                    </form>
                </CardContent>
                <CardFooter>
                    <p>
                        Already have an account? <a href="/login">Log in</a>
                    </p>
                </CardFooter>
            </Card>
        </main>
    );
};

export default SignUpPage;
