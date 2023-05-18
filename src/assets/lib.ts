export function requestBackgroundChange(): void {
    let request = new CustomEvent('requestBackgroundChange')
    document.dispatchEvent(request)
}