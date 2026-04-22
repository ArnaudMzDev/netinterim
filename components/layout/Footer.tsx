import Link from "next/link";

export default function Footer() {
    return (
        <footer className="mt-20 border-t border-white/10 pt-8">
            <div className="grid gap-10 md:grid-cols-3">
                <div>
                    <p className="text-base font-semibold text-white">NetInterim</p>
                    <p className="mt-3 max-w-sm text-sm leading-6 text-slate-400">
                        Outil d’estimation de salaire intérim : brut, net indicatif, IFM,
                        congés payés, heures supplémentaires et reste après acompte.
                    </p>
                </div>

                <div>
                    <p className="text-sm font-semibold uppercase tracking-wide text-slate-300">
                        Guides
                    </p>
                    <div className="mt-4 flex flex-col gap-3 text-sm text-slate-400">
                        <Link href="/calcul-salaire-interim" className="hover:text-white">
                            Calcul salaire intérim
                        </Link>
                        <Link href="/calcul-ifm-interim" className="hover:text-white">
                            Calcul IFM intérim
                        </Link>
                        <Link href="/conges-payes-interim" className="hover:text-white">
                            Congés payés intérim
                        </Link>
                        <Link
                            href="/heures-supplementaires-interim"
                            className="hover:text-white"
                        >
                            Heures supplémentaires intérim
                        </Link>
                        <Link href="/acompte-interim" className="hover:text-white">
                            Acompte intérim
                        </Link>
                    </div>
                </div>

                <div>
                    <p className="text-sm font-semibold uppercase tracking-wide text-slate-300">
                        Produit
                    </p>
                    <div className="mt-4 flex flex-col gap-3 text-sm text-slate-400">
                        <Link href="/" className="hover:text-white">
                            Accueil
                        </Link>
                        <Link href="/pricing" className="hover:text-white">
                            Premium
                        </Link>
                        <Link href="/historique" className="hover:text-white">
                            Historique
                        </Link>
                    </div>
                </div>
            </div>

            <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
                <p>© {new Date().getFullYear()} NetInterim. Tous droits réservés.</p>
                <p>Le net affiché reste une estimation indicative.</p>
            </div>
        </footer>
    );
}