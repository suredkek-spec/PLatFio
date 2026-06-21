import SwiftUI

struct HomeView: View {
    @EnvironmentObject private var router: AppRouter

    var body: some View {
        ScrollView {
            VStack(spacing: 20) {
                PremiumCard {
                    Text("Home")
                        .font(.caption)
                        .foregroundStyle(Palette.muted)
                    Text("Премиальная витрина продажи сайтов")
                        .font(.title.bold())
                    Text("24/h Live Market Activity, curated catalog и escrow-first checkout flow.")
                        .foregroundStyle(Palette.muted)
                }

                PremiumCard {
                    Text("Что мы можем для вас сделать")
                        .font(.headline)
                    Text("Luxury web design, acquisition packaging, analytics и безопасная передача актива.")
                        .foregroundStyle(Palette.muted)
                    HStack {
                        Button("Catalog") { router.push(.catalog) }
                        Button("Analytics") { router.push(.analytics) }
                        Button("Checkout") { router.push(.checkout) }
                    }
                    .buttonStyle(.bordered)
                    .tint(Palette.goldDeep)
                }
            }
            .padding(20)
        }
        .background(Palette.silk.ignoresSafeArea())
        .navigationTitle("Главная")
    }
}
