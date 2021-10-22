export const getNotificationShow = () => {
    const show = localStorage.getItem('notification');
    return show ? show : false;
}

export const saveNotificationShow = (show) => {
    localStorage.setItem('notification', show);
}
