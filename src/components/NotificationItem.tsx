import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { NotificationType } from "../types/types";
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

interface NotificationItemProps {
  notification: NotificationType;
  deleteNotification: (id: string) => void;
}

const NotificationItem: React.FC<NotificationItemProps> = ({
  notification,
  deleteNotification,
}) => {
  const navigate = useNavigate();

  return (
    <tr>
      <td>
        <div className="d-flex justify-content-between align-items-center">
          <div>{notification.whistlerName}</div>
          <div className="ms-5">
            {notification.whistlerFile &&
              "originalname" in notification.whistlerFile && (
                <a
                  href={`${API_BASE_URL}/api/notifications/${notification._id}/file`}
                  download={notification.whistlerFile.originalname}
                  className="me-3"
                >
                  Stáhnout soubor
                </a>
              )}
            <Button
              className="ms-2 ps-4 pe-4"
              variant="outline-primary"
              onClick={() =>
                navigate(`/notificationdetail/${notification._id}`)
              }
            >
              Detail
            </Button>
            <Button
              className="ms-2 ps-3 pe-3"
              variant="outline-danger"
              onClick={() => deleteNotification(notification._id)}
            >
              Smazat
            </Button>
          </div>
        </div>
      </td>
    </tr>
  );
};

export default NotificationItem;
