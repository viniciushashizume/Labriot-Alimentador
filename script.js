document.addEventListener("DOMContentLoaded", () => {
    const iframe = document.getElementById("nodeRedDashboard");

    // Add functionality to handle errors or dynamic URL changes if needed
    iframe.onerror = () => {
        console.error("Failed to load the Node-RED dashboard. Check the URL or server.");
    };
});
