import NotesList from '@/components/notes-list';

const Home: React.FC = () => {
    return (
        <section className="flex flex-col items-center">
            <NotesList />
        </section>
    );
};

export default Home;
