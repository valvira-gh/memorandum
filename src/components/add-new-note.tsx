'use client';

import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

const AddNewNote = () => {
    return (
        <div className="">
            <h3 className="text-2xl m-1 text-foreground font-bold">
                Add New Note
            </h3>
            <form className="flex flex-col">
                <div className="flex flex-col m-1">
                    <Label htmlFor="title">Title</Label>
                    <Input
                        type="text"
                        id="title"
                        name="title"
                        className="mt-1"
                    />
                </div>
                <div className="flex flex-col m-1">
                    <Label htmlFor="title">Memo:</Label>
                    <Textarea id="content" name="content" className="mt-1" />
                </div>
            </form>
        </div>
    );
};

export default AddNewNote;
