import Image from "next/image";

const ProjectCard = ({ title }: { title: string }) => {
  return (
    <div
      className="flex flex-col bg-card hover:bg-card-hover 
    rounded-md shadow-lg p-3 m-2 w-full lg:w-5/12 xl:w-1/4 h-72 lg:h-96 text-black"
    >
      <h4>{title}</h4>
      <hr className="h-px border-0 bg-page mb-2" />
      <p className="whitespace-pre-wrap text-black oveflow-hidden">
        Lorem ipsum dolor sit amet,
      </p>
      <div className="flex-grow"></div>
      <div className="flex mt-2">
        <div className="ml-auto flex items-end">Status display</div>
      </div>
      {/* TODO maybe add some icons? like the github repo? */}
      {/* TODO make cards all the same fixed size, no overflow allowed */}
    </div>

    // <div className="flex flex-col">
    //   <div>
    //     <Image src="/me.jpg" alt="Project image" width={400} height={300} />
    //   </div>
    // </div>
  );
};

export default ProjectCard;
