import { useState } from "react";
import styles from "./Memo.module.css";
import React from "react";
import { Link } from "react-router";
import { useStore } from "../../store";
import { MemoFormEdit } from "../MemosForm";
import { Modal } from "../Modal/Modal";
import pencilIcon from "../../assets/pencil.svg";
import trashIcon from "../../assets/trash.svg";

export function Memo(props) {
  const { title, content, id } = props;
  const [isEdit, setIsEdit] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const deleteMemo = useStore((store) => store.deleteMemo);

  const onDeleteMemo = (e) => {
    e.stopPropagation();
    setShowDeleteModal(true);
  };

  const confirmDelete = () => {
    deleteMemo(id);
    setShowDeleteModal(false);
  };

  const cancelDelete = () => {
    setShowDeleteModal(false);
  };

  return (
    <>
      <div className={styles.memo} data-test-id={id}>
        <div className={styles.header}>
          <Link to={`memo/${id}`} className={styles.title}>
            {title}
          </Link>
          <div className={styles.buttonGroup}>
            <button
              className={styles.editButton}
              onClick={() => setIsEdit((on) => !on)}
              title="Edit"
              data-test-id={`edit-button-${id}`}
            >
              <img className={styles.icon} src={pencilIcon} alt="Edit" />
            </button>
            <button
              className={styles.deleteButton}
              onClick={onDeleteMemo}
              title="Delete"
              data-test-id={`delete-button-${id}`}
            >
              <img className={styles.icon} src={trashIcon} alt="Delete" />
            </button>
          </div>
        </div>
        {!isEdit && <p className={styles.content}>{content}</p>}
        {isEdit && (
          <MemoFormEdit
            id={id}
            title={title}
            content={content}
            setIsEdit={setIsEdit}
          />
        )}
      </div>

      <Modal isOpen={showDeleteModal} onClose={cancelDelete}>
        <div className={styles.deleteModalContent}>
          <h3 className={styles.deleteModalTitle}>Delete memo?</h3>
          <p className={styles.deleteModalText}>
            Are you sure you want to delete the memo "{title}"? This action
            cannot be undone.
          </p>
          <div className={styles.deleteModalButtons}>
            <button
              className={styles.cancelButton}
              onClick={cancelDelete}
              data-test-id={`cancel-delete-button-${id}`}
            >
              Cancel
            </button>
            <button
              className={styles.confirmButton}
              onClick={confirmDelete}
              data-test-id={`confirm-delete-button-${id}`}
            >
              Delete
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
}
