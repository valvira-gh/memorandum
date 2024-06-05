'use server';

import { z } from 'zod';
import { database } from './database';
import bcrypt from 'bcrypt';

// export const createUser = async (formData: FormData) => {
//     const { name, email, password } = createUserSchema.parse(formData);
//     const hashedPassword = await bcrypt.hash(password, 10);
//     return await database.user.create({
//         data: {
//             name,
//             email,
//             password: hashedPassword,
//         },
//     });
// };

const createUserSchema = z.object({
    name: z
        .string()
        .min(2, {
            message: 'Name must be at least 2 characters long.',
        })
        .max(255, {
            message: "Name can't be longer than 255 characters.",
        }),
    email: z.string().email({
        message: 'Invalid email address.',
    }),
    password: z
        .string()
        .min(8, {
            message: 'Password must be at least 8 characters long.',
        })
        .max(255, {
            message: 'Maximum password length is 255 characters.',
        }),
});

type FormState = {
    errors: {
        name?: string;
        email?: string;
        password?: string;
        confirmPassword?: string;
    };
    message: string;
};

export const createUser = async (formState: FormState, formData: FormData) => {
    await new Promise((resolve) => setTimeout(resolve, 500));

    try {
        const name = formData.get('name');
        const email = formData.get('email');
        const password = formData.get('password');
        const confirmPassword = formData.get('confirmPassword');

        console.log(
            'Name:',
            name,
            'Email:',
            email,
            'Password:',
            password,
            'Confirm Password:',
        );

        return Promise.resolve(formState);
    } catch (err: unknown) {
        console.error('Catch error.', err);
        formState.message = 'An error occurred, while creating new user.';

        return Promise.reject(formState);
    }
};
