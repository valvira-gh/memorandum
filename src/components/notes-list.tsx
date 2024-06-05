import { notes, Note } from '@/lib/data';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';

const NotesList = () => {
    return (
        <div className="w-1/2">
            {notes.map((note: Note) => (
                <Accordion type="multiple" key={note.id}>
                    <AccordionItem value={note.id}>
                        <AccordionTrigger>{note.title}</AccordionTrigger>
                        <AccordionContent>{note.content}</AccordionContent>
                    </AccordionItem>
                </Accordion>
            ))}
        </div>
    );
};

export default NotesList;
