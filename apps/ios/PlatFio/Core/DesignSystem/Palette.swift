import SwiftUI

enum Palette {
    static let silk = Color(hex: "F9F9FB")
    static let gold = Color(hex: "D4AF37")
    static let goldDeep = Color(hex: "C5A059")
    static let text = Color(hex: "12131A")
    static let muted = Color(hex: "656779")
}

extension Color {
    init(hex: String) {
        let hex = hex.trimmingCharacters(in: CharacterSet.alphanumerics.inverted)
        var int: UInt64 = 0
        Scanner(string: hex).scanHexInt64(&int)
        let red = Double((int >> 16) & 0xff) / 255
        let green = Double((int >> 8) & 0xff) / 255
        let blue = Double(int & 0xff) / 255
        self.init(.sRGB, red: red, green: green, blue: blue, opacity: 1)
    }
}
