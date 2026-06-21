import SwiftUI

struct ApplyView: View {
    @State private var name = ""
    @State private var phone = ""
    @State private var brief = ""

    var body: some View {
        ScrollView {
            PremiumCard {
                Text("Оставить заявку")
                    .font(.headline)
                TextField("Имя", text: $name)
                    .textFieldStyle(.roundedBorder)
                TextField("Телефон", text: $phone)
                    .textFieldStyle(.roundedBorder)
                TextField("ТЗ", text: $brief, axis: .vertical)
                    .textFieldStyle(.roundedBorder)
                Button("Отправить") {}
                    .buttonStyle(.borderedProminent)
                    .tint(Palette.goldDeep)
            }
            .padding(20)
        }
        .background(Palette.silk.ignoresSafeArea())
        .navigationTitle("Заявка")
    }
}
