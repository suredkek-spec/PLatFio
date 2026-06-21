import SwiftUI

struct RootView: View {
    @EnvironmentObject private var router: AppRouter

    var body: some View {
        TabView(selection: $router.activeTab) {
            NavigationStack(path: $router.homePath) {
                router.renderView(for: .welcome)
                    .navigationDestination(for: AppRoute.self) { route in
                        router.renderView(for: route)
                    }
            }
            .tabItem { Label("Главная", systemImage: "house") }
            .tag(TabIdentifier.home)

            NavigationStack(path: $router.aboutPath) {
                router.renderView(for: .about)
                    .navigationDestination(for: AppRoute.self) { route in
                        router.renderView(for: route)
                    }
            }
            .tabItem { Label("О нас", systemImage: "building.2") }
            .tag(TabIdentifier.about)

            NavigationStack(path: $router.contactsPath) {
                router.renderView(for: .contacts)
                    .navigationDestination(for: AppRoute.self) { route in
                        router.renderView(for: route)
                    }
            }
            .tabItem { Label("Контакты", systemImage: "message") }
            .tag(TabIdentifier.contacts)
        }
        .tint(Palette.goldDeep)
        .background(Palette.silk.ignoresSafeArea())
    }
}
