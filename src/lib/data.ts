export type Note = {
    id: string;
    title: string;
    content: string;
    hasDone: boolean;
    createdAt: string;
    updatedAt: string;
};

export const notes: Note[] = [
    {
        id: '1',
        title: 'First Note',
        content: 'This is the first note.',
        hasDone: false,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
    },
    {
        id: '2',
        title: 'Note nro 2',
        content: 'The second note is like this.',
        hasDone: false,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
    },
    {
        id: '3',
        title: 'Note 3',
        content: 'Third note is the last, not the least.',
        hasDone: false,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
    },
];
