/* eslint-disable no-undef */
const showDate = () => {
  window.addEventListener('load', () => {
    const { DateTime } = luxon;
    document.getElementById('date-time').innerHTML = DateTime.now().toLocaleString(DateTime.DATETIME_FULL);
  });
};

export default showDate;