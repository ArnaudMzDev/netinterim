import Link from "next/link";

const navItems = [
    { href: "/calcul-salaire-interim", label: "Calcul salaire" },
    { href: "/calcul-ifm-interim", label: "IFM" },
    { href: "/conges-payes-interim", label: "Congés payés" },
    { href: "/heures-supplementaires-interim", label: "Heures sup" },
    { href: "/acompte-interim", label: "Acompte" },
];

export default function Header() {
    return (
        <header className="mb-10">
            <div className="flex flex-col gap-4 rounded-[28px] border border-white/10 bg-white/5 px-5 py-4 md:flex-row md:items-center md:justify-between">
                <div className="flex items-center gap-3">
                    <Link
                        href="/"
                        className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 text-lg font-bold text-white transition hover:bg-white/15"
                    >
                        N
                    </Link>

                    <div>
                        <Link href="/" className="text-sm font-semibold text-white">
                            NetInterim
                        </Link>
                        <p className="text-xs text-slate-400">
                            Calculateur de salaire intérim
                        </p>
                    </div>
                </div>

                <nav className="flex flex-wrap items-center gap-2">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="rounded-2xl px-3 py-2 text-sm text-slate-300 transition hover:bg-white/5 hover:text-white"
                        >
                            {item.label}
                        </Link>
                    ))}

                    <Link
                        href="/pricing"
                        className="rounded-2xl border border-emerald-300/20 bg-emerald-400/10 px-4 py-2 text-sm font-medium text-emerald-300 transition hover:bg-emerald-400/15"
                    >
                        Premium
                    </Link>
                </nav>
            </div>
        </header>
    );
}