---
title: Components
sidebar_position: 1
---

```css title="Loading spinner"
.spinner {
  display: inline-block;
  width: 80px;
  height: 80px;
}

.spinner:after {
  content: " ";
  display: block;
  width: 64px;
  height: 64px;
  margin: 8px;
  border-radius: 50%;
  border: 6px solid green;
  border-color: green transparent green transparent;
  animation: spinner 1.2s linear infinite;
}

@keyframes spinner {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
```

## React Error modal

```js title="ErrorModal.js"
import React from "react";
import ReactDOM from "react-dom";
import styles from "./ErrorModal.module.css";
import Button from "./Button";

const OverLay = (props) => {
  return (
    <div className={styles.backdrop} onClick={props.okayClicked}>
      <div className={`${styles.board} ${styles.modal}`}>
        <header className={styles.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={styles.content}>
          <p>{props.message}</p>
        </div>

        <footer className={styles.action}>
          <Button onClick={props.okayClicked}>Okay</Button>
        </footer>
      </div>
    </div>
  );
};

const ErrorModal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <OverLay
          title={props.title}
          message={props.message}
          okayClicked={props.okayClicked}
        />,
        document.querySelector("#modal-root")
      )}
    </>
  );
};

export default ErrorModal;
```

```css title="ErrorModal.module.css"
.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 10;
  background: rgba(0, 0, 0, 0.75);
}

.board {
  background: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 10px;
}

.modal {
  position: fixed;
  top: 30vh;
  left: 10%;
  width: 80%;
  z-index: 100;
  overflow: hidden;
}

.header {
  background: red;
  padding: 1rem;
}

.header h2 {
  margin: 0;
  color: white;
}

.content {
  padding: 1rem;
}

.actions {
  padding: 1rem;
  display: flex;
  justify-content: flex-end;
}

@media (min-width: 600px) {
  .modal {
    left: calc(50% - 20rem);
    width: 40rem;
  }
}
```

```js title="AddTask.js"
const AddTask = (props) => {
  const [task, setTask] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (task.length === 0) {
      setError(true);
    }

    setTask("");
  };

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const handleModalOkay = () => {
    setError(false);
  };

  return (
    <>
      {error && (
        <ErrorModal
          title="Error Encountered"
          message="there is an Error with your input"
          okayClicked={handleModalOkay}
        ></ErrorModal>
      )}

      <form onSubmit={handleSubmit}>
        <div className="flex flex-row">
          <div className="col-3">
            <label className="col-3" htmlFor="input-task">
              Task
            </label>
            <input
              className="col-3 border"
              id="input-task"
              value={task}
              type="text"
              onChange={handleChange}
            />
            <div className="col-3"></div>
          </div>

          <div className="flex flex-row">
            <div className="col-3"></div>
            <Button className="col-6" type="submit">
              Add Task
            </Button>
            <div className="col-3"></div>
          </div>
        </div>
      </form>
    </>
  );
};
```
