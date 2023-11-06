import Image from "next/image";
import incubatorMain from "../../public/img/incubatorMain.png";

const HeroImage = () => (
    <div className="flex items-center justify-center w-full lg:w-1/2">
        <Image
            src={incubatorMain}
            width="616"
            height="617"
            className={"object-cover"}
            alt="Etherlink Pastel Green Blockchain Spiral"
            loading="eager"
            placeholder="blur"
        />
    </div>
)

export default HeroImage;
