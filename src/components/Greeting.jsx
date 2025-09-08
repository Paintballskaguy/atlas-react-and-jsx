import daySvg from '../assets/day.svg';
import eveningSvg from '../assets/evening.svg';
import nightSvg from '../assets/night.svg';

const Greeting = () => {
  const currentHour = new Date().getHours();
  let text, imageSrc;

  if (currentHour >= 6 && currentHour < 12) {
    text = "Good Morning!";
    imageSrc = daySvg;
  } else if (currentHour >= 12 && currentHour < 17) {
    text = "Good Afternoon!";
    imageSrc = daySvg;
  } else if (currentHour >= 17 && currentHour < 21) {
    text = "Good Evening!";
    imageSrc = eveningSvg;
  } else {
    text = "Good Night!";
    imageSrc = nightSvg;
  }

  return (
    <h1 className="greeting">
      <img src={imageSrc} alt={text} />
      {text}
    </h1>
  );
};

export default Greeting;