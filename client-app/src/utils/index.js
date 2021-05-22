import moment from "moment";

export const formatDate = (date) => {
  const today = moment();
  const yesterday = moment().subtract(1, "day");

  const engagementDate = moment(date);

  if (moment(engagementDate).isSame(today, "day")) {
    //return HH:mm format date
    return moment(date).utcOffset("+00:00").format("HH:mm");
  } else if (moment(engagementDate).isSame(yesterday, "day")) {
    //return "Yesterday" string
    return "Yesterday";
  } else {
    //return string month-DD 
    return `${moment(date).utcOffset("+00:00").format("MMMM")} ${moment(date)
      .utcOffset("+00:00")
      .format("D")}`;
  }
};

export const openInNewTab = (url) => {
  //function open new tab
  const newWindow = window.open(url, "_blank", "noopener,noreferrer");
  if (newWindow) newWindow.opener = null;
};
