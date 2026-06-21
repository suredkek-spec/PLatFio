import SwiftUI

struct CatalogView: View {
    var body: some View {
        ScrollView {
            PremiumCard {
                Text("Asset Catalog")
                    .font(.headline)
                Text("Фильтры по нише, цене, трафику и ROI подключаются к backend `/api/assets`.")
                    .foregroundStyle(Palette.muted)
            }
            .padding(20)
        }
        .background(Palette.silk.ignoresSafeArea())
        .navigationTitle("Catalog")
    }
}
