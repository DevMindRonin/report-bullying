import { Button } from "react-bootstrap";
import { NotiDetailViewProps } from "@/types/notification.types";
import { Dictionary } from "@/app/i18n/types";

const NotiDetailView = ({
  dict,
  notification,
  onEditClick,
  navigate,
}: NotiDetailViewProps & { dict: Dictionary }) => {
  return (
    <div>
      <p>
        <strong>{dict.entityType}:</strong> {notification.entityType}
      </p>
      <p>
        <strong>{dict.entityName}:</strong> {notification.entityName}
      </p>
      <p>
        <strong>{dict.labelName}:</strong> {notification.whistlerName}
      </p>
      <p>
        <strong>{dict.labelAge}:</strong> {notification.whistlerAge}
      </p>
      {notification.whistlerFile &&
        "originalname" in notification.whistlerFile && (
          <p>
            <strong>{dict.file}:</strong>{" "}
            {notification.whistlerFile.originalname}
          </p>
        )}
      <div className="mt-3 d-flex justify-content-center">
        <Button
          variant="primary"
          className="mt-3"
          onClick={() => navigate.push("/notificationlist")}
        >
          {dict.back}
        </Button>
        <Button variant="primary" className="ms-3 mt-3" onClick={onEditClick}>
          {dict.edit}
        </Button>
      </div>
    </div>
  );
};

export default NotiDetailView;
