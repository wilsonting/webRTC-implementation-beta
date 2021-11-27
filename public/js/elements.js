//show modal of incoming call
export const getIncomingCallDialog = (
  callTypeInfo,
  acceptCallHandler,
  rejectCallHandler
) => {
  console.log("getting incoming call dialog");
  const dialog = document.createElement("div");
  //class defined in style.css
  dialog.classList.add("dialog_wrapper");
  const dialogContent = document.createElement("div");
  dialogContent.classList.add("dialog_content");
  dialog.appendChild(dialogContent);

  //create title
  const title = document.createElement("p");
  title.classList.add("dialog_title");
  title.innerHTML = `Incoming ${callTypeInfo} Call`;

  //create image element
  const imageContainer = document.createElement("div");
  imageContainer.classList.add("dialog_image_container");
  const image = document.createElement("img");
  const avatarImagePath = "../utils/images/dialogAvatar.png";
  image.src = avatarImagePath;
  imageContainer.appendChild(image);

  //create button container (Accept call/ Reject Call)
  const buttonContainer = document.createElement("div");
  buttonContainer.classList.add("dialog_button_container");
  //Accept Call Button
  const acceptCallButton = document.createElement("button");
  acceptCallButton.classList.add("dialog_accept_call_button");
  const acceptCallImg = document.createElement("img");
  acceptCallImg.classList.add("dialog_button_image");
  const acceptCallImgPath = "../utils/images/acceptCall.png";
  acceptCallImg.src = acceptCallImgPath;
  acceptCallButton.append(acceptCallImg);

  buttonContainer.appendChild(acceptCallButton);
  //Reject Call Button
  const rejectCallButton = document.createElement("button");
  rejectCallButton.classList.add("dialog_reject_call_button");
  const rejectCallImg = document.createElement("img");
  rejectCallImg.classList.add("dialog_button_image");
  const rejectCallImgPath = "../utils/images/rejectCall.png";
  rejectCallImg.src = rejectCallImgPath;
  rejectCallButton.append(rejectCallImg);
  buttonContainer.appendChild(rejectCallButton);

  dialogContent.appendChild(title);
  dialogContent.appendChild(imageContainer);
  dialogContent.appendChild(buttonContainer);

  acceptCallButton.addEventListener("click", () => {
    acceptCallHandler();
  });

  rejectCallButton.addEventListener("click", () => {
    rejectCallHandler();
  });
  return dialog;
};

export const getCallingDialog = (rejectCallHandler) => {
  const dialog = document.createElement("div");
  //class defined in style.css
  dialog.classList.add("dialog_wrapper");
  const dialogContent = document.createElement("div");
  dialogContent.classList.add("dialog_content");
  dialog.appendChild(dialogContent);

  //create title
  const title = document.createElement("p");
  title.classList.add("dialog_title");
  title.innerHTML = `Calling...`;

  //create image element
  const imageContainer = document.createElement("div");
  imageContainer.classList.add("dialog_image_container");
  const image = document.createElement("img");
  const avatarImagePath = "../utils/images/dialogAvatar.png";
  image.src = avatarImagePath;
  imageContainer.appendChild(image);

  //create button container (Reject Call)
  const buttonContainer = document.createElement("div");
  buttonContainer.classList.add("dialog_button_container");

  //Reject Call Button
  const hangUpCallButton = document.createElement("button");
  hangUpCallButton.classList.add("dialog_reject_call_button");
  const hangUpCallImg = document.createElement("img");
  hangUpCallImg.classList.add("dialog_button_image");
  const hangUpCallImgPath = "../utils/images/rejectCall.png";
  hangUpCallImg.src = hangUpCallImgPath;
  hangUpCallButton.append(hangUpCallImg);
  buttonContainer.appendChild(hangUpCallButton);

  dialogContent.appendChild(title);
  dialogContent.appendChild(imageContainer);
  dialogContent.appendChild(hangUpCallButton);

  return dialog;
};

export const getInfoDialog = (dialogTitle, dialogDescription) => {
  const dialog = document.createElement("div");
  //class defined in style.css
  dialog.classList.add("dialog_wrapper");
  const dialogContent = document.createElement("div");
  dialogContent.classList.add("dialog_content");
  dialog.appendChild(dialogContent);

  //create title
  const title = document.createElement("p");
  title.classList.add("dialog_title");
  title.innerHTML = dialogTitle;

  //create image element
  const imageContainer = document.createElement("div");
  imageContainer.classList.add("dialog_image_container");
  const image = document.createElement("img");
  const avatarImagePath = "../utils/images/dialogAvatar.png";
  image.src = avatarImagePath;
  imageContainer.appendChild(image);

  const description = document.createElement("p");
  description.classList.add("dialog_description");
  description.innerHTML = dialogDescription;

  dialogContent.appendChild(title);
  dialogContent.appendChild(imageContainer);
  dialogContent.appendChild(description);

  return dialog;
};
