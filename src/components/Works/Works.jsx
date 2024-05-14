import { Heading } from "../OneForAll/Heading"

const Works = () => {
  return (
    <div id="myWorks" className="relative h-screen p-16 bg-black/60 backdrop-blur-lg backdrop-saturate-150">
        <Heading heading="Recent Works" />
        <div className="flex">
            {/* <div className="w-[2400px] h-[400px] bg-red-600"></div> */}
        </div>
    </div>
  )
}

export default Works