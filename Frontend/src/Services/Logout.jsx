export default function Logout() {
    localStorage.removeItem("user")
    localStorage.removeItem("token")
    window.location = "/welcome"
}