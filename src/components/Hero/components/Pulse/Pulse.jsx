const Pulse = () => {
  return (
    <span class="relative flex h-[1vw] w-[1vw]">
        <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
        <span class="relative inline-flex rounded-full h-[1vw] w-[1vw] bg-white"></span>
    </span>
  )
}

export default Pulse