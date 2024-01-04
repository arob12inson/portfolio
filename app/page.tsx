import Image from "next/image";

export default function Home() {
  return (
    <div className="flex p-6 w-full h-full justify-center items-center">
      <div className="flex w-6/12 h-full justify-center items-center space-x-6">
        <div className="flex flex-col w-4/12 h-8/12 items-center">
          <Image
            src="/me.jpg"
            alt="This is supposed to be a picture of me, but I guess it isn't"
            width={4032}
            height={3024}
            className="w-56 h-56 rounded-full"
            style={{
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
          <label className="text-md">Me!</label>
          {/* <img
            className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
            src="/sarah-dayan.jpg"
            alt="This is supposed to be a picture of me, but I guess it isn't"
          /> */}
        </div>
        <div className="flex flex-col w-8/12 h-8/12 items-left space-y-2 justify-between">
          <h1 className="font-bold">About Me</h1>
          <p className="text-lg">
            Hi! I'm Aidan Robinson, a Computer Science Student at UCLA. I love
            building things that excites people and challenges what they believe
            is possible. I'm interested in Software Engineering, Artificial
            Intelligence/Machine Learning, and the startup world. Away from the
            computer, I love playing piano & guitar, listening to classic rock ,
            and boxing!
          </p>
        </div>
      </div>
    </div>
  );
}
