import fs from "node:fs";
import path from "node:path";

type PremiumUser = {
    email: string;
    customerId?: string;
    subscriptionId?: string;
    status: "active" | "inactive";
    updatedAt: string;
};

const filePath = path.join(process.cwd(), "data", "premium-users.json");

function readStore(): PremiumUser[] {
    try {
        if (!fs.existsSync(filePath)) {
            fs.writeFileSync(filePath, "[]", "utf-8");
        }

        const raw = fs.readFileSync(filePath, "utf-8");
        const parsed = JSON.parse(raw);

        return Array.isArray(parsed) ? parsed : [];
    } catch {
        return [];
    }
}

function writeStore(users: PremiumUser[]) {
    fs.writeFileSync(filePath, JSON.stringify(users, null, 2), "utf-8");
}

export function activatePremiumUser(params: {
    email: string;
    customerId?: string;
    subscriptionId?: string;
}) {
    const users = readStore();
    const email = params.email.toLowerCase().trim();

    const existingIndex = users.findIndex((u) => u.email === email);

    const nextUser: PremiumUser = {
        email,
        customerId: params.customerId,
        subscriptionId: params.subscriptionId,
        status: "active",
        updatedAt: new Date().toISOString(),
    };

    if (existingIndex >= 0) {
        users[existingIndex] = {
            ...users[existingIndex],
            ...nextUser,
        };
    } else {
        users.unshift(nextUser);
    }

    writeStore(users);
}

export function deactivatePremiumUserByCustomerId(customerId: string) {
    const users = readStore();
    const index = users.findIndex((u) => u.customerId === customerId);

    if (index >= 0) {
        users[index] = {
            ...users[index],
            status: "inactive",
            updatedAt: new Date().toISOString(),
        };
        writeStore(users);
    }
}

export function isPremiumEmail(email: string) {
    const users = readStore();
    const normalized = email.toLowerCase().trim();

    return users.some((u) => u.email === normalized && u.status === "active");
}