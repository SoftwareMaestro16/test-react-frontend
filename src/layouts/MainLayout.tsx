import { Footer } from '../components/Footer';
import { Header } from '../components/Header';

interface LayoutProps {
    children: React.ReactNode;
}

export function MainLayout({ children }: LayoutProps) {


    return (
        <>
            <Header />
            <main className="flex flex-col gap-y-20 md:gap-y-32 overflow-hidden">{children}</main>
            <Footer />
        </>
    );
}
