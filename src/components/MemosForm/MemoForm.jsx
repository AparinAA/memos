import { useState, useEffect } from "react";
import styles from "./MemosForm.module.css";
import React from "react";
import { MemoService } from "../../services/memo";
import { useVoiceInput } from "../../shared/hooks";

export function MemoForm({ actionMemo, initContent = "" }) {
  const [content, setContent] = useState(initContent);
  const [error, setError] = useState("");

  const { transcript, isListening, startListening, stopListening } =
    useVoiceInput();

  useEffect(() => {
    if (transcript) {
      setContent((prev) => prev + transcript);
    }
  }, [transcript]);

  const handleChange = (event) => {
    setContent(event.target.value);
  };

  const handleVoiceInput = () => {
    if (isListening) {
      stopListening();
    } else {
      startListening();
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!MemoService.verify({ content })) {
      setError("Please add content to the memo");
      return;
    }

    if (isListening) {
      stopListening();
    }

    actionMemo({ content });
    setContent(initContent);
    setError("");
  };

  return (
    <form onSubmit={handleSubmit} className={styles.memosForm}>
      {Boolean(error) && <span className={styles.error}>{error}</span>}
      <textarea
        placeholder="Memo content..."
        className={styles.inputField}
        value={content}
        onChange={handleChange}
      />
      <div className={styles.buttonContainer}>
        <button
          type="button"
          onClick={handleVoiceInput}
          className={`${styles.voiceButton} ${isListening ? styles.listening : ""}`}
        >
          {isListening ? "🛑 Stop recording" : "🎤 Record voice"}
        </button>
        <button
          type="submit"
          disabled={!content.trim()}
          className={styles.saveButton}
        >
          Save memo
        </button>
      </div>
      {isListening && (
        <p className={styles.listeningIndicator}>🎤 Listening... Speak now</p>
      )}
    </form>
  );
}
