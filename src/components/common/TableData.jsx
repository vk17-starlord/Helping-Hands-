import React from "react";
import { verifyUser } from "../../api/AdminApi";
import { downloadFile } from "../../utils";

function TableData({ Users, setUser }) {
  const updateStatus = async (id) => {
    const res = await verifyUser(id);
    if (res.success) {
      setUser();
    }
  };

  return (
    <div className="bg-gray-50/50 w-full pb-5">
      {Users?.map((user) => {
        return (
          <div
            key={user._id}
            className="grid border-gray-50 border-1   w-full grid-cols-5"
          >
            <div className="col flex justify-start items-center px-7 py-2.5">
              <div className="flex w-full justify-start items-center">
                <img
                  className="w-10 h-10 mr-5 object-top rounded-full object-cover "
                  src={
                    user.photo === "no-file"
                      ? "https://cdn.dribbble.com/users/594316/screenshots/16557702/media/d77aa195b67473edb6c386b355126078.jpg"
                      : user.photo
                  }
                  alt=""
                />
                <h1 className="font-Poppins text-gray-600 font-medium text-sm">
                  {user?.name}
                </h1>
              </div>
            </div>
            <div className="col flex justify-start items-center text-left px-7 py-2.5">
              <h1 className="font-Poppins text-gray-600  text-sm">
                {user?.email}
              </h1>
            </div>
            <div className="col flex justify-start items-center text-left px-7 py-2.5">
              {user.certificate === "no-file" ? (
                <span className="text-red-600">No Certificate Uploaded</span>
              ) : (
                <button
                  className={"inline-flex justify-center items-center"}
                  onClick={() => {
                    downloadFile(user?.certificate);
                  }}
                >
                  <i class="bx bxs-cloud-download pr-2"></i> View Certificate
                </button>
              )}
            </div>
            <div className="col cursor-pointer text-left px-7 py-2.5">
              {user.isVerified ? (
                <div className="text-greenDark font-medium text-center  bg-greenLight px-10 py-2.5 rounded-md">
                  Verified
                </div>
              ) : (
                <div className="text-reddark font-medium text-center  bg-redlight px-10 py-2.5 rounded-md">
                  Not Verified
                </div>
              )}
            </div>

            <div className="col">
              <button
                onClick={() => {
                  updateStatus(user._id);
                }}
                class="text-white w-9/12 my-2 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center inline-flex items-center justify-center "
                type="button"
              >
                Verify User <i class="bx bxs-badge-check mx-2 text-xl"></i>
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default TableData;
