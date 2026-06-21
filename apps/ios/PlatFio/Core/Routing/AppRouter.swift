import Foundation
import SwiftUI

@MainActor
final class AppRouter: ObservableObject {
    @Published var activeTab: TabIdentifier = .home
    @Published var homePath: [AppRoute] = []
    @Published var aboutPath: [AppRoute] = []
    @Published var contactsPath: [AppRoute] = []

    private let renderers: [AppRoute: AnyViewFactory] = [
        .welcome: { AnyView(WelcomeView()) },
        .home: { AnyView(HomeView()) },
        .catalog: { AnyView(CatalogView()) },
        .analytics: { AnyView(AnalyticsView()) },
        .checkout: { AnyView(CheckoutView()) },
        .about: { AnyView(AboutView()) },
        .process: { AnyView(ProcessView()) },
        .services: { AnyView(ServicesView()) },
        .contacts: { AnyView(ContactsView()) },
        .apply: { AnyView(ApplyView()) }
    ]

    func switchTab(_ tab: TabIdentifier) {
        activeTab = tab
    }

    func push(_ route: AppRoute, in tab: TabIdentifier? = nil) {
        let targetTab = tab ?? activeTab
        activeTab = targetTab

        switch targetTab {
        case .home:
            homePath.append(route)
        case .about:
            aboutPath.append(route)
        case .contacts:
            contactsPath.append(route)
        }
    }

    @ViewBuilder
    func renderView(for route: AppRoute) -> some View {
        if let view = renderers[route]?() {
            view
        } else {
            AnyView(HomeView())
        }
    }
}

typealias AnyViewFactory = () -> AnyView
