import SwiftUI

struct CheckoutView: View {
    var body: some View {
        ScrollView {
            PremiumCard {
                Text("Escrow Checkout")
                    .font(.headline)
                Text("Холдирование EUR / USDC / USDT до переноса домена, кода и аналитики.")
                    .foregroundStyle(Palette.muted)
            }
            .padding(20)
        }
        .background(Palette.silk.ignoresSafeArea())
        .navigationTitle("Checkout")
    }
}
