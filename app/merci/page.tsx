import MerciClient from "@/components/merci/MerciClient";

export const dynamic = "force-dynamic";

export default async function MerciPage({
                                            searchParams,
                                        }: {
    searchParams: Promise<{ session_id?: string }>;
}) {
    const params = await searchParams;
    const sessionId = params?.session_id ?? null;

    return (
        <main className="pb-20 pt-16">
            <div className="container-app">
                <MerciClient sessionId={sessionId} />
            </div>
        </main>
    );
}