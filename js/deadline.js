function combineDateTime(date, time) {

    if (!date) return null;

    if (!time) time = "23:59";

    return new Date(date + "T" + time).getTime();

}

function formatDeadline(timestamp) {

    if (!timestamp) return "";

    const now = Date.now();

    const diff = timestamp - now;

    if (diff <= 0) {

        return "Expired";

    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));

    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

    return `${days}d ${hours}h ${minutes}m`;

}