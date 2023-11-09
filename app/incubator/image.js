import Image from "next/image";

const HeroImage = () => (
    <div className="flex items-center justify-center w-full lg:w-1/2">
        <Image
            src="/img/incubator/main.png"
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
