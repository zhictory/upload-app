const copy = (options = "") => {
  let text, successText, errorText, success, error;

  if (options === "") {
    return false;
  }

  if (typeof options === "string") {
    text = options;
  } else {
    text = options["text"];
    successText = options["successText"];
    errorText = options["errorText"];
    success = options["success"];
    error = options["error"];
  }

  const input = document.createElement("input");
  input.setAttribute("readonly", "readonly");
  input.setAttribute("value", text);
  document.body.appendChild(input);
  input.select(); // 兼容 pc
  input.setSelectionRange(0, 9999); // 兼容 ios

  if (document.execCommand("copy")) {
    document.execCommand("copy");
    typeof success === "function" && success();
  } else {
    typeof error === "function" && error();
  }

  document.body.removeChild(input);
};

export default copy;
