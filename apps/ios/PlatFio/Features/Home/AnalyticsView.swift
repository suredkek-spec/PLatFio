import SwiftUI

struct AnalyticsView: View {
    var body: some View {
        ScrollView {
            PremiumCard {
                Text("Asset Analytics")
                    .font(.headline)
                Text("GA4 и Stripe metrics выводятся через backend analytics aggregation layer.")
                    .foregroundStyle(Palette.muted)
            }
            .padding(20)
        }
        .background(Palette.silk.ignoresSafeArea())
        .navigationTitle("Analytics")
    }
}
