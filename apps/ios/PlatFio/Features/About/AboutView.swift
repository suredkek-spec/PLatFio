import SwiftUI

struct AboutView: View {
    @EnvironmentObject private var router: AppRouter

    var body: some View {
        ScrollView {
            VStack(spacing: 20) {
                PremiumCard {
                    Text("О нас")
                        .font(.headline)
                    Text("Boutique digital wealth studio для продажи, упаковки и редизайна web assets.")
                        .foregroundStyle(Palette.muted)
                }
                PremiumCard {
                    Button("Процесс") { router.push(.process, in: .about) }
                    Button("Сервисы") { router.push(.services, in: .about) }
                }
            }
            .padding(20)
        }
        .background(Palette.silk.ignoresSafeArea())
        .navigationTitle("О нас")
    }
}
