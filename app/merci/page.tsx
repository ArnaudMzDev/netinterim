import { Suspense } from "react";
import MerciClient from "@/components/merci/MerciClient";

export default function MerciPage() {
    return (
        <main className="pb-20 pt-16">
            <div className="container-app">
                <Suspense
                    fallback={
                        <div className="mx-auto max-w-2xl rounded-[32px] border border-emerald-300/20 bg-emerald-400/10 p-8 text-center">
                            <p className="text-sm font-medium text-emerald-300">
                                Paiement validé
                            </p>

                            <h1 className="mt-4 text-4xl font-black text-white">
                                Activation en cours
                            </h1>

                            <p className="mt-4 text-lg leading-8 text-slate-200">
                                Préparation de ton espace premium…
                            </p>
                        </div>
                    }
                >
                    <MerciClient />
                </Suspense>
            </div>
        </main>
    );
}