import React from "react";
import { uploadCertificate, uploadProfile } from "../../api/UserApi";
import { downloadFile } from "../../utils";
import ImageHover from "../common/ImageHover";
import UploadFile from "../common/UploadFile";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAuthState } from "../../context/AuthContext";

function ProfileCard() {
  const notify = (msg) => toast(msg);

  const { auth } = useAuthState();
  const { user } = auth;

  console.log(user);

  const handleImage = async (ev) => {
    const file = ev;

    await uploadProfile(file, user?._id);

    notify("Reload Page To See Updates");
  };

  const handleCertificate = async (ev) => {
    const file = ev.target.files[0];
    await uploadCertificate(file, user?._id);
    notify("Reload Page To See Updates");
  };

  return (
    <div className="w-full bg-white pb-5  shadow-lg rounded-md">
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className="profile-card flex justify-center items-center min-h-[20vh]  rounded-md w-full">
        <ImageHover
          keyword="no-file"
          handler={handleImage}
          photo={user.photo}
        />
      </div>
      <div className="w-10/12 mx-auto pt-5 px-5">
        <h1 className="font-Poppins text-[15px] text-gray-500 flex justify-start items-center   my-2 text-left">
          <i class="mr-2 bx bxs-user-pin"></i> {user?.name}
        </h1>
        
        <h1 className="font-Poppins text-[15px] text-gray-500 flex justify-start items-center   my-2 text-left">
          <i class="bx bxl-gmail pr-2 "></i> {user?.email}
        </h1>
        
        <h1 className="font-Poppins text-[15px] text-gray-500 flex justify-start items-center   my-2 text-left">
        <i class='bx bx-accessibility pr-2 text-lg'></i> {user?.disability}
        </h1>
        
 
        <h1 className="cursor-pointer font-Poppins text-sm text-gray-500 flex justify-start items-center   my-2 text-left">
          <i class="bx bxs-file-doc pr-2 text-red-500"></i>{" "}
          {user?.certificate === "no-file" ? (
            <UploadFile
              label={"Upload Certificate"}
              onChange={handleCertificate}
              accept={".pdf"}
            ></UploadFile>
          ) : (
            <span
              onClick={() => {
                downloadFile(user?.certificate);
              }}
              className="text-blue-500 underline"
            >
              {" "}
              Download File{" "}
            </span>
          )}{" "}
        </h1>
      </div>
    </div>
  );
}

export default ProfileCard;
