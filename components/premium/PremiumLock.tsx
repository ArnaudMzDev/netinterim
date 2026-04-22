export default function PremiumLock({
                                        title = "Fonction Premium",
                                        description = "Débloque cette fonctionnalité avec NetInterim Premium.",
                                    }: {
    title?: string;
    description?: string;
}) {
    return (
        <div className="rounded-[28px] border border-emerald-300/20 bg-emerald-400/10 p-6">
            <p className="text-sm font-medium text-emerald-300">{title}</p>
            <p className="mt-2 text-sm leading-6 text-slate-200">{description}</p>

            <a
                href="/pricing"
                className="mt-4 inline-flex rounded-2xl bg-white px-4 py-3 font-semibold text-slate-900 transition hover:opacity-90"
            >
                Débloquer Premium
            </a>
        </div>
    );
}