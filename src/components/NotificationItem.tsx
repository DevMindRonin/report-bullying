import React from "react";
import { Button } from "react-bootstrap";
import { useRouter } from "next/navigation";
import { NotificationItemProps } from "@/types/notification.types";
import type { Dictionary } from "@/app/i18n/types";

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

const NotificationItem = ({
  notification,
  deleteNotification,
  dict,
  lang,
}: { dict: Dictionary; lang: string } & NotificationItemProps) => {
  const navigate = useRouter();

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
                  {dict.downloadFile}
                </a>
              )}
            <Button
              className="ms-2 ps-4 pe-4"
              variant="outline-primary"
              onClick={() =>
                navigate.push(`/${lang}/notificationdetail/${notification._id}`)
              }
            >
              Detail
            </Button>
            <Button
              className="ms-2 ps-3 pe-3"
              variant="outline-danger"
              onClick={() => deleteNotification(notification._id)}
            >
              {dict.deleteButton}
            </Button>
          </div>
        </div>
      </td>
    </tr>
  );
};

export default NotificationItem;
