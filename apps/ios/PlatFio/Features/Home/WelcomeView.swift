import SwiftUI

struct WelcomeView: View {
    @EnvironmentObject private var router: AppRouter

    var body: some View {
        ScrollView {
            VStack(spacing: 24) {
                PremiumCard {
                    Text("Curated website acquisitions")
                        .font(.caption)
                        .foregroundStyle(Palette.muted)
                    Text("Тихая роскошь для цифровых активов")
                        .font(.system(size: 42, weight: .bold, design: .rounded))
                        .foregroundStyle(Palette.text)
                    Text("PLatFio помогает покупать, продавать и создавать сайты как premium digital assets.")
                        .foregroundStyle(Palette.muted)
                    Button("Войти в платформу") {
                        router.push(.home, in: .home)
                    }
                    .buttonStyle(.borderedProminent)
                    .tint(Palette.goldDeep)
                }
            }
            .padding(20)
        }
        .background(Palette.silk.ignoresSafeArea())
    }
}
