export function activatePremiumForEmail(email: string) {
    console.log(`[PREMIUM ACTIVÉ] ${email}`);
    // Plus tard :
    // - save en DB
    // - associer au user
    // - stocker subscriptionId / customerId / status
}

export function deactivatePremiumForCustomer(customerId: string) {
    console.log(`[PREMIUM DÉSACTIVÉ] customer=${customerId}`);
    // Plus tard :
    // - retrouver l'utilisateur via customerId
    // - retirer premium
}