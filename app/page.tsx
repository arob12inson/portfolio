import Image from "next/image";

export default function Home() {
  return (
    <div className="flex p-0 w-full h-full justify-center items-center">
      <figure className="md:flex rounded-xl md:w-8/12 p-8 md:p-0  items-center ">
        <Image
          src="/me.jpg"
          alt="This is supposed to be a picture of me, but I guess it isn't."
          width={4032}
          height={3024}
          className="w-56 h-56 rounded-full mx-auto"
          style={{
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
        <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
          <figcaption className="font-medium">
            <h1 className="font-bold">About Me</h1>
          </figcaption>
          <blockquote>
            <p className="text-lg font-medium">
              Hi! I&#39;m Aidan Robinson, a Computer Science Student at UCLA. I
              love building things that excites people and challenges what they
              believe is possible. I&#39;m interested in Software Engineering,
              Artificial Intelligence/Machine Learning, and the startup world.
              Away from the computer, I love playing piano & guitar, listening
              to classic rock , and boxing!
            </p>
          </blockquote>
        </div>
      </figure>
    </div>
  );
}
