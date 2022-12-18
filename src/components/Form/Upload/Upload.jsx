import styles from './Upload.module.scss';

function Upload() {
  return (
    <div>
      <div className={styles.upload}>
        <div className={styles.uploadButton}>
          <span className={styles.uploadButtonText}>Upload</span>
        </div>
        <div className={styles.uploadLabel}>
          <span className={styles.uploadLabelText}>Upload your photo</span>
        </div>
      </div>
    </div>
  );
}

export default Upload;
