import "./Spinner.css";

const Spinner = () => {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            {[0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1, 1.1].map((delay, index) => (
        <circle
          key={index}
          className="spinner"
          cx={[12, 16.5, 7.5, 19.79, 4.21, 21, 3, 19.79, 4.21, 16.5, 7.5, 12][index]}
          cy={[3, 4.21, 4.21, 7.5, 7.5, 12, 12, 16.5, 16.5, 19.79, 19.79, 21][index]}
          r="0"
          style={{ animationDelay: `${delay}s` }}
        />
      ))}
    </svg>
    )
}

export default Spinner