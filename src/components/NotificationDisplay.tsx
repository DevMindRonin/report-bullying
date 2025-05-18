import { Button } from "react-bootstrap";
import { NotiDetailViewProps } from "@/types/types";
import { t } from "i18next";

const NotiDetailView = ({
  notification,
  onEditClick,
  navigate,
}: NotiDetailViewProps) => {
  return (
    <div>
      <p>
        <strong>Typ entity:</strong> {notification.entityType}
      </p>
      <p>
        <strong>{t("entityName")}:</strong> {notification.entityName}
      </p>
      <p>
        <strong>{t("labelName")}:</strong> {notification.whistlerName}
      </p>
      <p>
        <strong>{t("labelAge")}:</strong> {notification.whistlerAge}
      </p>
      {notification.whistlerFile &&
        "originalname" in notification.whistlerFile && (
          <p>
            <strong>{t("file")}:</strong>{" "}
            {notification.whistlerFile.originalname}
          </p>
        )}
      <div className="mt-3 d-flex justify-content-center">
        <Button
          variant="primary"
          className="mt-3"
          onClick={() => navigate.push("/notificationlist")}
        >
          {t("back")}
        </Button>
        <Button variant="primary" className="ms-3 mt-3" onClick={onEditClick}>
          {t("edit")}
        </Button>
      </div>
    </div>
  );
};

export default NotiDetailView;
