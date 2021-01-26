import React, { useCallback, useEffect, useRef, useState } from "react";
import useKeypress from "../app/hooks/useKeypress";
import useOnClickOutside from "../app/hooks/useOnClickOutside";
import "../styles/InlineEdit.css";
import DOMPurify from "dompurify";
import useKeyPress from "../app/hooks/useKeypress";

function InlineEdit(props) {
  const [isInputActive, setIsInputActive] = useState(false);
  const [input, setInput] = useState("");

  const enter = useKeyPress("Enter");
  const esc = useKeypress("Escape");

  const inputRef = useRef(null);
  const textRef = useRef(null);
  const wrapperRef = useRef(null);

  const { onSetText } = props;

  useOnClickOutside(wrapperRef, () => {
    if (isInputActive) {
      props.onSetText(input);
      setIsInputActive(false);
    }
  });

  const onEnter = useCallback(() => {
    if (enter) {
      onSetText(input);
      setIsInputActive(false);
    }
  }, [enter, input, onSetText]);

  const onEsc = useCallback(() => {
    if (esc) {
      setInput(props.text);
      setIsInputActive(false);
    }
  }, [esc, props.text]);

  useEffect(() => {
    if (isInputActive) {
      onEnter();
      onEsc();
    }
  }, [onEnter, onEsc, isInputActive]);

  useEffect(() => {
    if (isInputActive) {
      inputRef.current.focus();
    }
  }, [isInputActive]);

  const handleInputChange = useCallback(
    (e) => {
      setInput(DOMPurify.sanitize(e.target.value));
    },
    [setInput]
  );

  const handleSpanClick = useCallback(() => setIsInputActive(true), [
    setIsInputActive,
  ]);

  return (
    <span className="inline-text" ref={wrapperRef}>
      <span
        ref={textRef}
        onClick={handleSpanClick}
        className={`inline-text_copy inline-text_copy--${
          !isInputActive ? "active" : "hidden"
        } `}
      >
        {props.text}
      </span>
      <input
        ref={inputRef}
        value={input}
        onChange={handleInputChange}
        className={`inlineText_input inlineText_input--${
          isInputActive ? "active" : "hidden"
        }`}
      />
    </span>
  );
}

export default InlineEdit;
