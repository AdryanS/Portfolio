import BackgroundParticle from "src/components/background";
import Lottie from "lottie-react-web";
import animation from "../src/animations/404-error.json"
import Link from "next/link";

import {
    GlobalStyle, 
    StylesErrorText,
    StylesText, 
    StylesInfoText, 
    StylesSecundaryInfoText, 
    StylesButton
} from "src/styles/styles404";

const Index: React.FC = () => {
  return (
    <>
        <BackgroundParticle/>
        <GlobalStyle/>
        <main>
            <div>
                <StylesErrorText>404</StylesErrorText>
                <StylesText>Ooops!</StylesText>
                <StylesInfoText>Page Not Found!</StylesInfoText>
                <StylesSecundaryInfoText>This page dosen&lsquo;t exist or was removed</StylesSecundaryInfoText>
                <Link href="/">
                    <StylesButton>
                        <p>Back to Home</p>
                    </StylesButton>
                </Link>
            </div>
            <div className="LottieFileDiv">
                <Lottie
                    options={{
                        animationData: animation,
                        loop: true,
                    }}
                />
            </div>
        </main>
    </>
  );
};

export default Index;