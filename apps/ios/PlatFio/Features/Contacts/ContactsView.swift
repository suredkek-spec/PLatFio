import SwiftUI

struct ContactsView: View {
    @EnvironmentObject private var router: AppRouter

    var body: some View {
        ScrollView {
            VStack(spacing: 20) {
                PremiumCard {
                    Text("Contacts")
                        .font(.headline)
                    Text("Telegram: @platfio\nEmail: concierge@platfio.com\nPhone: +371 20 480 880")
                        .foregroundStyle(Palette.muted)
                }
                PremiumCard {
                    Button("Оставить заявку") {
                        router.push(.apply, in: .contacts)
                    }
                    .buttonStyle(.borderedProminent)
                    .tint(Palette.goldDeep)
                }
            }
            .padding(20)
        }
        .background(Palette.silk.ignoresSafeArea())
        .navigationTitle("Контакты")
    }
}
