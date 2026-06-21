import Foundation

final class APIClient {
    static let shared = APIClient()
    private init() {}

    let baseURL = URL(string: "http://localhost:8080/api")!
}
