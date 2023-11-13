
const Hamburger= (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={50}
    height={50}
    viewBox="0 0 375 375"
    {...props}
  >
    <defs>
      <clipPath id="a">
        <path d="M9.66 9.66h355.5v355.5H9.66Zm0 0" />
      </clipPath>
    </defs>
    <g clipPath="url(#a)">
      <path
        fill="#f9a8d4"
        d="M309.008 99.207c0 10.39-8.426 18.813-18.82 18.813H84.778c-10.387 0-18.813-8.422-18.813-18.813 0-10.39 8.426-18.816 18.812-18.816h205.41c10.395 0 18.82 8.425 18.82 18.816Zm0 88.887c0 10.394-8.426 18.816-18.82 18.816H84.778c-10.387 0-18.813-8.422-18.813-18.816v-1.207c0-10.39 8.426-18.82 18.812-18.82h205.41c10.395 0 18.82 8.43 18.82 18.82Zm0 87.676c0 10.398-8.426 18.82-18.82 18.82H84.778c-10.387 0-18.813-8.422-18.813-18.82v-.04c0-10.39 8.426-18.812 18.812-18.812h205.41c10.395 0 18.82 8.422 18.82 18.812ZM324.77 9.668H50.203c-22.39 0-40.543 18.148-40.543 40.543v274.562c0 22.387 18.152 40.54 40.543 40.54H324.77c22.386 0 40.543-18.153 40.543-40.54V50.211c0-22.395-18.157-40.543-40.543-40.543"
      />
    </g>
  </svg>
)
export default Hamburger