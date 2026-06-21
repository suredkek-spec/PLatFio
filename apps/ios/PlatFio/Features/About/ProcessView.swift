import SwiftUI

struct ProcessView: View {
    var body: some View {
        ScrollView {
            PremiumCard {
                Text("Процесс")
                    .font(.headline)
                Text("Discovery → Repositioning → Data room → Escrow close.")
                    .foregroundStyle(Palette.muted)
            }
            .padding(20)
        }
        .background(Palette.silk.ignoresSafeArea())
        .navigationTitle("Процесс")
    }
}
