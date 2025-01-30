export function showNotification(message, type = "success") {
  const notificationsContainer = document.getElementById("notifications");
  const notification = document.createElement("div");
  notification.className = `p-3 text-white rounded shadow ${
    type === "success" ? "bg-green-500" : "bg-red-500"
  } transition transform duration-300 opacity-0 translate-y-2`;
  notification.textContent = message;

  notificationsContainer.appendChild(notification);

  setTimeout(
    () => notification.classList.remove("opacity-0", "translate-y-2"),
    10
  );

  setTimeout(() => {
    notification.classList.add("opacity-0", "translate-y-2");
    setTimeout(() => notification.remove(), 300);
  }, 3000);
}

export function setNotification(message, type = "success") {
  localStorage.setItem("notifications", JSON.stringify({ message, type }));
}

export function handleNotifications() {
  const notificationData = JSON.parse(localStorage.getItem("notifications"));

  if (notificationData) {
    const { message, type } = notificationData;
    showNotification(message, type);
    localStorage.removeItem("notifications");
  }
}
