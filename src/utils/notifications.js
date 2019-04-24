let permission;

export const getPermission = () => {
  /* eslint-disable */
  switch ( Notification.permission.toLowerCase() ) {
    case "granted":
      permission = true;
      break;

    case "denied":
      permission = false;
      break;

    case "default":
      Notification.requestPermission( result => permission = result );
  }
  /* eslint-enable */
}

export const notify = (id) => {
  if (permission) {
    return new Notification("TX Confirmed", {
      body: id
    });
  }
}