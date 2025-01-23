export const isSlowConnection = (connectionType: string) => {
    const slowConnections = ["slow-2g", "2g", "3g"];
    return slowConnections.includes(connectionType);
}