import SwiftUI

struct ServicesView: View {
    var body: some View {
        ScrollView {
            PremiumCard {
                Text("Сервисы")
                    .font(.headline)
                Text("Website acquisitions, premium design systems, analytics instrumentation, conversion architecture.")
                    .foregroundStyle(Palette.muted)
            }
            .padding(20)
        }
        .background(Palette.silk.ignoresSafeArea())
        .navigationTitle("Сервисы")
    }
}
