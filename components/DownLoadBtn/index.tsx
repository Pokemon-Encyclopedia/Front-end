import { useRouter } from "next/router";
import Image from "next/image";
import { useEffect, useState } from "react";

const DownLoadBtn = () => {
    const router = useRouter();
    const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
    const [isStandalone, setIsStandalone] = useState<boolean>(false);
    const [installClicked, setInstallClicked] = useState<boolean>(false);

    
    useEffect(() => {
        const standalone = window.matchMedia("(display-mode: standalone)").matches;
    
        if (standalone) {
          setIsStandalone(true);
        }
      }, []);

      useEffect(() => {
        const beforeinstallpomptListner = (e: any) => {
          e.preventDefault();
          setDeferredPrompt(e);
        };
    
        window.addEventListener("beforeinstallprompt", beforeinstallpomptListner);
    
        return () => {
          window.removeEventListener(
            "beforeinstallprompt",
            beforeinstallpomptListner
          );
        };
      }, []);

      
    const onInstallClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        setInstallClicked(true);

        if (!deferredPrompt) {
        return;
        }

        deferredPrompt.prompt();

        await deferredPrompt.userChoice;
    };


    return (
        <>
              {!isStandalone && !installClicked && (

        <button
          onClick={onInstallClick}
          style={{
            position: "fixed",
            top: "30px",
            right: "30px",
            borderRadius: "5px",
          }}
        >
          <div style={{ width: "30px", height: "30px", opacity: 0.6 }}>
          <Image
              src="/download-solid.svg"
              width={10}
              height={10}
              layout="responsive"
              objectFit="contain"
              alt="앱 설치"
            />
          </div>
        </button>
        )}

        </>
    )
}

export default DownLoadBtn;