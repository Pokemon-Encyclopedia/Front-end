import { useRouter } from "next/router";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { installClickedState } from "../../Util/recoil/state";
import styled from "@emotion/styled";

const DownLoadBtn = () => {
    const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
    const [isStandalone, setIsStandalone] = useState<boolean>(false);
    const [installClicked, setInstallClicked] = useRecoilState<boolean>(installClickedState);
    const router = useRouter();

    
    useEffect(() => {
        const standalone = window.matchMedia("display-mode: standalone").matches;
        
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
        router.push("/install");
        return;
        }

        deferredPrompt.prompt();

        await deferredPrompt.userChoice;
    };


    return (
        <>
        {!isStandalone && !installClicked && (
        <Button
          onClick={onInstallClick}
        >
          <div>
          <Image
              src="/download-solid.svg"
              width={10}
              height={10}
              layout="responsive"
              objectFit="contain"
              alt="앱 설치"
            />
          </div>
        </Button>
        )}
        </>
    )
}

const Button = styled.button`
    position: fixed;
    top: 30px;
    right: 30px;
    border-radius: 5px;
    cursor:pointer;
    border:none;

    div{
      width: 30px;
      height: 30px;
      opacity: 0.6;
    }

    @media (max-width: 768px) {
      top: 40px;
      right: 15px;
    div{
      width: 15px;
      height: 15px;
      opacity: 0.6;
    }
    }
`;

export default DownLoadBtn;