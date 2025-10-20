import React from 'react';

// --- TYPE DEFINITIONS ---
interface MenuItemType {
  name: string;
  options?: string[];
}

interface ActivityType {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}


// --- SVG ICONS ---
const SectionTitleIcon = ({ className }: { className?: string }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.007z" clipRule="evenodd" />
    </svg>
);

const FoodIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
    </svg>
);

const DrinkIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5h3m-6.75 2.25h10.5a2.25 2.25 0 002.25-2.25v-1.5a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 15.75v1.5a2.25 2.25 0 002.25 2.25z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18.75c0-1.996.403-3.87.986-5.625m10.028 0c.583 1.755.986 3.629.986 5.625" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.752 4.137A18.096 18.096 0 0112 3c1.655 0 3.23.193 4.748.537M16.5 7.5c-.5-1.5-1.5-2.75-2.625-3.625" />
    </svg>
);

const DessertIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 15.75a.75.75 0 01-.75.75H3.75a.75.75 0 01-.75-.75V13.5A2.25 2.25 0 015.25 11.25h13.5A2.25 2.25 0 0121 13.5v2.25z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 8.25c-.75-.542-1.536-1.02-2.343-1.422-.444-.225-.92-.41-1.41-.562a3.75 3.75 0 00-2.036.038.75.75 0 01-.63.957c.183.056.357.126.52.208M9.75 8.25c.75-.542 1.536-1.02 2.343-1.422.444-.225.92-.41 1.41-.562a3.75 3.75 0 012.036.038.75.75 0 00.63.957c-.183.056-.357.126-.52.208" />
    </svg>
);

const EatIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.658-.463 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
    </svg>
);

const GameIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h3m-3 3h3m-3 3h3M3.75 6A2.25 2.25 0 016 3.75h12A2.25 2.25 0 0120.25 6v12A2.25 2.25 0 0118 20.25H6A2.25 2.25 0 013.75 18V6z" />
    </svg>
);

const PeopleIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m-7.5-2.952a4.5 4.5 0 01-9 0m9 0a4.5 4.5 0 00-9 0m9 0h.008m-3.75 3.75h.008m-3.75 0h.008m-3.75 0h.008m9 0h.008" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 12a4.5 4.5 0 100-9 4.5 4.5 0 000 9z" />
    </svg>
);

const MusicIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V7.5a2.25 2.25 0 012.25-2.25h1.5A2.25 2.25 0 0118 7.5v3.553" />
    </svg>
);

const LocationIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
    </svg>
);

const MailIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
    </svg>
);

const CalendarIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0h18" />
    </svg>
);


// --- DATA ---
const menuData = {
    repas: {
        title: "Repas",
        icon: FoodIcon,
        items: [
            { name: "Pâté jamaïcain", options: ["Bœuf", "Poulet", "Légumes"] },
            { name: "Grilled cheese croustillant" },
            { name: "Sandwich halal au poulet" },
        ],
    },
    boissons: {
        title: "Boissons",
        icon: DrinkIcon,
        items: [
            { name: "Jus", options: ["Pomme", "Tropical"] },
            { name: "Boisson de soya au chocolat" },
        ],
    },
    desserts: {
        title: "Desserts",
        icon: DessertIcon,
        items: [
            { name: "Biscuit maison" },
            { name: "Compote de fruits" },
            { name: "Sandwich à la crème glacée" },
        ],
    },
};

const activitiesData: ActivityType[] = [
    { icon: FoodIcon, title: "Manger & Boire", description: "Achetez de la nourriture et des boissons à des prix abordables." },
    { icon: EatIcon, title: "Apportez votre repas", description: "Vous êtes libre d'amener votre propre repas pour le manger sur place." },
    { icon: GameIcon, title: "Jeux de Société", description: "Défiez vos amis au Baby-foot, Uno, Échecs, et plus encore." },
    { icon: PeopleIcon, title: "Socialiser", description: "Un lieu parfait pour retrouver vos amis et discuter dans une ambiance conviviale." },
    { icon: MusicIcon, title: "Bonne Musique", description: "Profitez d'une ambiance musicale relaxante sélectionnée pour vous." },
];

// --- UI COMPONENTS ---
const Hero = () => (
    <header className="relative h-96 md:h-[500px] flex items-center justify-center text-white text-center px-4">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <img src="https://picsum.photos/seed/cafeetudiant/1600/900" alt="Ambiance chaleureuse d'un café" className="absolute inset-0 w-full h-full object-cover" />
        
        <div className="relative z-20 flex flex-col items-center">
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-wider">Café-Étudiant</h1>
            <p className="mt-4 text-lg md:text-2xl text-stone-200">Géré par des élèves, pour des élèves.</p>
            <div className="mt-8 bg-amber-500 text-white px-6 py-3 rounded-full shadow-lg animate-pulse flex items-center space-x-3">
                <CalendarIcon className="w-6 h-6" />
                <span className="font-semibold text-lg md:text-xl">Grande Ouverture le 27 octobre 2025</span>
            </div>
        </div>
    </header>
);

// FIX: Explicitly type SectionTitle as a React.FC to correctly handle the 'children' prop.
const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <div className="flex items-center justify-center mb-12 text-center">
        <SectionTitleIcon className="w-6 h-6 text-amber-500 mr-3 hidden sm:block" />
        <h2 className="text-4xl md:text-5xl font-display text-amber-900">{children}</h2>
        <SectionTitleIcon className="w-6 h-6 text-amber-500 ml-3 hidden sm:block" />
    </div>
);

const About = () => (
    <section id="about" className="max-w-3xl mx-auto text-center">
        <SectionTitle>C’est quoi le Café-Étudiant ?</SectionTitle>
        <p className="text-lg text-stone-600 leading-relaxed">
            Le Café-Étudiant est un projet géré par des élèves, pour des élèves à l’école secondaire Antoine-De-Saint-Exupéry. C’est un lieu chaleureux où les étudiants peuvent se détendre, manger, jouer et socialiser dans une ambiance conviviale.
        </p>
    </section>
);

// FIX: Explicitly type MenuItem as a React.FC to correctly handle the 'key' prop in lists.
const MenuItem: React.FC<{ item: MenuItemType }> = ({ item }) => (
    <div className="py-3">
        <p className="text-lg font-semibold text-stone-800">{item.name}</p>
        {item.options && item.options.length > 0 && (
            <p className="text-sm text-stone-500 italic ml-2">{item.options.join(', ')}</p>
        )}
    </div>
);

const MenuCategory = ({ title, icon: Icon, items }: { title: string; icon: React.ComponentType<{ className?: string }>; items: MenuItemType[] }) => (
    <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 transform hover:scale-105 transition-transform duration-300">
        <div className="flex items-center mb-4">
            <Icon className="w-8 h-8 text-amber-600" />
            <h3 className="ml-3 text-2xl font-display text-amber-800">{title}</h3>
        </div>
        <div className="divide-y divide-stone-200">
            {items.map(item => <MenuItem key={item.name} item={item} />)}
        </div>
    </div>
);


const Menu = () => (
    <section id="menu">
        <SectionTitle>🍴 Notre Menu</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <MenuCategory title={menuData.repas.title} icon={menuData.repas.icon} items={menuData.repas.items} />
            <MenuCategory title={menuData.boissons.title} icon={menuData.boissons.icon} items={menuData.boissons.items} />
            <MenuCategory title={menuData.desserts.title} icon={menuData.desserts.icon} items={menuData.desserts.items} />
        </div>
    </section>
);

// FIX: Explicitly type ActivityCard as a React.FC to correctly handle the 'key' prop in lists.
const ActivityCard: React.FC<{ activity: ActivityType }> = ({ activity }) => (
    <div className="bg-white rounded-xl shadow-lg p-6 text-center transform hover:-translate-y-2 transition-transform duration-300 flex flex-col items-center">
        <div className="p-4 bg-amber-100 rounded-full mb-4">
            <activity.icon className="w-10 h-10 text-amber-700" />
        </div>
        <h3 className="text-xl font-bold text-stone-800 mb-2">{activity.title}</h3>
        <p className="text-stone-600 flex-grow">{activity.description}</p>
    </div>
);

const Activities = () => (
    <section id="activities">
        <SectionTitle>🎲 Activités et Ambiance</SectionTitle>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {activitiesData.map(activity => (
                <ActivityCard key={activity.title} activity={activity} />
            ))}
        </div>
    </section>
);


const LocationContact = () => (
    <section id="contact" className="bg-white rounded-xl shadow-lg p-8 md:p-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
                <h3 className="text-3xl font-display text-amber-900 mb-4 flex items-center">
                    <LocationIcon className="w-7 h-7 mr-3" />
                    Où nous trouver ?
                </h3>
                <p className="text-lg text-stone-600">
                    Le Café-Étudiant se situe au <span className="font-bold">local H115</span>, dans le bâtiment principal de la grande école.
                </p>
                <div className="mt-4 rounded-lg overflow-hidden h-48 bg-stone-200 flex items-center justify-center">
                    <p className="text-stone-500">Emplacement de la carte</p>
                </div>
            </div>
            <div>
                <h3 className="text-3xl font-display text-amber-900 mb-4 flex items-center">
                    <PeopleIcon className="w-7 h-7 mr-3" />
                    Contacts
                </h3>
                <div className="space-y-4 text-lg">
                    <p className="text-stone-600">
                        <span className="font-semibold">Serey Suon</span> — par Teams
                    </p>
                    <a href="mailto:serey.suon@ymcaquebec.org" className="flex items-center text-amber-700 hover:text-amber-900 transition-colors">
                        <MailIcon className="w-6 h-6 mr-2" />
                        serey.suon@ymcaquebec.org
                    </a>
                </div>
            </div>
        </div>
    </section>
);

const Footer = () => (
    <footer className="bg-stone-800 text-stone-300 text-center p-8 mt-16">
        <div className="container mx-auto flex flex-col items-center space-y-4">
            <p className="text-sm text-stone-400">Site créé par Benit Madimba et le comité Marketing.</p>
            <div className="pt-4 mt-4 border-t border-stone-700 w-full max-w-lg">
                <p className="text-xs">&copy; {new Date().getFullYear()} Café-Étudiant — École secondaire Antoine-De-Saint-Exupéry</p>
            </div>
        </div>
    </footer>
);


// --- MAIN APP COMPONENT ---
export default function App() {
    return (
        <div className="bg-stone-50 text-stone-800">
            <Hero />
            <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-24">
                <About />
                <Menu />
                <Activities />
                <LocationContact />
            </main>
            <Footer />
        </div>
    );
}