import { useEffect, useState } from "react";
import { QrReader } from "react-qr-reader";
import { useSnackbar, useTimeout } from "../../hooks";
import Button from "../button";
import Snackbar from "../snackbar";

export const Scanner = (props: any) => {
  const [data, setData] = useState("No data");
  const { handleClose, open, setOpen, message, setMessage } = useSnackbar();
  const [loading, setLoading] = useState(true);
  const timeout = useTimeout(() => {
    setLoading(false);
  }, 1000);

  useEffect(() => {
    timeout;
  }, []);

  const _onChangeFacingMode = () => {
    let mode = getFacingMode() === "environment" ? "user" : "environment";
    localStorage.setItem("facingMode", mode);
    window.location.reload();
  };

  const getFacingMode = () => {
    return localStorage.getItem("facingMode") || "environment";
  };

  return (
    <>
      <Snackbar message={message} open={open} onClose={handleClose} />
      <Button onClick={() => _onChangeFacingMode()}>
        {getFacingMode() !== "environment" ? "Back Camera" : "Front Camera"}
      </Button>
      <QrReader
        ViewFinder={(props: any) => {
          return (
            <>
              {loading ? (
                <>Loading...</>
              ) : (
                <video id="qr-video" width={"250px"} />
              )}
            </>
          );
        }}
        onResult={(result: any, error: any) => {
          if (!!result) {
            setData(result?.text);
          }

          if (!!error) {
            let _error = error?.toString() || "";
            let message = "Something error!";
            if (
              _error.includes("DOMException") ||
              _error.includes("NotAllowedError")
            ) {
              message = "Camera access denied!";
            } else if (_error.includes("e2")) {
              message = "QR code not found!";
            }

            setMessage(message);
            setOpen(true);
            console.info("QR Code Error", error, _error);
          }
        }}
        constraints={{
          facingMode: getFacingMode(),
        }}
        scanDelay={1000}
        // videoId={"video"}
        // videoContainerStyle={{
        //   width: "100%",
        //   height: "100%",
        // }}
        // videoStyle={{
        //   width: "100%",
        //   height: "100%",
        // }}
      />
      <p>{data}</p>
    </>
  );
};
