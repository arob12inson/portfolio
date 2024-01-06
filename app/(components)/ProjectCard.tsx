import Image from "next/image";

const ProjectCard = () => {
  return (
    <div className="flex flex-col bg-card hover:bg-card-hover rounded-md shadow-lg p-3 m-2 min-w-full">
      <div className="flex mb-3">
        prioritydisplay
        <div className="ml-auto">delete block</div>
      </div>
      <h4>Title</h4>
      <hr className="h-px border-0 bg-page mb-2" />
      <p className="whitespace-pre-wrap">Lorem ipsum dolor sit amet,</p>
      <div className="flex-grow"></div>
      <div className="flex mt-2">
        <div className="flex flex-col">
          <p className="text-xs my-1">time</p>
          progress display
        </div>
        <div className="ml-auto flex items-end">Status display</div>
      </div>
    </div>

    // <div className="flex flex-col">
    //   <div>
    //     <Image src="/me.jpg" alt="Project image" width={400} height={300} />
    //   </div>
    // </div>
  );
};

export default ProjectCard;
