import Image from "next/image";
import etherlinkMain from "../../public/img/etherlinkMain.png";

const HeroImage = () => (
    <div className="flex items-center justify-center w-full lg:w-1/2">
        <Image
            src={etherlinkMain}
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
