import React from "react";
import { Table, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { NotificationListProps } from "../types/types";
import NotificationItem from "../components/NotificationItem";

const NotificationList = ({
  notifications,
  deleteNotification,
}: NotificationListProps) => {
  const navigate = useNavigate();

  return (
    <div className="text-center">
      <h2>Administrace oznámení</h2>
      <Table responsive className="mt-5">
        <tbody>
          {notifications.map((notification) => (
            <NotificationItem
              key={notification._id}
              notification={notification}
              deleteNotification={deleteNotification}
            />
          ))}
        </tbody>
      </Table>

      <Button variant="primary" className="mt-3" onClick={() => navigate("/")}>
        Vložit nové oznámení
      </Button>
    </div>
  );
};

export default NotificationList;
